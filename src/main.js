// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //避免后期打包样式不同，要放在import App from './App';之前
import '@/style/reset.css'
import App from '@/App'
import router from '@/router'
import store from '@/store/store'
//highcharts的引入
import VueHighcharts from 'vue-highcharts';
import bread from '@/common/breadcrumb.vue'
Vue.use(ElementUI)
Vue.use(VueHighcharts)
Vue.component("bread", bread);//全局自定义组件
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
// 实例挂载到元素中
