อ้น, [15.11.19 17:21]
<template>
    <div class="" >    
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
           <div   class="body">
             <br>
             <br>
             <br>
             <br>
             <center>
        <div style="margin-left:auto;margin-right:auto" >
          <form  class="card" style="width:450px;">
      <section   v-on:keyup.enter="onSubmit"   class="" style="width:330px;margin-left:-50px" > 
        <br>
      <b-field 
      style="margin-right:175px;"
            label="Email">
      </b-field>  
            <b-input 
            style="margin-left:50px;"
            type="email" 
            placeholder="Email"
            required
            title="ใส่ Email"
            autofocus
            v-model="form.email"
            >
            </b-input>
           <br>
            <b-field style="margin-right:175px;"
            label="รหัสผ่าน">
            
            </b-field>
            <b-input 
            style="margin-left:50px;"
            type="password"
             placeholder="รหัสผ่าน"
              id="password"
              name="password"
             required
             v-model="form.password"
              password-reveal
              title="ใส่รหัสผ่าน"  >
            </b-input>
        <br>
        <div>
    <VueLoadingButton
    style="width:280px;margin-left:50px; "
      class="button"
      @click.native="onSubmit"
      :loading="isLoading"
    >Login</VueLoadingButton>
          </div>  
        </section>
        <br>
        </form>
        </div>
        </center>
        </div>         
  </div>
</template>
<script>
import firebase from 'firebase/app';
import ui from '../store/firebase-ui';
import store from '../store/store';
import Room from '@/components/Room';
import VueLoadingButton from "vue-loading-button";
export default {
  data(){
    
    return{
      isLoading: false,
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
        this.isLoading = true
          setTimeout(() => (this.isLoading = false), 7000)
                    this.$buefy.toast.open({
                    message: 'เข้าสู่ระบบเรียบร้อย',
                    type: 'is-success',
                })
        .then(() => {
          this.$router.replace({ name: 'Home' });

        })
        .catch((err) => {
          this.error = err.message;
          this.$buefy.toast.open({
                    message: 'กรุณาใส่ Email หรือ รหัสผ่านให้ถูกต้อง',
                    type: 'is-danger',
                });
        });
    },
    submit(){
        this.$router.push({name:'seeroom'});
    },
  },
  components: {
    VueLoadingButton
  }
};
</script>
<style  scopped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgb(240, 20, 20);
}
.body {
    margin: 0;
    width: auto;
    height: 500px;
    font-family: "Exo", sans-serif;
    color: #fff;
    background: linear-gradient(-45deg, #000000, #e73c7e, #23a6d5, #000303);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.container {
    width: 100%;
    position: absolute;
    top: 35%;
    text-align: center;
}

h1 {
    font-weight: 300;
}

h3 {
    color: #eee;
    font-weight: 100;
}

h5 {
    color:#eee;
    font-weight:300;
}

a,
a:hover {
    text-decoration: none;
    color: rgb(241, 1, 1);
}
.example {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}

</style>
