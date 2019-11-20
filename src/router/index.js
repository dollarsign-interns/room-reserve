import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import seeRoom from '../views/seeRoom.vue';
import firebase from 'firebase/app';

Vue.use(VueRouter);
const routes = [
  {
    path: '/home',  
    name: 'home',
    component: Home,
    meta: {
      requireAuth: true
  }
  },
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/seeroom',
    name: 'seeroom',
    component: seeRoom,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);
  
  if(requireAuth && !currentUser) next({ name: 'login'});  
  else if (!requireAuth && currentUser) next({ name: 'home'});  
  else next();
});

export default router;
