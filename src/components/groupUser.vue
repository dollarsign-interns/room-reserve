<template>
  <div>
    <roomUser v-for="room in roomList" :name="`${groupName}${room}`" v-bind:key="`${groupName}${room}`" />
  </div>
</template>
<script>
import roomUser from '@/components/roomUser.vue';

export default {
  name: 'RoomGroup',
  components: {
    roomUser,
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
