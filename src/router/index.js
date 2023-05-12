import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'


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
    props: true
  },
  {
    path:'/home/dashboard',
    name:'dashboard',
    component: Dashboard,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router