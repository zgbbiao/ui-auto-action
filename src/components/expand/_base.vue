<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-14 19:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <component :is="record"></component>
</template>
<script lang="ts">
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Prop,
  Vue
  // Watch
} from 'vue-property-decorator'
@Component({
  name: 'CommonExpand',
  components: {}
})
export default class CommonExpand extends Vue {
  @Prop()
  record!: any
}
</script>

<style lang="less">
.CommonExpand {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
