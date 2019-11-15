<template>
  <b-tooltip :label="`ความลับ`" position="is-right" :active="!!room" type="is-dark">
    <b-button v-if="room"
                class="button-class" 
                type="is-dark" >
                <div style="hight:100px">{{ name }} </div>
                <div style="margin-top:40px;"><b-icon style="color:gold;" pack="fas" icon="check"></b-icon></div>
      </b-button>
      <b-button v-else
                class="button-class"
                type="is-dark"  
                outlined  >
                <div style="margin-bottom:65px">{{ name }} </div>
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
<style scoped>
.button-class{
width:40px;
height:100px;
margin-left: 3px;
}
</style>