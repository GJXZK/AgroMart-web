import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'commendpage' },
    {
      path: '/commendpage',
      name: 'commendpage',
      component: () => import('@/views/commendPage/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/searchPage/index.vue')
    }
  ]
})

export default router
