<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-18 14:30:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <!-- 操作区域 end -->
    <k-form-component-panel v-show="!isPreview" />
    <!-- 操作区域 start -->
    <PageIndexMiddleSectionView v-show="isPreview"></PageIndexMiddleSectionView>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import KFormComponentPanel from './k-form-component-panel.vue'
import PageIndexMiddleSectionView from './view/index.vue'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Vue
  // Watch
} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexMiddleSection',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    KFormComponentPanel,
    PageIndexMiddleSectionView
  },
  data() {
    return {}
  }
})
export default class PageIndexMiddleSection extends Vue {
  @vuexIndexModule.State('isToolbarsTop')
  isToolbarsTop!: boolean
  @vuexIndexModule.State('isPreview')
  isPreview!: boolean
}
</script>

<style lang="less">
.PageIndexMiddleSection {
  &__wrapper {
    &--wrapper {
      height: calc(100vh - 60px);
      width: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
