<template>
    <b-tooltip :label="`ผู้จอง : ${room && room.owner}`" position="is-top" :active="!!room">
      <b-button type="is-primary" outlined @click="selectRoom" >{{ name }} 

      </b-button>
       <b-button type="is-primary" outlined @click="cancelRoom" >{{ name }} </b-button>
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
        message: `เพิ่มชื่อเจ้าของห้อง`,
        inputAttrs: {
          placeholder: 'พิมพ์ชื่อ',
          maxlength: 100,
        },
        confirmText: 'ตกลง',
        cancelText: 'ยกเลิก',
        trapFocus: true,
        onConfirm: (value) => store.dispatch('updateRoom', { id: this.name, owner: value }),
      });
    },
    cancelRoom() {
      this.$buefy.dialog.confirm({
        title: 'ลบข้อมูลการจองห้อง',
        message: 'คุณต้องการ <b>ลบ</b> ข้อมูลการจองห้องหรือไม่ ?',
        confirmText: 'ลบ',
        cancelText: 'ยกเลิก',
        type: 'is-danger',
        onConfirm: () => store.dispatch('removeRoom', {id:this.name})
      })
    },
  },
};
</script>
