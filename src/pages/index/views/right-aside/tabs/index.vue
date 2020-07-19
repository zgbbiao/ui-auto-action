<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-19 00:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <a-tabs v-model="activeKey" type="card">
    <a-tab-pane
      v-for="pane in panes"
      :key="pane.key"
      :tab="pane.title"
      :forceRender="true"
      :closable="pane.closable || false"
    >
      <div :class="b('wrapper', ['concent'])">
        <template v-if="pane.key === 'label'">
          <LabelComponent
            ref="LabelComponent"
            @change="handleLableChange"
          ></LabelComponent>
        </template>
        <template v-if="pane.key === 'style'">
          <styleComponent
            ref="styleComponent"
            @change="handleStyleChange"
          ></styleComponent>
        </template>
        <template v-if="pane.key === 'class'">
          <classComponent ref="classComponent"></classComponent>
        </template>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import LabelComponent from './label.vue'
import styleComponent from './style.vue'
import classComponent from './class/index.vue'
import bemMixins from '@/mixins/bem'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const panes = [
  { title: '标签', content: '标签详情', key: 'label' },
  { title: '样式', content: 'Content of Tab 2', key: 'style' },
  {
    title: '类样式',
    content: 'Content of Tab 3',
    key: 'class',
    closable: false
  }
]
const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexRightAsideTabs',
  mixins: [bemMixins],
  components: {
    LabelComponent,
    styleComponent,
    classComponent
  },
  data() {
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    }
  }
})
export default class PageIndexRightAside extends Vue {
  @vuexIndexModule.Action('setTagPanelCurSelectOptions')
  setTagPanelCurSelectOptions
  @vuexIndexModule.State(state => state.curPanelSelectTag) curPanelSelectTag
  @Watch('curPanelSelectTag')
  onChangeValue(newVal: any, oldVal: any) {
    if (newVal.key !== oldVal.key) {
      this.reset()
    }
  }
  handleStyleChange(style, isUpdate) {
    if (Object.keys(style).length || isUpdate) {
      this['setTagPanelCurSelectOptions']({
        style: style
      })
    }
  }
  handleLableChange(style) {
    if (Object.keys(style).length) {
      this['setTagPanelCurSelectOptions']({
        domProps: {
          ...(this['curPanelSelectTag'].options.domProps || {}),
          innerText: style.text
        }
      })
    }
  }
  reset() {
    this.$refs.styleComponent[0]['reset']()
    this.$refs.LabelComponent[0]['reset']()
    // this['setTagPanelCurSelectOptions']({
    //   style: this['curPanelSelectTag'].options.style,
    //   domProps: this['curPanelSelectTag'].options.domProps
    // })
    setTimeout(() => {
      console.log(this['curPanelSelectTag'].options)
      this.$refs.styleComponent[0]['setFieldsValue'](
        this['curPanelSelectTag'].options.style || {}
      )
      this.$refs.LabelComponent[0]['setFieldsValue']({
        text: (this['curPanelSelectTag'].options.domProps || {}).innerText
      })
    })
  }
}
</script>

<style lang="less">
.PageIndexRightAsideTabs {
  &__wrapper {
    &--concent {
      height: calc(100vh - 96px);
      overflow-y: scroll;
      padding-bottom: 40px;
    }
  }
}
</style>
