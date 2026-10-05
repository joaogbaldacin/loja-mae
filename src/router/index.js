import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import IconsView from '@/views/IconsView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/icons',
    name: 'icons',
    component: IconsView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
