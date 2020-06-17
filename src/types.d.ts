/*
 * @Author: your name
 * @Date: 2020-06-08 19:03:32
 * @LastEditTime: 2020-06-08 19:05:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\types.d.ts
 */
import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    b(el: any, mods: any): any
  }
}
