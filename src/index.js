// Import JS
import './js/';

// Import CSS - SASS
import './assets/scss/main.scss';

// Vue
window.Vue = require('vue');

Vue.component('template', require('./js/components/Template.vue').default);

const app = new Vue({
  el: '#app'
})