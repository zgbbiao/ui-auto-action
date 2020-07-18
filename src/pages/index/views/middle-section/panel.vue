<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-18 11:46:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div>
    <h3>Nested draggable</h3>
    <nested-draggable :tasks="list" :key="list.length" @input="handleInput" />
  </div>
</template>
<script lang="ts">
import nestedDraggable from './nested-draggable.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  // Prop,
  Vue,
  Watch
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
  @vuexIndexModule.State(state => state.selectTagList) selectTagList
  @vuexIndexModule.Action('setComponentUpdateTime') setComponentUpdateTime
  @vuexIndexModule.Action('setTagSelectList') setTagSelectList

  @Watch('selectTagList', { immediate: true, deep: true })
  onChangeValue(newVal: any, oldVal: any) {
    this['list'] = newVal
  }
  handleInput(value) {
    myconsole(value, 'a-component')
    this['setComponentUpdateTime'](new Date().getTime())
    this.$set(this, 'list', value)
    this['setTagSelectList'](value)
  }
}
</script>

<style lang="less"></style>
