<template>
    <div class="body" >    
    <router-view />
      <b-navbar class="">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/door.png"
                      >
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a  @click="submit" class="button is-primary">
                        <strong>เช็คห้องว่าง</strong>
                    </a>
                    <a class="button is-light" @click="isImageModalActive = true">
                        เช็คแผนผังห้อง
                    </a> 
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
      <b-modal :active.sync="isImageModalActive">
                    <p class="image is-2by1">
                      <img src="../assets/mapping.png">
                      </p>
                    </b-modal>
      <center>
      <form  class="card" style="width:450px;">
      <section  v-on:keyup.enter="onSubmit"   class="" style="width:330px" > 
      <b-field 
            label="Email">
            <b-input 
            type="email" 
            placeholder="Email"
            required
            autofocus
            v-model="form.email"
            oninvalid="this.setCustomValidity('กรุณาใส่ Email')">
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
                password-reveal
                oninvalid="this.setCustomValidity('กรุณาใส่รหัสผ่าน')">
            </b-input>
        </b-field>
        <br>
        <b-button   @click="onSubmit" style="width:330px;
                  height:45px;" class="is-success" type="submit">Login</b-button>
        </section>
        <br>
        </form>
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
      isImageModalActive:false,
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
          this.$buefy.toast.open({
                    message: 'เข้าสู่ระบบเรียบร้อย',
                    type: 'is-success'
                });
        })
          .catch((err) => {
          this.error = err.message;
          this.$buefy.toast.open({
                    message: 'Email หรือ รหัสผ่านผิด',
                    type: 'is-danger'
                });
        });
    },
    submit(){
        this.$router.replace({name:'seeroom'});
    },
  },
};
</script>
<style >
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}



</style>
