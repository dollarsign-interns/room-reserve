<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
      <router-link to="/login" >Login</router-link>
     <div class="grid-container">
    <div class="">
      <div class="">
        <div class="">
          <div class=""></div>
          <div class="col-md-4">
            <div ></div>
            <form action="#" @click="submit">
              <div class="form-group row">
                <b-field label="Email" class="col-md-3" for="email" ></b-field>
                <div class="col-md-10">
                  <b-input
                    b-input placeholder="Email"
                    id="email"
                    type="email"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <b-field label="Password" for="password" class="col-md-3"></b-field>
                <div class="col-md-10">
                  <b-input
                    b-input placeholder="Password"
                    id="password"
                    type="password"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>
              <br>
              <div >
                <div class="col-md-9">
                <b-button  type="submit" class="is-primary">Login
                </b-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: 'logout' });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style >
.grid-container {
  padding: 60px;
  text-align: center;
}

</style>
