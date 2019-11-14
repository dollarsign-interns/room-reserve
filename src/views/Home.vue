<template>
  <div class="section">
    <center>
    <div class="overflow">
      <h1 class="title">ระบบจองห้อง
        <b-button class="is-danger" @click="logout">Logout</b-button>
      </h1><hr class="hr1">
      <div class="overflow">
        <room-group class="wrapper1" v-for="roomGroup in roomGroupListE" :group-name="roomGroup" v-bind:key="roomGroup" />
        <room-group  class="wrapper2" v-for="roomGroup in roomGroupListA" :group-name="roomGroup" v-bind:key="roomGroup" />
        <room-group class="wrapper2" v-for="roomGroup in roomGroupListC" :group-name="roomGroup" v-bind:key="roomGroup" />
        <room-group class="wrapper2" v-for="roomGroup in roomGroupListD" :group-name="roomGroup" v-bind:key="roomGroup" />
      </div>
      <div>
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
       roomGroupListA:['L','H','D','K'],
      roomGroupListC:['G','C','J','F'],
      roomGroupListD:['B','I','E','A'],
      roomGroupListE:['R','O','Q','N','P','M'],

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

.wrapper1{
      margin: 5px;
    float: left;
    width: 600px;
    height: 50px;
    margin-left: auto;
    display: flex;
    flex: -100%;
}
.wrapper2{
     margin: 5px;
    float: left ;
    width: 500px;
    height: 50px;
}
.overflow{
  width: 1700px;
  height: auto;
}


.hr1{
    border-top: 2px solid black;
}

</style>
