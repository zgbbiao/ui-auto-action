<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-19 18:25:41
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
        <PageIndexCollapseitem
          :list="layoutList"
          @generateKey="generateKey"
          @start="handleStart"
        />
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
  // @vuexIndexModule.State(state => state.tagPanelType) tagPanelType
  // @vuexIndexModule.State(state => state.selectTagList) selectTagList
  // @vuexIndexModule.State(state => state.tagKeyNewSelect) tagKeyNewSelect
  // @State('layoutComponentList', { namespace: 'index' }) layoutComponentList

  // @Action('setLeftCollapseActiveKey', { namespace: 'index' })
  // setLeftCollapseActiveKey
  @vuexIndexModule.Action('setLeftCollapseActiveKey') setLeftCollapseActiveKey
  @vuexIndexModule.Action('setTagSelectList') setTagSelectList
  @vuexIndexModule.Action('setTagKeyNewSelect') setTagKeyNewSelect

  get layoutList() {
    return this['layoutComponentList']
  }
  collapseChange(val) {
    this['setLeftCollapseActiveKey'](val)
  }
  generateKey(list, index) {
    // 生成key值
    // const key = list[index].type + '_' + new Date().getTime()
    // this.$set(list, index, {
    //   ...list[index],
    //   key,
    //   model: key
    // })
    // this['setTagKeyNewSelect'](key)
    // if (this['noModel'].includes(list[index].type)) {
    //   // 删除不需要的model属性
    //   delete list[index].model
    // }
  }
  // handleListPush(item) {
  //   console.log('handleListPush', item)
  //   // 双击控件按钮push到list
  //   // 生成key值
  //   if (!item.key || this['curPanelSelectTag'].key !== item.key) {
  //     // 在没有选择表单时，将数据push到this.data.list
  //     const key = item.type + '_' + new Date().getTime()
  //     item = {
  //       ...item,
  //       key,
  //       model: key
  //     }
  //     if (this['noModel'].includes(item.type)) {
  //       // 删除不需要的model属性
  //       delete item.model
  //     }
  //     const itemString = JSON.stringify(item)
  //     const record = JSON.parse(itemString)
  //     // 删除icon及compoent属性
  //     delete record.icon
  //     delete record.component
  //     const selectTagList = this['selectTagList']
  //     this['setTagSelectList'](selectTagList.concat([record]))
  //     console.log('handleListPush', this['selectTagList'])
  //     this['handleSetSelectItem'](record)
  //     return false
  //   }
  // }
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
