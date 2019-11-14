<template>
    <div  class="grid-container">
      <section @click="submit" class="col-md-4">
      <b-field label="Email">
            <b-input type="email" 
            placeholder="Email"
            autofocus
            v-model="form.email">
            </b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password"
             placeholder="Password"
              id="password"
              name="password"
             required
             v-model="form.password"
                password-reveal>
            </b-input>
        </b-field>
        <b-button class="is-success" type="sumbit">Login</b-button>
        </section>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import ui from '../store/firebase-ui';
import store from '../store/store';

export default {
  data(){
    return{
      form:{
        email:'',
        password:'',
      }
    }
  },
  methods: {
    submit() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: 'Home' });
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
