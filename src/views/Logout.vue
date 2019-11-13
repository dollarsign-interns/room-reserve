<template>
      <div id="nav">
        <router-link to="/logout">Home</router-link>|
        <router-link to="/login" @click="logout">Logout</router-link>
      </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'logout',
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' });
        });
    },
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
