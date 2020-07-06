/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 18:26:19
 * @LastEditTime: 2020-07-07 01:47:35
 * @LastEditors: Please set LastEditors
 */
import types from './mutation-types'
import { State } from './state'
export default {
  [types.SET_COLLAPSE_ACTIVE_KEY_LEFT_ASIDE](state: State, data: any) {
    state.collapseActiveKeyLeftAside = data
  },
  [types.SET_TAG_PANEL_TYPE](state: State, data: any) {
    state.tagPanelType = data
  },
  [types.SET_TAG_PANEL_CUR_SELECT](state: State, data: object) {
    state.curPanelSelectTag = data
  },
  [types.SET_TAG_SELECTED_LIST](state: State, data: any) {
    state.selectTagList = data
  },
  [types.SET_TAG_KEY_NEW_SELECT](state: State, data: any) {
    state.tagKeyNewSelect = data
  },
  [types.SET_COMPONENT_UPDATE_TIME](state: State, data: any) {
    state.compomentUpdateTime = data
  },
}
