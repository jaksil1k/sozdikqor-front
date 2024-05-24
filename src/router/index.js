import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'
import Search from '@/components/Search.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  // {
  //   path: '/search',
  //   name: 'search',
  //   component: Search
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
