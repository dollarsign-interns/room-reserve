<template>
  <b-tooltip :label="`owner: ${room && room.owner}`" position="is-top" :active="!!room">
    <b-button v-if="room" 
                type="is-primary"  >
                {{ name }}
      </b-button>
      <b-button v-else
                type="is-primary"  
                outlined  >
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
};
</script>
