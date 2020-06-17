/*
 * @Author: your name
 * @Date: 2020-04-21 09:35:27
 * @LastEditTime: 2020-06-15 13:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\components\common\componentContainer\base.js
 */
import expand from '@/components/expand/expand.js'
export default {
  name: 'renderexpand',
  functional: true,
  components: { expand },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  render: (h, ctx) => {
    const options = ctx.props.options || {}
    const children = ctx.children
    return h(
      options.name,
      {
        ...options
      },
      children
    )
  }
}
