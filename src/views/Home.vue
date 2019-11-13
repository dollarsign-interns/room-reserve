<template>
  <div class="section">
    <div class="container">
      <h1 class="title">Room Reserve</h1>
      <div>
        <room-group v-for="roomGroup in roomGroupList" :group-name="roomGroup" v-bind:key="roomGroup" />
      </div>
      <button @click="logout">Logout</button>
    </div>
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
      roomGroupList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
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
