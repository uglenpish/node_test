import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
  {
    path: "/tutorials/:id",
    name: "tutorial",
    component: () => import("../views/Tutorial.vue")
  },
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
