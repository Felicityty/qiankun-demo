import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '../views/HomePage.vue'
import User from '../views/UserPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]


const router = new VueRouter({
  mode: "history",
  base: "",
  routes
})

export default router
