<template>
  <div class="section">
    <center>
    <div class="container">
      <h1 class="title">เช็คห้องว่าง
        <b-button class="is-success" @click="logout">กลับไปหน้า Login</b-button>
      </h1><hr class="hr1">
      <div class="position">
        <groupUser  class="wrapper" v-for="roomGroup in roomGroupList" :group-name="roomGroup" v-bind:key="roomGroup" />
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
      roomGroupList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
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
.wrapper {
      margin: 5px;
    border: 1px solid #ccc;
    float: left;
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
