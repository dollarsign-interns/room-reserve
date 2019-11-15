อ้น, [15.11.19 17:21]
<template>
    <div  class="section" >    
      <center>
      <form  style="width:330px">
      <section @click="onSubmit" class="" > 
      <b-field 
            label="Email">
            <b-input 
            type="email" 
            placeholder="Email"
            required
            autofocus
            v-model="form.email">
            </b-input>
            </b-field>
            <b-field 
            label="รหัสผ่าน">
            <b-input 
            type="password"
             placeholder="รหัสผ่าน"
              id="password"
              name="password"
             required
             v-model="form.password"
                password-reveal>
            </b-input>
        </b-field>
        <b-button   style="width:160px;
                  height:45px;" class="is-success" type="onSumbit">Login</b-button>
        </section>
        <br>
        <button 
                style="width:160px;
                  height:45px;"  
                class="button is-primary is-medium"
                @click="submit">
            เช็คห้องว่าง
        </button> 
        </form>
        <br>
        </center>
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
