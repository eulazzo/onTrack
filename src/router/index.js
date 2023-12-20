import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      meta: {
        title: "home",
      },
      component: () => import('../views/Home/Home.vue')
    },

  ]
});


 

export default router
