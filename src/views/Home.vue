<template>
  <div class="section">
  <div class="container">
    <h1 class="title">ระบบจองห้อง
      <b-button type="is-danger"  outlined  @click="logout">ออกจากระบบ</b-button>
    </h1><hr class="hr1">
    <div class="ex1">
      <div class="relative">
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
div.relative {
  position: relative;
  width: 350px;
  height: 200px;

} 

div.ex1 {
  width: 100%;
  height: 540px;
  overflow: auto;
  border: 2px solid rgb(28, 29, 28);
}
.wrapper3{
  position: absolute;
  width: 100%;
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
  width: 350px;
  left: 270pt;
  top:40px
}
.wrapper4 {
  width:400px;
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

</style>
