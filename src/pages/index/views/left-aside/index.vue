<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-17 16:00:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <!-- 左侧控件区域 start -->
    <a-collapse
      @change="collapseChange"
      :defaultActiveKey="collapseActiveKeyLeftAside"
    >
      <!-- 基础控件 start -->
      <a-collapse-panel header="基础布局控件" key="1">
        <PageIndexCollapseitem :list="layoutList" @start="handleStart" />
      </a-collapse-panel>
      <!-- 基础控件 end -->
    </a-collapse>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import { namespace } from 'vuex-class'
import PageIndexCollapseitem from '@/pages/index/views/collapseItem/index.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Vue
  // Watch
} from 'vue-property-decorator'
const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexLeftAside',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    PageIndexCollapseitem
  },
  data() {
    return {
      list: [],
      updateTime: 0,
      updateRecordTime: 0,
      showPropertie: false
    }
  }
})
export default class PageIndexLeftAside extends Vue {
  @vuexIndexModule.State(state => state.collapseActiveKeyLeftAside)
  collapseActiveKeyLeftAside
  @vuexIndexModule.State(state => state.layoutComponentList)
  layoutComponentList!: Array<any>
  @vuexIndexModule.Action('setLeftCollapseActiveKey') setLeftCollapseActiveKey
  @vuexIndexModule.Action('setTagSelectList') setTagSelectList
  @vuexIndexModule.Action('setTagKeyNewSelect') setTagKeyNewSelect

  get layoutList() {
    return this['layoutComponentList']
  }
  collapseChange(val) {
    this['setLeftCollapseActiveKey'](val)
  }
  // 选择切换tag属性面板
  handleStart(type) {
    this['setTagPanelType'](type)
  }
}
</script>

<style lang="less">
.PageIndexLeftAside {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
