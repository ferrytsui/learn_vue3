import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import RateDemo from '../pages/RateDemo.vue'
import Count from '../components/Count.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rateDemo',
    name: 'RateDemo',
    component: RateDemo
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router