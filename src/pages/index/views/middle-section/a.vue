<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-19 18:57:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div>
    <!-- {{ JSON.stringify(list, null, 2).toString() }} -->
    {{ list }}
    <h3>Nested draggable</h3>
    <nested-draggable :tasks="list" @input="handleInput" />
    <!-- <AA :myList="list"></AA> -->
  </div>
</template>
<script lang="ts">
// import AA from './aa.js'
import nestedDraggable from './b.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  // Prop,
  Vue
} from 'vue-property-decorator'
@Component({
  name: 'nested-example',
  components: {
    nestedDraggable
    // AA
  },
  data() {
    return {
      list: [
        {
          name: 'task 1',
          tasks: [
            {
              name: 'task 2',
              tasks: [
                {
                  type: 'div',
                  label: 'div标签',
                  icon: 'icon-write',
                  model: 'div_1592560126526',
                  key: 'div_1592560126526',
                  options: {
                    name: 'div'
                  },
                  tasks: [
                    {
                      type: 'div',
                      label: 'div标签',
                      icon: 'icon-write',
                      model: 'div_15925601265262',
                      key: 'div_15925601265262',
                      options: {
                        name: 'div'
                      },
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'task 3',
          tasks: [
            {
              name: 'task 4',
              tasks: []
            }
          ]
        },
        {
          name: 'task 5',
          tasks: []
        }
      ]
    }
  }
})
export default class KFormComponentPanel extends Vue {
  handleInput(value) {
    console.log('parent-input', value)
    this['list'] = value
  }
}
</script>

<style lang="less"></style>
