<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-18 18:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <draggable
      tag="ul"
      :value="list"
      v-bind="{
        group: { name: 'form-draggable', pull: 'clone', put: false },
        sort: false,
        animation: 180,
        ghostClass: 'moving'
      }"
      @start="handleStart($event, list)"
    >
      <li
        v-for="(val, index) in list"
        :key="index"
        @dragstart="$emit('generateKey', list, index)"
      >
        <svg v-if="val.icon" class="icon" aria-hidden="true">
          <use :xlink:href="`#${val.icon}`"></use>
        </svg>
        {{ val.label }}
      </li>
    </draggable>
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import draggable from 'vuedraggable'
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
  name: 'PageIndexCollapseitem',
  mixins: [bemMixins],
  components: {
    draggable
  }
})
export default class PageIndexCollapseitem extends Vue {
  @Prop({ default: [] })
  list!: Array<any>
  handleStart(e, list) {
    this.$emit('start', list[e.oldIndex].type)
  }
  handleDraggableClone(...arg) {
    // console.log(arg)
  }
}
</script>

<style lang="less">
.PageIndexCollapseitem {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
