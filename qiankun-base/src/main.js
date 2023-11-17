import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import { registerMicroApps, start, initGlobalState } from "qiankun";
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

const state = {
  abc: 456
}

const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  console.log(state, prev);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
