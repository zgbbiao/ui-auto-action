<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-18 18:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <div
      :class="{
        'layout-width': ['grid', 'table', 'card', 'divider', 'html'].includes(
          record.type
        )
      }"
    >
      <template v-if="false">
        <formNode
          :key="record.key"
          :record="record"
          @handleSelectItem="handleSelectItem"
          @handleCopy="$emit('handleCopy')"
          @handleDetele="$emit('handleDetele')"
        />
      </template>

      <!-- 栅格布局 start -->
      <template v-else>
        <formNode
          :key="record.key"
          :record="record"
          @handleSelectItem="handleSelectItem"
          @handleCopy="$emit('handleCopy')"
          @handleDetele="$emit('handleDetele')"
        >
          <DeepNode
            :record="record"
            @handleSelectItem="handleSelectItem"
            @dragStart="$emit('dragStart')"
            @handleCopy="$emit('handleCopy')"
            @handleDetele="$emit('handleDetele')"
            @handleColAdd="$emit('handleColAdd')"
          >
            ddd
          </DeepNode>
        </formNode>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import formNode from './form-node.vue'
import DeepNode from './deep-node.vue'
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
  name: 'PageIndexLayoutItem',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    formNode,
    DeepNode
  }
})
export default class PageIndexLayoutItem extends Vue {
  @Prop({ default: {} })
  record: any
  handleSelectItem(record) {
    this.$emit('handleSelectItem', record)
  }
}
</script>

<style lang="less">
.PageIndexLayoutItem {
  &__wrapper {
    &--wrapper {
      width: 100%;
    }
  }
}
</style>
