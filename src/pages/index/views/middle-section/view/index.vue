<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-18 14:33:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <template v-for="(record, index) in selectTagList">
      <nestComponents :record="record" :key="index"></nestComponents>
    </template>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import nestComponents from './nested-components.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Vue
  // Watch
} from 'vue-property-decorator'
// import { namespace } from 'vuex-class'
// const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexMiddleSectionView',
  mixins: [bemMixins, tagSelectMixins],
  components: { nestComponents },
  data() {
    return {}
  }
})
export default class PageIndexMiddleSectionView extends Vue {}
</script>

<style lang="less">
.PageIndexMiddleSection {
  &__wrapper {
    &--wrapper {
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
