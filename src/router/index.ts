import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'server',
    path: '/server/:sid',
    component: () => import('@/views/Server.vue'),
    children: [
      {
        name: 'channels',
        path: 'channels/:cid',
        component: () => import('@/components/Channel.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
