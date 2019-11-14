<template>
  <b-tooltip :label="`owner: ${room && room.owner}`" position="is-top" :active="!!room">
    <b-button type="is-primary" outlined :disabled="room">{{ name }}</b-button>
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
};
</script>
