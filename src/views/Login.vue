<template>
    <div  class="grid-container" >
      <form action=""  >
      <section @click="onSubmit" class="col-md-4" > 
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
        </form>
        <section>
          <button 
                class="button is-primary is-medium"
                @click="submit">
            ดูห้องว่าง
        </button>
        </section>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import ui from '../store/firebase-ui';
import store from '../store/store';
import Room from '@/components/Room';

export default {
  data(){
    return{
      form:{
        email:'',
        password:'',
      },
      error: null,
    }
  },
  methods: {
    onSubmit() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: 'Home' });
        })
          .catch((err) => {
          this.error = err.message;
        });
    },
    submit(){
        this.$router.replace({name:'seeroom'});
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
