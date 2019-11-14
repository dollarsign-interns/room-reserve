<template>
  <div class="section">
    <div class="container">
      <h1 class="title">เช็คห้องว่าง
        <b-button class="is-success" @click="logout">กลับไปหน้า Login</b-button>
      </h1>
      
      <div>
        <groupUser v-for="roomGroup in roomGroupList" :group-name="roomGroup" v-bind:key="roomGroup" />
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
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 200px;
  margin: 0 auto;
  float: left;
}

.wrapper > div {
  border: 2px solid rgb(70, 68, 68);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1em;
  color: #000000;
}
.column {
  float: left;
  width: 33.33%;
  padding: 4px;
}
</style>
