<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-19 18:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <!-- <div class="form-panel" v-if="!list.length" :key="list.length">
      <p class="hint-text">
        从左侧选择控件添加
      </p>
    </div> -->
    <div class="a-form-box k-form-build">
      <!-- <nested-draggable :list="list" @input="onChangeValue"></nested-draggable> -->
      <ABC></ABC>
    </div>
  </div>
</template>
<script lang="ts">
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import bemMixins from '@/mixins/bem'
import { namespace } from 'vuex-class'
import { Component, Vue, Prop } from 'vue-property-decorator'
// import nestedDraggable from './nested-draggable.vue'
import ABC from './a.vue'
const vuexIndexModule = namespace('index')
@Component({
  name: 'KFormComponentPanel',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    // nestedDraggable,
    ABC
  }
})
export default class KFormComponentPanel extends Vue {
  @Prop({ default: [] })
  list!: Array<any>
  onChangeValue(newVal: any) {
    // todo...
    this.$emit('input', newVal)
  }
}
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
  height: 100vh;
  // box-shadow: 0px 1px 5px 1px #ccc;
  position: absolute;
  z-index: 8;
  width: 100%;
  min-height: 100px;
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
