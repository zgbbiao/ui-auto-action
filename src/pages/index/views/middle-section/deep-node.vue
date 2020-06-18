<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-18 18:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <draggable
    tag="div"
    class="draggable-box"
    v-bind="{
      group: {
        name: 'form-draggable',
        // pull: 'clone',
        pull: true,
        put: true
      },
      ghostClass: 'moving',
      animation: 180,
      handle: '.drag-move'
    }"
    @start="dragStart"
    @add="handleColAdd"
  >
    <!-- $emit('dragStart', $event, record.children) -->
    <!-- $emit('handleColAdd', $event, record.children) -->
    <div class="panel-tag-coniner">
      <transition-group tag="div" name="list" class="list-main">
        sdf
        <slot></slot>
      </transition-group>
    </div>
  </draggable>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import draggable from 'vuedraggable'
import layoutItem from './layout-item.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Prop,
  Vue
  // Watch
} from 'vue-property-decorator'
@Component({
  name: 'DeepNode',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    draggable,
    layoutItem
  }
})
export default class DeepNode extends Vue {
  @Prop()
  record!: any

  handleSelectItem(record) {
    this.$emit('handleSelectItem', record)
  }
  handleColAdd(...arg) {
    console.log(...arg)
  }
  dragStart(...arg) {
    console.log(...arg)
  }
}
</script>

<style lang="less">
.DeepNode {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
