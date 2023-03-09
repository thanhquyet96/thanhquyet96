import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ListNhanVien from '../views/nhanvien/List.vue'
import CreateNhanVien from '../views/nhanvien/Create.vue'
import DetailNhanVien from '../views/nhanvien/Detail.vue'
import HistoryNhanVien from '../views/nhanvien/History.vue'
import AttendanceNhanVien from '../views/nhanvien/Attendance.vue'

import ListLeave from '../views/nghiphep/Leaves.vue'
import CreateLeave from '../views/nghiphep/Create.vue'



import AppVue from '@/App.vue'
import TheContainer from '@/components/TheContainer.vue'
import Login from '@/components/LoginView.vue'
import Register from '@/components/RegisterView.vue'

import PageNotFound from '@/components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  redirect: '/home',
  name: 'default',
  component: TheContainer,
  meta: { requiresAuth: true, label: 'Trang chủ' },
  children: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: '/nhanvien/list',
    },
    {
      path: '/nhanvien',
      name: 'nhanVien',
      component: {
        render(c) { return c('router-view') }
      },
      redirect: '/nhanvien/list',
      children: [
        {
          path: 'list',
          name: 'list',
          component: ListNhanVien,
          // only authenticated users can create posts
          meta: { requiresAuth: true }
        },
        {
          path: 'create',
          name: 'create',
          component: CreateNhanVien,
          // only authenticated users can create posts
          meta: { requiresAuth: true }
        },
        {
          path: 'detail/:id',
          component: DetailNhanVien,
          
          // anybody can read a post
          meta: { requiresAuth: false },
        },
        
        {
          path: 'history/:id',
          component: HistoryNhanVien,
          
          // anybody can read a post
          meta: { requiresAuth: false },
        },
        {
          path: 'attendance/:id',
          component: AttendanceNhanVien,
          
          // anybody can read a post
          meta: { requiresAuth: false },
        },
        
      ]
    },
    {
      path: '/nghiphep',
      name: 'nghiphep',
      component: {
        render(c) { return c('router-view') }
      },
      redirect: '/nghiphep/list',
      children: [
        {
          path: 'list',
          name: 'list',
          component: ListLeave,
          // only authenticated users can create posts
          meta: { requiresAuth: true }
        },
        {
          path: 'create',
          name: 'create',
          component: CreateLeave,
          // only authenticated users can create posts
          meta: { requiresAuth: true }
        },
        {
          path: 'detail/:id',
          component: DetailNhanVien,
          
          // anybody can read a post
          meta: { requiresAuth: false },
        },
      ]
    },
    {
      path: 'leave',
      component: ListLeave,
      
      // anybody can read a post
      meta: { requiresAuth: false },
    },
  ]
},

{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/register',
  name: 'register',
  component: Register
},
{
    path: '*',
    component: PageNotFound
},


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
