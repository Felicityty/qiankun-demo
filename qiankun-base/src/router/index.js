import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from '@/components/MainPage'
import HomePage from '@/views/HomePage'
import UserPage from '@/views/UserPage'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
    children: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: '/user',
        name: 'UserPage',
        component: UserPage,
      }
    ]
  },
  {
    path: "/app/*",
    name: "app",
    component: MainPage,
  }
]


const router = new VueRouter({
  mode: "history",
  base: "",
  routes
})

export default router
