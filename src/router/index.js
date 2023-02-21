import {createRouter, createWebHistory} from 'vue-router'
import AllStaffList from '../components/AllStaffList.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/allstafflist',
    name: 'AllStaffList',
    component: AllStaffList
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
