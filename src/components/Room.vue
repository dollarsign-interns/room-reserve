<template>
  <b-tooltip :label="`ผู้จอง : ${room && room.owner}`" position="is-right" :active="!!room" type="is-dark">
<b-button v-if="room"
                class="sizebutton" 
                type="is-dark"  
                @click="cancelRoom" >
                <div style="height:100px;">{{name}}</div>
                <div style="margin-top:-40px"><b-icon style="color: gold;" pack="fas" icon="check"></b-icon></div>
                
      </b-button>
      <b-button v-else
                class="sizebutton"
                type="is-dark"  
                outlined 
                @click="selectRoom" >
                <div style="height:100px;">{{name}}</div> 
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
          maxlength: 1000,
          
        },
        confirmText: 'ตกลง',
        cancelText: 'ยกเลิก',
        trapFocus: true,
         onConfirm: (value) => store.dispatch('updateRoom', { id: this.name, owner: value }),
      });
    },
    cancelRoom() {
      this.$buefy.dialog.confirm({
        title: `ข้อมูลผู้จอง  `,
        message: `${this.room.owner}`,
        confirmText: 'ต้องการลบหรือไม่ ?',
        cancelText: 'ปิด',
        type: 'is-danger',
        onConfirm: () => store.dispatch('removeRoom', {id:this.name})
      })
    },
  },
};
</script>
<style  scoped>
.sizebutton{
width:40px;
height:100px;
margin-left: 3px;
}

</style>



