<template>
  <div >
    <room v-for="room in roomList" :name="`${groupName}${room}`" v-bind:key="`${groupName}${room}`" />
  </div>
</template>
<script>
import Room from '@/components/Room.vue';

export default {
  name: 'RoomGroup',
  components: {
    Room,
  },
  data() {
    return {
      roomList: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  props: {
    groupName: {
      type: String,
      default: 'default group name',
    },
  },
};
</script>
