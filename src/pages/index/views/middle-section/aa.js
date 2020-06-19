/*
 * @Author: your name
 * @Date: 2020-04-21 09:35:27
 * @LastEditTime: 2020-06-19 18:44:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\components\common\componentContainer\base.js
 */
import expand from '@/components/expand/expand.js'
import draggable from 'vuedraggable'
const uiChildrenName = 'tasks'
export default {
  name: 'expand2',
  functional: true,
  components: { draggable, expand },
  props: {
    myList: {
      type: [Array],
      default: () => {
        return []
      }
    },
    other: {
      type: Object,
      default: () => {
        return {
          group: { name: 'form-draggable' }
        }
      }
    }
  },
  render: (h, ctx) => {
    const myList = ctx.props.myList || []
    const other = ctx.props.other
    const handleInput =
      (ctx.listeners && ctx.listeners.input) ||
      function() {
        console.log('emput')
      }
    let getChildrenTextContent = () => {
      console.log('emput')
    }
    function getexpand(item, callback) {
      let children = []
      if (item[uiChildrenName] && Array.isArray(item[uiChildrenName])) {
        children = item[uiChildrenName]
      }
      return h(
        'expand',
        {
          props: {
            options: {
              ...(item.options || {})
            }
          }
        },
        [
          getChildrenTextContent(children, arr => {
            // 接受到子层的更改， 并传递给父层
            callback &&
              callback({
                ...item,
                [uiChildrenName]: arr
              })
          })
        ]
      )
    }
    getChildrenTextContent = (myList, callback) => {
      if (!Array.isArray(myList)) {
        console.log('没有' + uiChildrenName)
        return []
      }
      const myListCopy = [...myList]
      const children = myList.map((item, index) => {
        return getexpand(item, resItem => {
          // 接受到子层的修改， 并传递给父层
          myListCopy[index] = resItem
          console.log('子集修改了，我监听到了', resItem)
          callback && callback(myListCopy)
        })
      })
      return h(
        'draggable',
        {
          props: {
            value: myList,
            ...other
          },
          style: {
            display: 'inherit',
            width: '100%'
          },
          class: {
            candraggable: true
          },
          on: {
            input: (e, ...args) => {
              // console.log(this);
              // myList = e;
              // self.$emit('input', e);
              // 获取最新移动的值，并传递给到上一层
              console.log('列表被动了，我监听到了', e, args)
              callback && callback(e)
            },
            end: evt => {
              console.log('end')
              console.log(evt)
            },
            add: evt => {
              console.log('add')
              console.log(evt)
            },
            update: evt => {
              console.log('update')
              console.log(evt)
            },
            remove: evt => {
              console.log('remove')
              console.log(evt)
            },
            move: evt => {
              console.log('move')
              console.log(evt)
            },
            clone: evt => {
              console.log('clone')
              console.log(evt)
            },
            change: function(evt) {
              console.log('change')
              console.log(evt)
            },
            filter: function(evt) {
              console.log('filter')
              console.log(evt)
            }
          }
        },
        [...children]
      )
    }
    return getChildrenTextContent(myList, arr => {
      // setTimeout(() => {
      console.log('最终修改了，我监听到了', arr)
      handleInput && handleInput(arr)
      // }, 500);
    })
  },
  updated: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been re-rendered
    })
  }
}
