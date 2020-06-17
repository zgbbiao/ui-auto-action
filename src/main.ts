/*
 * @Author: your name
 * @Date: 2020-06-08 11:18:27
 * @LastEditTime: 2020-06-08 17:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\main.ts
 */

import 'babel-polyfill'
import { Vue } from '@/core/index.ts'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
