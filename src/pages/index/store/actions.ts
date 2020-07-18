/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 19:09:59
 * @LastEditTime: 2020-07-18 11:15:22
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
  // 保存当前选中节点
  setTagPanelCurSelect(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_PANEL_CUR_SELECT, params);
  },
  setTagSelectList(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_SELECTED_LIST, params);
  },
  // 保存新点击准备新增的组件的key
  setTagKeyNewSelect(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_KEY_NEW_SELECT, params);
  },
  setComponentUpdateTime(context: { commit: Commit }, params: any) {
    context.commit(types.SET_COMPONENT_UPDATE_TIME, params);
  },
  setComponentCountId(context: { commit: Commit }, params: any) {
    context.commit(types.SET_COMPONENT_COUNT_ID, params);
  },
  setTagPanelCurSelectOptions(context: { commit: Commit }, params: any) {
    context.commit(types.SET_TAG_PANEL_CUR_SELECT_OPTIONS, params);
  },
  setPreview(context: { commit: Commit }, params: any) {
    context.commit(types.SET_PREVIEW, params);
  },
}

