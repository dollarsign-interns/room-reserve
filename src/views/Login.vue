<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
     <div class="grid-container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <div v-if="error" class="is-danger">{{error}}</div>
            <form action="#" @click="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <b-input
                    b-input placeholder="Email"
                    icon="email"
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <b-input
                    b-input placeholder="Password"
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>
              <br>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                <b-button  @click="success" type="submit" class="is-primary">Login
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
    success() {
      this.$buefy.toast.open({
        message: 'Login Success',
        type: 'is-success',
      });
    },
  },
};
</script>
<style >
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header';
  padding: 50px;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 20px;
}
</style>
