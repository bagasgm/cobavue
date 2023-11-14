import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/Project.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue')
    }
  ]
})

export default router
