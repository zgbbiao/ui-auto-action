<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-19 19:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <draggable
    class="dragArea"
    tag="ul"
    :list="tasks"
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
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Prop,
  Vue
} from 'vue-property-decorator'
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
  handleInput(value) {
    this.$emit('input', JSON.parse(JSON.stringify(value)))
  }
  handleNested(val, index) {
    const tasks = JSON.parse(JSON.stringify(this['tasks']))
    tasks[index] = tasks
    this.$emit('input', tasks)
  }
}
</script>

<style lang="less">
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
