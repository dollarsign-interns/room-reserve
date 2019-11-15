<template>
  <b-tooltip :label="`owner: ${room && room.owner}`" position="is-top" :active="!!room">
    <b-button v-if="room"
                class="button-class" 
                type="is-dark"  
                @click="cancelRoom" >
                <div style="hight:100px">{{ name }} </div>
                 <div style="margin-top:40px;"><b-icon style="color:gold;" pack="fas" icon="check"></b-icon></div>
      </b-button>
      <b-button v-else
                class="button-class"
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
};
</script>
<style scoped>
.button-class{
width:40px;
height:100px;
margin-left: 3px;
}
</style>