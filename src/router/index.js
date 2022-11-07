import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path:'/',
    name:'login',
    component: Login
  },
  {
    path:'/home/:userInfo',
    name:'home',
    component: Home,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router