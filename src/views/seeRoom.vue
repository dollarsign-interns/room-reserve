<template>
  <div class="section">    
  <div class="container">
    <h1 class="title">เช็คห้องว่าง
      <b-button type="is-success"  outlined  @click="logout">กลับไปที่หน้า Login</b-button>
    </h1><hr class="hr1">
      <div class="ex1">
        <div class="wrapper1 ">
          <groupUser class="space" v-for="roomGroup in roomGroupListOne" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>
        <div class="wrapper2">
          <groupUser class="space" v-for="roomGroup in roomGroupListTwo" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div> 
        <div class="wrapper3 ">
          <groupUser class="space" v-for="roomGroup in roomGroupListThree" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>
        <div class="wrapper4">
          <groupUser  class="space" v-for="roomGroup in roomGroupListFour" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>
        <div class="wrapper5">
          <groupUser class="space" v-for="roomGroup in roomGroupListFive" :group-name="roomGroup" v-bind:key="roomGroup" />
        </div>          
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store/store';
import firebase from 'firebase/app';
import groupUser from '@/components/groupUser.vue';

export default {
  name: 'seeroom',
  components: {
    groupUser,
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
        this.$router.replace({name:'login'});
    },
  },
};
</script>
<style scoped>
div.ex1 {
  margin-left: 50px;
  position: absolute;
  width: 97.5%;
  height: 550%;
  overflow-y: auto;

}

.row {
  content: "";
  display: table;
  clear: both;
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
.wrapper5 {
  position: absolute;
  width: 47%;
  left: 270pt;
  top:40px
}
.wrapper4 {
  width: 47%;
  position: absolute;
  left: 0px;
  top:40px;
  padding: 100;
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
