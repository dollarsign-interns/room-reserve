<template>
  <div class="section">
    <center>
    <div class="overflow">
      <h1 class="title">เช็คห้องว่าง
        <b-button class="is-success" @click="logout">กลับไปหน้า Login</b-button>
      </h1><hr class="hr1">
      <div class="overflow">
        <groupUser  class="wrapper1" v-for="roomGroup in roomGroupListE" :group-name="roomGroup" v-bind:key="roomGroup" />
        <groupUser  class="wrapper2" v-for="roomGroup in roomGroupListA" :group-name="roomGroup" v-bind:key="roomGroup" />
        <groupUser  class="wrapper2" v-for="roomGroup in roomGroupListC" :group-name="roomGroup" v-bind:key="roomGroup" />
        <groupUser  class="wrapper2" v-for="roomGroup in roomGroupListD" :group-name="roomGroup" v-bind:key="roomGroup" />
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
import groupUser from '@/components/groupUser.vue';

export default {
  name: 'seeroom',
  components: {
    groupUser,
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
        this.$router.replace({name:'login'});
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
