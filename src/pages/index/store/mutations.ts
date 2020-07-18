/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 18:26:19
 * @LastEditTime: 2020-07-18 11:19:17
 * @LastEditors: Please set LastEditors
 */
import types from './mutation-types'
import { State } from './state'
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
  }
}
