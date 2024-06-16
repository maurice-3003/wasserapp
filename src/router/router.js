import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CustomerList from '../views/CustomerList.vue';
import OrderList from '../views/OrderList.vue'
import CustomerRecord from '../views/CustomerRecord.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: { navbarLink: true }
    },
    {
        path: '/customers',
        name: 'Kundenstamm',
        component: CustomerList,
        meta: { navbarLink: true }
    },
    {
        path: '/orders',
        name: 'Bestellungen',
        component: OrderList,
        meta: { navbarLink: true }
    },
    {
        path: '/customers/:id',
        name: 'Kundendetails',
        component: CustomerRecord,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
export { routes };