import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import yuuka from '../views/Yuuka.vue'
import fresh from '../views/Fresh.vue'
import yeepoon from '../views/Yeepoon.vue'
import flex from '../views/Flex.vue'
import form from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:
      {
        layout:"Main"
      }

    },
    {
      path: '/yuuka',
      name: 'yuuka',
      component: yuuka ,
      meta:
      {
        layout:"Main"
      },
   },
   {
      path: '/fresh',
      name: 'fresh',
      component: fresh,
      meta:
      {
        layout:"Main"
      }

    },
    {
      path: '/yeepoon',
      name: 'yeepoon',
      component: yeepoon,
      meta:
      {
        layout:"Main"
      }

    },
    {
      path: '/yeepoon',
      name: 'yeepoon',
      component: yeepoon,
      meta:
      {
        layout:"Main"
      }

    },
    {
      path: '/flex',
      name: 'flex',
      component: flex,
      meta:
      {
        layout:"Main"
      }

    },
    {
      path: '/form',
      name: 'form',
      component: form,
      meta:
      {
        layout:"Main"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
