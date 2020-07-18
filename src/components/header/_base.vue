<!--
 * @Description: 头部
 * @Author: kcz
 * @Date: 2019-12-30 00:37:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-18 11:04:59
 -->
<template>
  <header :class="b('wrapper', ['wrapper'])">
    <slot></slot>
  </header>
  <!--  -->
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  Prop,
  // Provide,
  Vue
  // Watch
} from 'vue-property-decorator'
@Component({
  name: 'CommonHeader',
  mixins: [bemMixins]
})
export default class CommonHeader extends Vue {
  @Prop({ default: '表单设计器 --by kcz' })
  title!: string
}
</script>
<style lang="less">
.CommonHeader {
  &__wrapper {
    &--wrapper {
      width: 100%;
      height: @header-height;
      text-align: center;
      background: @primary-color;
      color: @title-text-color;
      // margin-bottom: 6px;
      // border-bottom: 1px solid @border-color;
      line-height: @header-height;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
