import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueResource from 'vue-resource'

import BScroll from 'better-scroll';

Vue.prototype.$BScroll = BScroll;
Vue.use(VueResource)

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
