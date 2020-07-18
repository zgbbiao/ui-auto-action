<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-18 11:41:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <a-config-provider :locale="locale">
    <div :class="b('wrapper', ['wrapper'])">
      <Common-header>
        <a-switch :value="isPreview" @change="handleSwitchChange" />
      </Common-header>
      <PageIndexComtent />
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN.js'
import PageIndexComtent from '@/pages/index/views/content/index.vue'
import { namespace } from 'vuex-class'
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
  name: 'PageIndex',
  mixins: [bemMixins],
  components: {
    PageIndexComtent
  },
  data() {
    return {
      locale: zhCN
    }
  }
})
export default class PageIndex extends Vue {
  @vuexIndexModule.Action('setPreview') setPreview
  @vuexIndexModule.State(state => state.isPreview) isPreview
  handleSwitchChange(checked) {
    this['setPreview'](checked)
  }
}
</script>

<style lang="less">
.PageIndex {
  &__wrapper {
    &--wrapper {
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
