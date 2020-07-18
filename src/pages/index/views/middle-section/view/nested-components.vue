<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-18 14:34:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <expandRender :options="record.options">
    <template v-for="(item, index) in record.tasks || []">
      <PageIndexMiddleSectionViewNested
        :record="item"
        :key="index"
      ></PageIndexMiddleSectionViewNested>
    </template>
  </expandRender>
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
  Vue,
  Prop
  // Watch
} from 'vue-property-decorator'
// import { namespace } from 'vuex-class'
// const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexMiddleSectionViewNested',
  mixins: [bemMixins, tagSelectMixins],
  components: { expandRender },
  data() {
    return {}
  }
})
export default class PageIndexMiddleSectionViewNested extends Vue {
  @Prop({
    default: () => {
      return {}
    }
  })
  record: any
}
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
