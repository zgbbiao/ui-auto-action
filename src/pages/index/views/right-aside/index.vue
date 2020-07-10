<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-09 10:21:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <tabs></tabs>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tabs from './tabs/index.vue'
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
  name: 'PageIndexRightAside',
  mixins: [bemMixins],
  components: {
    tabs
  }
})
export default class PageIndexRightAside extends Vue {}
</script>

<style lang="less">
.PageIndexRightAside {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
