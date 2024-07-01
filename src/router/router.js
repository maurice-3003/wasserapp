import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { navbarLink: true },
  },
  {
    path: '/customers',
    name: 'Kundenstamm',
    component: () => import('@/pages/CustomerList.vue'),
    meta: { navbarLink: true },
  },
  {
    path: '/orders',
    name: 'Bestellungen',
    component: () => import('@/pages/OrderList.vue'),
    meta: { navbarLink: true },
  },
  {
    path: '/customers/:id',
    name: 'Kundendetails',
    component: () => import('@/pages/CustomerRecord.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { routes };
