import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import Tasks from '../components/Tasks.vue'
import Team from '../components/Team.vue'


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
    path:'/home',
    name:'home',
    component: Home,
    children: [
      {
        path: '/home/dashboard',
        name:'dashboard',
        components: {
          dashboard: Dashboard
        },
      },
      {
        path: '/home/tasks',
        name:'tasks',
        components: {
          tasks: Tasks
        },
      },
      {
        path: '/home/team',
        name:'team',
        components: {
          team: Team
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