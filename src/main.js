import Vue from 'vue';
import Buefy from 'buefy';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.config.productionTip = false;
const configOptions = {
  apiKey: 'AIzaSyAWvINUgJeX1KpqPCpBCXeYW0vfzMGsfZA',
  authDomain: 'room-reserve-17c64.firebaseapp.com',
  databaseURL: 'https://room-reserve-17c64.firebaseio.com',
  projectId: 'room-reserve-17c64',
};

firebase.initializeApp(configOptions);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
