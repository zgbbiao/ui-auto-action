/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 19:08:18
 * @LastEditTime: 2020-06-08 19:10:54
 * @LastEditors: Please set LastEditors
 */
import Router from 'vue-router'
// import Interface from './views/interface'
import Routers from '@/router/index'
import { beforeEach } from '@/router/routerConfig.ts'
function init(Vue: any) {
  // const originalPush = Router.prototype.push
  // Router.prototype.push = function push(
  //   location: any,
  //   onResolve: any,
  //   onReject: any
  // ): any {
  //   if (onResolve || onReject)
  //     return originalPush.call(this, location, onResolve, onReject)
  //   return originalPush.call(this, location)
  // }
  Vue.use(Router)
  const myrouter = new Router({
    mode: 'history',
    base: `${process.env.VUE_APP_ROUTER_BASE}`,
    routes: Routers
  })
  myrouter.beforeEach(beforeEach())
  // myrouter.afterEach(afterEach())
  return myrouter
}

export default {
  init
}
