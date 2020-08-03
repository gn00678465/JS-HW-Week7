import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
