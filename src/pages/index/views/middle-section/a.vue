<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-07 01:51:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div>
    <!-- {{ JSON.stringify(list, null, 2).toString() }} -->
    <h3>Nested draggable</h3>
    <nested-draggable :tasks="list" :key="list.length" @input="handleInput" />
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
import { myconsole } from '@/utils/index.js'
import { namespace } from 'vuex-class'
const vuexIndexModule = namespace('index')
@Component({
  name: 'nested-example',
  components: {
    nestedDraggable
    // AA
  },
  data() {
    return {
      list: [
        // {
        //   name: 'task 1',
        //   tasks: [
        //     {
        //       name: 'task 2',
        //       tasks: [
        //         {
        //           type: 'div',
        //           label: 'div标签',
        //           icon: 'icon-write',
        //           model: 'div_1592560126526',
        //           key: 'div_1592560126526',
        //           options: {
        //             name: 'div'
        //           },
        //           tasks: [
        //             {
        //               type: 'div',
        //               label: 'div标签',
        //               icon: 'icon-write',
        //               model: 'div_15925601265262',
        //               key: 'div_15925601265262',
        //               options: {
        //                 name: 'div'
        //               },
        //               tasks: []
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // },
      ]
    }
  }
})
export default class KFormComponentPanel extends Vue {
  @vuexIndexModule.State(state => state.compomentUpdateTime) compomentUpdateTime
  @vuexIndexModule.Action('setComponentUpdateTime') setComponentUpdateTime
  handleInput(value) {
    myconsole(value, 'a-component')
    this['setComponentUpdateTime'](new Date().getTime())
    this.$set(this, 'list', value)
  }
}
</script>

<style lang="less"></style>
