/*
 * @Author: your name
 * @Date: 2020-06-08 11:58:33
 * @LastEditTime: 2020-06-14 12:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\main.ts
 */

import 'babel-polyfill'
import { Vue } from '@/core/index.ts'
import Mixins from '@/mixins/index'
import store from '@/store/index'
import Router from '@/router/router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import App from './App.vue'
import '@/assets/images/icons/iconfont.css'
Vue.use(Antd)
Vue.config.productionTip = false
const init = () => {
  Vue.config.productionTip = false
  Mixins.forEach((item: any) => {
    Vue.mixin(item)
  })
}
const router = Router.init(Vue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
init()
