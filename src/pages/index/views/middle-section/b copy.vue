<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-11 22:13:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <draggable
    class="dragArea"
    tag="div"
    :value="tasks"
    @input="handleInput"
    :group="{ name: 'form-draggable' }"
    :animatio="180"
  >
    <template v-if="tasks && tasks.length">
      <template v-for="(record, index) in tasks">
        <formNode :key="record.key" :record="record">
          <nested-draggable
            :key="record.name + record.key + index"
            :tasks="record.tasks || []"
            @input="val => handleNested(val, index)"
          />
        </formNode>
      </template>
    </template>
  </draggable>
</template>
<script lang="ts">
import draggable from 'vuedraggable'
import formNode from './form-node.vue'
import { namespace } from 'vuex-class'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Prop,
  Vue
} from 'vue-property-decorator'
import { myconsole } from '@/utils/index.js'
const vuexIndexModule = namespace('index')
@Component({
  name: 'nested-draggable',
  components: {
    draggable,
    formNode
  },
  data() {
    return {}
  }
})
export default class KFormComponentPanel extends Vue {
  @Prop({ default: [] })
  tasks
  @vuexIndexModule.State(state => state.compomentUpdateTime) compomentUpdateTime
  @vuexIndexModule.State(state => state.componentCountId) componentCountId
  @vuexIndexModule.Action('setComponentUpdateTime') setComponentUpdateTime
  @vuexIndexModule.Action('setComponentCountId') setComponentCountId
  @vuexIndexModule.Action('setTagPanelCurSelect') setTagPanelCurSelect
  handleInput(value) {
    console.log('handleInput')
    const curTime = new Date().getTime()
    // 如果更新的时间很短，则不执行，---添加原因，bug: 更加完最外层组件后，还会在执行一次，导致数据不正确。
    console.log(curTime, this['compomentUpdateTime'])
    if (curTime - this['compomentUpdateTime'] < 500) {
      return false
    }
    myconsole(value)
    // 当移动选项到另外一项内部时触发，重新设置新的id，新增的时候key时空的， sort的时候数量是多个， 移动到内部德斯哈哈，只有一项，并且可能拥有子选项。
    const arr = JSON.parse(JSON.stringify(value))
    if (arr.length === 1 && arr[0].key) {
      arr[0] = this.setNewKey(arr[0])
    }
    // 设置当前添加节点的key，并保存添加记录数量，
    const muvalue = JSON.parse(JSON.stringify(arr)).map(element => {
      if (typeof element === 'object' && !element.key) {
        const countId = this['componentCountId'] + 1
        element.key = `countid_${countId}`
        this['setComponentCountId'](countId)
        this['setTagPanelCurSelect'](element)
      }
      return element
    })
    this.$emit('input', muvalue)
  }
  setNewKey(element) {
    const countId = this['componentCountId'] + 1
    element.key = `countid_${countId}`
    this['setComponentCountId'](countId)
    this['setTagPanelCurSelect'](element)
    if (Array.isArray(element.tasks) && element.tasks.length) {
      element.tasks = element.tasks.map(item => {
        return this.setNewKey(item)
      })
    }
    return element
  }
  handleNested(val, index) {
    console.log('handleNested', index)
    myconsole(this['tasks'])
    myconsole(val)
    // 如果是最底层（当前修改层），则直接提交到父级
    if (typeof index !== 'number') {
      this.$emit('input', val)
      return false
    }
    // 如果是不是最底层（当前修改层）
    const tasks = JSON.parse(JSON.stringify(this['tasks']))
    if (typeof tasks[index] !== 'object') {
      tasks[index] = {}
    }
    tasks[index].tasks = val
    myconsole(tasks)
    this.$emit('input', JSON.parse(JSON.stringify(tasks)))
  }
}
</script>

<style lang="less">
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
// .dragArea li {
//   display: inline-block;
//   vertical-align: top;
// }
</style>
