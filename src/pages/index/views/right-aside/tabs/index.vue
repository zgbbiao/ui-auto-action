<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-09 10:22:51
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
      :closable="pane.closable || false"
    >
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Vue
  // Watch
} from 'vue-property-decorator'
@Component({
  name: 'PageIndexRightAsideTabs',
  mixins: [bemMixins],
  components: {},
  data() {
    return {
      panes: [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        {
          title: 'Tab 3',
          content: 'Content of Tab 3',
          key: '3'
        }
      ],
      activeKey: '1'
    }
  }
})
export default class PageIndexRightAside extends Vue {}
</script>

<style lang="less">
.PageIndexRightAsideTabs {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
