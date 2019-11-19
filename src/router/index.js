import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import seeRoom from '../views/seeRoom.vue';


Vue.use(VueRouter);
const routes = [
  {
    path: '/home',  
    name: 'home',
    component: Home,
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

export default router;
