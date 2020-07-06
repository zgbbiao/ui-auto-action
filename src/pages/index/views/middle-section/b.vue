<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-07 01:51:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <draggable
    class="dragArea"
    tag="ul"
    :value="tasks"
    @input="handleInput"
    :group="{ name: 'form-draggable' }"
    :animatio="180"
  >
    <template v-if="tasks && tasks.length">
      <li
        v-for="(record, index) in tasks"
        :key="record.name + record.key + index"
      >
        {{ record.name }}
        <formNode :key="record.key" :record="record"> </formNode>
        <nested-draggable
          :tasks="record.tasks || []"
          @input="val => handleNested(val, index)"
        />
      </li>
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
  @vuexIndexModule.Action('setComponentUpdateTime') setComponentUpdateTime
  handleInput(value) {
    console.log('handleInput')
    const curTime = new Date().getTime()
    // 如果更新的时间很短，则不执行，---添加原因，bug: 更加完最外层组件后，还会在执行一次，导致数据不正确。
    console.log(curTime, this['compomentUpdateTime'])
    if (curTime - this['compomentUpdateTime'] < 500) {
      return false
    }
    myconsole(value)
    this.$emit('input', JSON.parse(JSON.stringify(value)))
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
</style>
