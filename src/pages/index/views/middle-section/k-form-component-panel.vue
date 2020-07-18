<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-18 14:21:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <div class="a-form-box k-form-build">
      <panelComponent></panelComponent>
    </div>
  </div>
</template>
<script lang="ts">
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import bemMixins from '@/mixins/bem'
import { Component, Vue } from 'vue-property-decorator'
import panelComponent from './panel.vue'
@Component({
  name: 'KFormComponentPanel',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    panelComponent
  }
})
export default class KFormComponentPanel extends Vue {}
</script>

<style lang="less">
.KFormComponentPanel {
  &__wrapper {
    &--wrapper {
      position: relative;
    }
  }
}

.a-form-box {
  // height: 100vh;
  // // box-shadow: 0px 1px 5px 1px #ccc;
  // position: absolute;
  // z-index: 8;
  // width: 100%;
  // min-height: 100px;
}
.hint-text {
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #aaa;
  z-index: 5;
}
</style>
