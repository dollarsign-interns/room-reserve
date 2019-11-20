<template>
  <div id="app" >
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
        router.replace('/home')
      } else {
        store.dispatch('loggedOut');
      }
    });
  },
};
</script>
<style>

</style>
