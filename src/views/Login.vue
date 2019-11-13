<template>
  <div id="nav">
    <h1>Login</h1>
    <button @click="submit">Login With Google</button>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import ui from '../store/firebase-ui';
import store from '../store/store';

export default {
  methods: {
    submit() {
      const router = this.$router;
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log({ token, user });
          store.dispatch('loggedIn');
          router.push('/home');
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log({ error });
          store.dispatch('loggedOut');
        });
    },
  },
};
</script>
<style>
.grid-container {
  padding: 60px;
  text-align: center;
}
</style>
