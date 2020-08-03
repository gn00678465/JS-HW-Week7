import Vue from 'vue';
// normalize
import 'normalize.css';
// HTML meta
import VueMeta from 'vue-meta';
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// Vue APP
import App from './App.vue';
import router from './router';

// plugin
import './assets/plugin/Fontaweosme';
import './assets/plugin/VeeValidate';
import './assets/plugin/vueLoadingOverlay';
import './assets/plugin/VueToastification';
// filter
import './assets/_filter';

// HTML meta
Vue.use(VueMeta);
// axios
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
