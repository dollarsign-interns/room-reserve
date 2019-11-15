<template>
  <b-tooltip :label="`ผู้จอง : ${room && room.owner}`" type="is-dark" position="is-top" :active="!!room">
      <b-button v-if="room"
                class="sizebutton" 
                type="is-dark"  
                @click="cancelRoom" >
                 <b-icon style="color: gold" pack="fas" icon="check"></b-icon>
      </b-button>
      <b-button v-else
                class="sizebutton"
                type="is-dark"  
                outlined 
                @click="selectRoom" >
                {{ name }} 
      </b-button>
  </b-tooltip>  
</template>
<script>
import store from '@/store/store';

export default {
  name: 'Room',
  props: {
    name: {
      type: String,
      default: 'default room name',
    },
  },
  computed: {
    room() {
      return store.getters.room(this.name);
    },
  },
  methods: {
    selectRoom() {
      this.$buefy.dialog.prompt({
        message: `เพิ่มชื่อผู้จอง`,
        inputAttrs: {
          placeholder: 'พิมพ์ชื่อ',
          maxlength: 500,
          
        },
        confirmText: 'ตกลง',
        cancelText: 'ยกเลิก',
        trapFocus: true,
        onConfirm: (value) => store.dispatch('updateRoom',  { id: this.name, owner: value }),
      });
    },
    cancelRoom() {
      this.$buefy.dialog.confirm({
        message: `${this.room.owner}`,
        confirmText: 'ลบข้อมูลการจอง',
        cancelText: 'ปิด',
        type: 'is-danger',
        onConfirm: () => store.dispatch('removeRoom', {id:this.name})
      })
    },
  },
};
</script>
<style>

.sizebutton {
  width: 50px;
  height: 150px;
  margin-left: 2px
}

</style>
