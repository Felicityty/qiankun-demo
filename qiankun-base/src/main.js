import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'vueApp',
    entry: '//localhost:3001/child/vue-app/',
    container: '#container',
    activeRule: '/vueApp'
  }
]);

start();
