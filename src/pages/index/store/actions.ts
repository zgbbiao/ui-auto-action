/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 19:09:59
 * @LastEditTime: 2020-06-18 15:18:04
 * @LastEditors: Please set LastEditors
 */
import { Commit } from 'vuex';
import types from './mutation-types'
export default {
  // 保存左侧侧边栏手风琴展开项
  setLeftCollapseActiveKey(context: { commit: Commit }, params: any) {
    context.commit(types.SET_COLLAPSE_ACTIVE_KEY_LEFT_ASIDE, params);
  },
  // 保存当前点击的标签面板类型
  setTagPanelType(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_PANEL_TYPE, params);
  },
  setTagPanelCurSelect(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_PANEL_CUR_SELECT, params);
  },
  setTagSelectList(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_SELECTED_LIST, params);
  },
  // 保存新点击准备新增的组件的key
  setTagKeyNewSelect(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_KEY_NEW_SELECT, params);
  }
}
