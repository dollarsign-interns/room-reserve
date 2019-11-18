<template>
  <div class="">
     <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img  
                    src="../assets/door.png"
                      >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
               ชื่อผู้ใช้
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button type="is-danger"  outlined  @click="logout">ออกจากระบบ</b-button>
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
  <div class="container">
    <h1 class="title">ระบบจองห้อง
      
    </h1><hr class="hr1">
    <div>
      <div class="ex1">
        <div class="wrapper1 ">
          <room-group class="space" v-for="roomGroup in roomGroupListOne" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>
        <div class="wrapper2">
          <room-group class="space" v-for="roomGroup in roomGroupListTwo" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div> 
        <div class="wrapper3 ">
          <room-group  class="space" v-for="roomGroup in roomGroupListThree" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>
        <div class="wrapper4">
          <room-group  class="space" v-for="roomGroup in roomGroupListFour" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>
        <div class="wrapper5">
          <room-group  class="space" v-for="roomGroup in roomGroupListFive" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>          
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import store from '@/store/store';
import firebase from 'firebase/app';
import RoomGroup from '@/components/RoomGroup.vue';

export default {
  isImageModalActive:false,
  name: 'Home',
  components: {
    RoomGroup,
  },
  data() {
    return {
      roomGroupListOne: ['L', 'K', 'J', 'I'],
      roomGroupListTwo: ['H', 'G', 'F', 'E'],
      roomGroupListThree: ['D', 'C', 'B', 'A'],
      roomGroupListFour: ['R', 'Q', 'P'],
      roomGroupListFive: ['O', 'N', 'M']  
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

div.ex1 {
  position: absolute;
  width: 97.5%;
  height: 1400%;
  overflow: auto;
}

.row {
  content: "";
  display: table;
  clear: both;
}
.wrapper5 {
  position: absolute;
  width: 450px;
  left: 270pt;
  top:40px
}
.wrapper4 {
  width: 450px;
  position: absolute;
  left: 0px;
  top:40px;
  padding: 100;
}
.wrapper3{
  position: absolute;
  width: 130%;
  left: 1090pt;
  top: 100px;
}
.wrapper2 {
  position: absolute;
  width: 130%;
  left: 820pt;
  top: 100px
}
.wrapper1 {
  position: absolute;
  width: 130%;
  left: 550pt;
  top: 100px
}

.space{
  margin-bottom: 10px;
}

.hr1{
    border-top: 2px solid black;
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width:600px) {
  .column {
    width: 100%;
  }
}
</style>
