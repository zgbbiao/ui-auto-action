/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-02 15:57:41
 * @LastEditTime: 2020-07-07 13:05:03
 * @LastEditors: Please set LastEditors
 */
export interface State {
  collapseActiveKeyLeftAside: string
  layoutComponentList: Array<any>
  isToolbarsTop: boolean
  isShowHead: boolean
  isHideModel: boolean
  tagPanelType: any,
  curPanelSelectTag: object,
  insertAllowedType: Array<any>
  noModel: Array<any>
  selectTagList: Array<any>
  tagKeyNewSelect: any
  compomentUpdateTime: any
  componentCountId: any
  // total: number;
  // isLogin: boolean;
  // postList: object[];
}
export const state: State = {
  collapseActiveKeyLeftAside: '1',
  layoutComponentList: [
    {
        type: 'div',
        // 表单类型
        label: 'div标签',
        // 标题文字
        icon: 'icon-write',
        model: '',
        // 数据字段
        key: '',
      options: {
        name: 'div'
      },
      tasks: []
    },
    {
        type: 'a',
        // 表单类型
        label: 'a标签',
        // 标题文字
        icon: 'icon-write',
        model: '',
        // 数据字段
        key: '',
      options: {
        name: 'a'
      }
    },
    {
        type: 'p',
        // 表单类型
        label: 'p标签',
        // 标题文字
        icon: 'icon-write',
        model: '',
        // 数据字段
        key: '',
      options: {
        name: 'p'
      }
    },
    {
        type: 'i',
        // 表单类型
        label: 'i标签',
        // 标题文字
        icon: 'icon-write',
        model: '',
        // 数据字段
        key: '',
      options: {
        name: 'i'
      }
    },
    {
        type: 'img',
        // 表单类型
        label: 'img标签',
        // 标题文字
        icon: 'icon-write',
        model: '',
        // 数据字段
        key: '',
      options: {
        name: 'img'
      }
    },
    {
        type: 'span',
        // 表单类型
        label: 'span标签',
        // 标题文字
        icon: 'icon-write',
        model: '',
        // 数据字段
        key: '',
      options: {
        name: 'span'
      }
    }
  ],
  isToolbarsTop: false,
  isShowHead: false,
  isHideModel: false,
  tagPanelType: '',
  curPanelSelectTag: {
    key: ''
  },
  insertAllowedType: [
    'input',
    'textarea',
    'number',
    'select',
    'checkbox',
    'radio',
    'date',
    'time',
    'rate',
    'slider',
    'uploadFile',
    'uploadImg',
    'cascader',
    'treeSelect',
    'switch',
    'text',
    'html'
  ],
  noModel: [
    'button',
    'divider',
    'card',
    'grid',
    'table',
    'alert',
    'text',
    'html'
  ],
  selectTagList: [],
  tagKeyNewSelect: '',
  compomentUpdateTime: 0,
  componentCountId: 1
}

export default state
