import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import '@/assets/css/main.scss';
import '@/assets/fonts/NotoSansCJKtc-Regular.otf';
// import 'jquery'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(VueRouter)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

const router = new VueRouter({
  mode: 'hash',
});

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
