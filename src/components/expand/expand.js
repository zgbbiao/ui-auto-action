/*
 * @Author: your name
 * @Date: 2020-06-14 19:43:09
 * @LastEditTime: 2020-06-14 19:43:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\components\expand\ex.js
 */

export default {
  name: 'expand',
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      index: ctx.props.index
    }
    if (ctx.props.column) params.column = ctx.props.column
    return ctx.props.render && ctx.props.render(h, params)
  }
}
