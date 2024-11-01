import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Details from '../views/Details.vue'
import Contact from '../views/Contact.vue'

const routes: RouteRecordRaw[] = [
    {
      path: "/detalhes/:title",
      name: 'Details',
      component: Details,
      props: true
    },
    {
      path: "/contact/:title",
      name: 'Contact',
      component: Contact,
      props: true
    },
];

const router = createRouter({
  history: createWebHistory(), // Aqui estamos usando createWebHistory
  routes
});

export default router;