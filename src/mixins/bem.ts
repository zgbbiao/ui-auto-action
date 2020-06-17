/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 17:20:11
 * @LastEditTime: 2020-06-13 18:26:44
 * @LastEditors: Please set LastEditors
 */
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 * 
 * 
  [b('wrapper', ['content'])]: true,  [ "PageIndexContent__wrapper", [ "PageIndexContent__wrapper--content" ] ]
      [b({ testobj: true })]: true,    [ "PageIndexContent", { "PageIndexContent--testobj": true } ]
      [b('text', { disabled: true })]: true,   [ "PageIndexContent__text", { "PageIndexContent__text--disabled": true } ] 
      [b(['disabled', 'primary'])]: true  [ "PageIndexContent", [ "PageIndexContent--disabled", "PageIndexContent--primary" ] ]
 */
// mixins.ts
import { Vue, Component } from 'vue-property-decorator'
const ELEMENT = '__'
const MODS = '--'

const join = (name, el, symbol) =>
  el ? (name ? name + symbol + el : el) : name

const prefix = (name, mods) => {
  if (typeof mods === 'string') {
    return join(name, mods, MODS)
  }

  if (Array.isArray(mods)) {
    return mods.map(item => prefix(name, item))
  }

  const ret = {}
  Object.keys(mods).forEach(key => {
    ret[name + MODS + key] = mods[key]
  })
  return ret
}
const flattenDeep = (arr1: any) => {
  return arr1.reduce(
    (acc: any, val: any) =>
      Array.isArray(val)
      ? acc.concat(flattenDeep(val))
      : acc.concat(val), []);
}

const btoStr = (obj: any) => {
  let str = ''
  if (Array.isArray(obj)) {
    str = obj[0]
    if (Array.isArray(obj[1])) {
      str +=' ' + flattenDeep(obj[1]).join(' ')
    } else if (typeof obj[1] === 'object') {
      str +=' ' + Object.keys(obj[1]).join(' ')
    }
    return str
  } else {
    str = obj
  }
  return str
}

// declare module 'vue/types/vue' {
//   interface Vue {}
// }
@Component
export default class Bem extends Vue {
  b(el, mods) {
    const { name } = this.$options

    if (el && typeof el !== 'string') {
      mods = el
      el = ''
    }
    el = join(name, el, ELEMENT)

    return mods ? [el, prefix(el, mods)] : el
  }
  btoStr(obj: any) {
    return btoStr(obj)
  }
}
