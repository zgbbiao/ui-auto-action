<!--
 * @Author: your name
 * @Date: 2020-07-09 22:23:53
 * @LastEditTime: 2020-07-09 22:55:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\views\right-aside\tabs\index.vue
 -->
<template>
  <a-tabs v-model="activeKey" type="card">
    <a-tab-pane
      v-for="pane in panes"
      :key="pane.key"
      :tab="pane.title"
      :closable="pane.closable || false"
    >
      <div :class="b('wrapper', ['concent'])">
        <template v-if="pane.key === 'label'">
          <LabelComponent></LabelComponent>
        </template>
        <template v-if="pane.key === 'style'">
          <styleComponent></styleComponent>
        </template>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import LabelComponent from './label.vue'
import styleComponent from './style.vue'
import bemMixins from '@/mixins/bem'
import { Component, Vue } from 'vue-property-decorator'
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
@Component({
  name: 'PageIndexRightAsideTabs',
  mixins: [bemMixins],
  components: {
    LabelComponent,
    styleComponent
  },
  data() {
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    }
  }
})
export default class PageIndexRightAside extends Vue {}
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
