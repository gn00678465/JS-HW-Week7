import Vue from 'vue';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.component('Loading', () => import('vue-loading-overlay'));
