import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


//配置每一个组件可以使用vue-router
Vue.use(VueRouter);
//引入mint
import Mint from 'mint-ui';
import '../../app/node_modules/mint-ui/lib/style.css'

Vue.use(Mint);
//引入路由
import router from '../src/assets/js/router.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
