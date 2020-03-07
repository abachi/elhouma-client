import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'
import NewReport from '../views/NewReport.vue'
import MyReports from '../views/MyReports.vue'
import { 
    requireAuthentication,
    redirectiIfAuthenticated } from '@/middleware/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: redirectiIfAuthenticated
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: requireAuthentication
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: redirectiIfAuthenticated
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  },
  {
      path: '/new-report',
      name: 'new-report',
      component: NewReport,
      beforeEnter: requireAuthentication
  },
  {
      path: '/my-reports',
      name: 'my-reports',
      component: MyReports,
      beforeEnter: requireAuthentication
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
