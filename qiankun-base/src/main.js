import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "vue1",
    entry: "//localhost:3001",
    container: "#subContainer",
    activeRule: "/app/vue1",
  },
  {
    name: "vue2",
    entry: "//localhost:3002",
    container: "#subContainer",
    activeRule: "/app/vue2",
  },
]);
start();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
