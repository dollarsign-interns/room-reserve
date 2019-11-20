<template>
    <div>    
    <router-view/>
      <b-navbar>
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
                    <a  @click="submit" 
                        class="button is-primary"
                        :loading="isLoading"
                        :can-cancel="true">
                        <strong>เช็คห้องว่าง</strong>
                    </a>
                    <a class="button is-info" @click="isImageModalActive = true">
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
           <div class="body">
             <br>
             <br>
             <br>
             <br>
             <center>
        <div style="margin-left:auto;margin-right:auto" >
          <form  class="card" style="width:450px;">
      <section   v-on:keyup.enter="onSubmit"   class="" style="width:330px;margin-left:-10px" > 
        <br>
        <p style="margin-right:250px">อีเมล</p>
      <b-field > 
              <b-input 
                style="width:300px"
                oninvalid= "if (this.value == ''){this.setCustomValidity('โปรดใส่อีเมล')} if (this.value != ''){this.setCustomValidity('กรอกอีเมลไม่ถูกต้อง กรุณาใส่ @ เช่น abx@abx.xo')}" 
                oninput="setCustomValidity('')"
                type="email"  
                placeholder="อีเมล"
                required
                title="ใส่ Email"
                autofocus
                v-model="form.email"
            >
            </b-input>
      </b-field>  
           <br>
            <p style="margin-right:230px">รหัสผ่าน</p>
            <b-field>
            <b-input 
              style="width:300px"
            oninvalid="this.setCustomValidity('โปรดใส่รหัสผ่าน')"
            type="password"
             placeholder="รหัสผ่าน"
              id="password"
              name="password"
             required
             v-model="form.password"
              password-reveal
              title="ใส่รหัสผ่าน"  >
            </b-input>
            </b-field>

        <br>
        <div>
    <b-button style="width:300px;" 
              class="is-primary"
              @click="onSubmit"
              :loading="isLoading"
              :can-cancel="true">
              Login
    </b-button>
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
      isFullPage: true,
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
              this.isLoading = true
          setTimeout(() => {
                    this.isLoading = false
                }, 3000);
        firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((user) => {
          this.$buefy.toast.open({
                    message: 'เข้าสู่ระบบสำเร็จ',
                    type: 'is-success',
                })
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
    background: linear-gradient(-45deg, #000000, #B22222, #191970, #000303);
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
