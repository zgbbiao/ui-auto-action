/*
 * @Author: your name
 * @Date: 2020-06-08 17:49:00
 * @LastEditTime: 2020-06-13 23:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\core\index.js
 */
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import '@/assets/styles/index.less'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '../components/',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /_base\.vue$/
)
requireComponent.keys().forEach(fileName => {
  console.log(fileName)
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  try {
    const componentName = upperFirst(camelCase(componentConfig.default.name))
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
  } catch (e) {
    console.error(e)
  }
})

export { Vue }
