/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 11:29:24
 * @LastEditTime: 2020-06-08 17:38:06
 * @LastEditors: Please set LastEditors
 */
import { RouteConfig } from 'vue-router'
import Home from '@/pages/index/views/index/index.vue'
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
export default routes
