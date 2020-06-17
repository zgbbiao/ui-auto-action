/*
 * @Author: your name
 * @Date: 2020-06-08 11:18:27
 * @LastEditTime: 2020-06-08 19:03:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\shims-tsx.d.ts
 */

import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
