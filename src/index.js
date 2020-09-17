// Import JS
import './js';

// Import CSS - SASS
import './assets/scss/main.scss';

// Vue
import Vue from 'vue';
import store from './vuex/store';
import router from './router/router';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');