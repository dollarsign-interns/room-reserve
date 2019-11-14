<template>
  <div class="section">
    <center>
    <div class="container">
      <h1 class="title">ระบบจองห้อง
        <b-button type="is-danger"  outlined  @click="logout">Logout</b-button>
      </h1><hr class="hr1">
      <div >
        <room-group class="wrapper" v-for="roomGroup in roomGroupListB" :group-name="roomGroup" v-bind:key="roomGroup" />
        <room-group class="wrappers" v-for="roomGroup in roomGroupListA" :group-name="roomGroup" v-bind:key="roomGroup" />
        
      </div>
      
    </div>
    </center>
  </div>
</template>
<script>
import store from '@/store/store';
import firebase from 'firebase/app';
import RoomGroup from '@/components/RoomGroup.vue';

export default {
  name: 'Home',
  components: {
    RoomGroup,
  },
  data() {
    return {
      roomGroupListA: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      roomGroupListB: ['M', 'N', 'O', 'P', 'Q', 'R']

    };
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
<style scoped>

.wrapper {
      margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: auto;
}
.wrappers{
     margin: 5px;
    border: 1px solid #ccc;
    float: right ;
    width: auto;
}
.position{
   position: absolute;
  left: 150px;
}
.hr1{
  border-top: 2px solid black;
}

</style>
