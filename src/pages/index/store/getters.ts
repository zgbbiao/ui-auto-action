/*
 * @Author: your name
 * @Date: 2019-10-18 20:27:11
 * @LastEditTime: 2020-07-22 22:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tyqx\src\pages\index\store\getters.js
 */
/* * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 18:26:19
 * @LastEditTime : 2019-12-20 19:19:20
 * @LastEditors  : Please set LastEditors
 */
import { flatten } from '@/utils/index.js'
import lodash from 'lodash'
export default {
  findDeepItem: (state) => (arr, key) => {
    return flatten(arr).find(item => item.key === key)
  },
  setGet: (state) => (path) => {
    if (!path) {
      throw new Error('SET_GET-->path is undefined');
      return false
    }
    return lodash.get(state, path)
  },
}
