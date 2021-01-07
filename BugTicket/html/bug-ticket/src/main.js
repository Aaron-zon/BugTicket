import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Common from './common/common'

window.$ = window.jQuery = $;

Vue.prototype.$common = new Common();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
