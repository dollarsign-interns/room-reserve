<template>
    <div  class="grid-container" >
      <form action=""  >
      <section @click="onSubmit" class="col-md-4" > 
      <b-field label="Email">
            <b-input type="email" 
            placeholder="Email"
            required
            autofocus
            v-model="form.email">
            </b-input>
      </b-field>
      <b-field label="รหัสผ่าน">
            <b-input type="password"
             placeholder="รหัสผ่าน"
              id="password"
              name="password"
             required
             v-model="form.password"
                password-reveal>
            </b-input>
        </b-field>
        <b-button class="is-success" type="onSumbit">Login</b-button>
        </section>
        </form>
        <section>
          <br>
          <button 
                class="button is-primary is-medium"
                @click="submit">
            เช็คห้องว่าง
        </button>
        </section>
        <br>
        <button class="button is-primary is-medium"
            @click="isImageModalActive = true">
            เช็คแผนผังห้อง
        </button>
        <b-modal :active.sync="isImageModalActive">
            <p class="image is-2by2">
                <img src="../assets/map.png">
            </p>
        </b-modal>
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
      isImageModalActive: false,
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
