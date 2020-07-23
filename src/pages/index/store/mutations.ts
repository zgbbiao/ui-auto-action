/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 18:26:19
 * @LastEditTime: 2020-07-23 21:29:38
 * @LastEditors: Please set LastEditors
 */
import types from './mutation-types'
import { State } from './state'
import lodash from 'lodash'
export default {
  // 左侧展开项
  [types.SET_COLLAPSE_ACTIVE_KEY_LEFT_ASIDE](state: State, data: any) {
    state.collapseActiveKeyLeftAside = data
  },
  // 切换面板类型
  [types.SET_TAG_PANEL_TYPE](state: State, data: any) {
    state.tagPanelType = data
  },
  // 选中当前标签项
  [types.SET_TAG_PANEL_CUR_SELECT](state: State, data: object) {
    state.curPanelSelectTag = data
  },
  [types.SET_TAG_PANEL_CUR_SELECT_OPTIONS](state: State, data: object) {
    const options = state.curPanelSelectTag['options'] || {}
    state.curPanelSelectTag['options'] = Object.assign({}, options, data)
    console.log(state.curPanelSelectTag)
  },
  // 中间的标签列表
  [types.SET_TAG_SELECTED_LIST](state: State, data: any) {
    state.selectTagList = data
  },
  [types.SET_TAG_KEY_NEW_SELECT](state: State, data: any) {
    state.tagKeyNewSelect = data
  },
  // 设置更新组件的时间， 放置切换频率
  [types.SET_COMPONENT_UPDATE_TIME](state: State, data: any) {
    state.compomentUpdateTime = data
  },
  // 计数组件的Id
  [types.SET_COMPONENT_COUNT_ID](state: State, data: any) {
    state.componentCountId = data
  },
  [types.SET_PREVIEW](state: State, data: any) {
    state.isPreview = data
  },



  // 增删改查
  [types.SET_ADD](state: State, data: any) {
    if (!data || !data.path) {
      throw new Error('SET_ADD-->data.path is undefined');
      return false
    }
    // 参数示例
    // data = {
    //   path: 'a[0].b.c'，
    //   data: '4'
    // }
    // lodash.set(state, 'a[0].b.c', 4)
      const result = lodash.get(state, data.path)
      if (Array.isArray(result)) {
        lodash.set(state, data.path, result.concat([data.data]))
      } else if (typeof result === 'object') {
        lodash.set(state, data.path, data.data)
      } else {
        lodash.set(state, data.path, data.data)
      }
  },
  [types.SET_DELETE](state: State, data: any) {
    if (!data || !data.path) {
      throw new Error('SET_DELETE-->data.path is undefined');
      return false
    }
    lodash.unset(state, data.path)
  },
  [types.SET_UPDATE](state: State, data: any) {
    if (!data || !data.path) {
      throw new Error('SET_UPDATE-->data.path is undefined');
      return false
    }
    let fn:any
    if (typeof data.data === 'function') {
      fn = data.data
    } else {
      fn = () => { return data.data }
    }
    lodash.update(state, data.path, fn)
  }
}
