<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-17 14:05:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <div
      class="drag-move-box"
      @click.stop="$emit('handleSelectItem', record)"
      :class="{ active: record.key === curPanelSelectTag.key }"
    >
      <div class="form-item-box">
        <expandRender :options="record.options">
          <slot />
        </expandRender>
      </div>
      <div v-if="!isHideModel" class="show-key-box" v-text="record.model" />
      <div
        class="copy"
        :class="record.key === curPanelSelectTag.key ? 'active' : 'unactivated'"
        @click.stop="$emit('handleCopy')"
      >
        <a-icon type="copy" />
      </div>
      <div
        class="delete"
        :class="record.key === curPanelSelectTag.key ? 'active' : 'unactivated'"
        @click.stop="$emit('handleDetele')"
      >
        <a-icon type="delete" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import expandRender from '@/components/expand/index.js'
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
  name: 'PageIndexFormNode',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    expandRender
  }
})
export default class PageIndexFormNode extends Vue {
  @Prop({ default: {} })
  record: any
}
</script>

<style lang="less">
.PageIndexFormNode {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
