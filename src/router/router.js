import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
        meta: { navbarLink: true }
    },
    {
        path: '/customers',
        name: 'Kundenstamm',
        component: () => import('@/views/CustomerList.vue'),
        meta: { navbarLink: true }
    },
    {
        path: '/orders',
        name: 'Bestellungen',
        component: () => import('@/views/OrderList.vue'),
        meta: { navbarLink: true }
    },
    {
        path: '/customers/:id',
        name: 'Kundendetails',
        component: () => import('@/views/CustomerRecord.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
export { routes };