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
      roomGroupListOne: ['D', 'C', 'B', 'A'],
      roomGroupListTwo: ['H', 'G', 'F', 'E'],
      roomGroupListThree: ['L', 'K', 'J', 'I'],
      roomGroupListFour: ['O', 'N', 'M'],
      roomGroupListFive: ['R', 'Q', 'P']  
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
  position: absolute;
  width: 97.5%;
  height: 550%;
  overflow: auto;
}

.row {
  content: "";
  display: table;
  clear: both;
}
.wrapper3{
  position: absolute;
  width: 130%;
  left: 105pc;
  top: 190px;
}
.wrapper2 {
  position: absolute;
  width: 130%;
  left: 78.6pc;
  top: 190px
}
.wrapper1 {
  position: absolute;
  width: 130%;
  left: 52.3pc;
  top: 190px
}
.wrapper5 {
  position: absolute;
  width: 130%;
  left: 313pt;
  top:40px
}
.wrapper4 {
  width: 130%;
  position: absolute;
  left: 0px;
  top:40px
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
