import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
  {
    path:'/',
    name:'login',
    component: Login
  },
  {
    path:'/register',
    name:'register',
    component: Register
  },
  {
    path:'/home/:userInfo',
    name:'home',
    component: Home,
    children: [
      {
        path: '/home/:userInfo/dashboard',
        name:'dashboard',
        components: {
          dashboard: Dashboard
        },
      },
      {
        path: '/home/:userInfo/users',
        name:'users',
        components: {
          users: HelloWorld
        },
      },
      {
        path: '/home/:userInfo/accounts',
        name:'accounts',
        components: {
          accounts: Dashboard
        },
      },
  ],
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router