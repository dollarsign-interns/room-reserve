<template>
  <div id="app">
    <router-view />
    <div id="firebaseui-auth-container"></div>
    <b-loading class="is-primary" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>
<script>
import store from '@/store/store';
import { mapState } from 'vuex';
import firebase from 'firebase/app';

export default {
  name: 'App',
  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
    }),
  },
  created() {
    const router = this.$router;
    store.dispatch('bindRooms');
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.debug({ user });
        store.dispatch('loggedIn');
        router.push('/home').catch((err) => {});
      } else {
        store.dispatch('loggedOut');
        router.push('/').catch((err) => {});
      }
    });
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
