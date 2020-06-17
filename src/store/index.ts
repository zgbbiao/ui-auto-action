/*
 * @Author: your name
 * @Date: 2020-06-08 11:18:27
 * @LastEditTime: 2020-06-08 16:22:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\store\index.ts
 */

import Vue from 'vue'
import Vuex from 'vuex'
import indexStore from '@/pages/index/store/index'
import createPersistedState from 'vuex-persistedstate'
import { Base64 } from 'js-base64'
Vue.use(Vuex)
const global = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}
// const myPlugin = store => {
//   // 当 store 初始化后调用
//   store.subscribe((mutation, state) => {
//     // 每次 mutation 之后调用
//     // mutation 的格式为 { type, payload }
//     // console.log('state', state)
//   })
// }
const store = {
  init() {
    return new Vuex.Store({
      modules: {
        global,
        index: indexStore
      },
      plugins: [
        // myPlugin,
        createPersistedState({
          storage: {
            getItem: (key: string) => {
              const keyValue = window.sessionStorage.getItem(key)
              return keyValue ? Base64.decode(keyValue) : {}
            },
            setItem: (key: string, value: any) =>
              window.sessionStorage.setItem(key, Base64.encode(value)),
            removeItem: (key: string) => window.sessionStorage.removeItem(key)
          },
          // storage: window.sessionStorage,
          reducer(val: object) {
            // console.log('createPersistedState------><><><><', val)
            return {
              // 只储存state中的user,不把page放在这里面
              // user: userStore
              ...val
            }
          }
        })
      ]
    })
  }
}

const initStore = store.init()

export default initStore
