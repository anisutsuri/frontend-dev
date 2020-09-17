// Import JS
import './js';

// Import CSS - SASS
import './assets/scss/main.scss';

// Vue
import Vue from 'vue';

Vue.component('app-template', require('./components/Template.vue').default);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
});