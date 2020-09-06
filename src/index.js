// Import JS
import './js/';

// Import CSS - SASS
import './assets/scss/main.scss';

// Vue
window.Vue = require('vue');

Vue.component('template', require('./components/Template.vue').default);

const app = new Vue({
  el: '#app'
})