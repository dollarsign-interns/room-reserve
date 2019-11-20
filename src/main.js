import firebase from 'firebase/app';
import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import store from './store/store';
import router from './router';
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck,faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import 'buefy/dist/buefy.css';
import ParticleEffectButton from "vue-particle-effect-buttons";


Vue.use(ParticleEffectButton);
Vue.use(BootstrapVue);
library.add(faCheck,faEye, faEyeSlash);
Vue.use(Buefy,{
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})
Vue.config.productionTip = false;
Vue.component('vue-fontawesome', FontAwesomeIcon);

 new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');

