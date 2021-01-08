import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './common/routes'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Common from './common/common'

window.$ = window.jQuery = $;

Vue.prototype.$common = new Common();
Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
