import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Details from '../views/Details.vue'

const routes: RouteRecordRaw[] = [
    {
        path: "/detalhes/:title",
        name: 'Details',
        component: Details,
        props: true
      },
];

const router = createRouter({
  history: createWebHistory(), // Aqui estamos usando createWebHistory
  routes
});

export default router;