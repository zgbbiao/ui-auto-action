<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-14 18:11:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div :class="b('wrapper', ['wrapper'])">
    <div class="form-panel">
      <p class="hint-text" v-show="list.length === 0">
        从左侧选择控件添加
      </p>
    </div>
    <div class="a-form-box k-form-build">
      <draggable
        tag="div"
        class="draggable-box"
        v-bind="{
          group: 'form-draggable',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        }"
        v-model="list"
        @add="deepClone"
        @start="dragStart($event, list)"
      >
        <transition-group tag="div" name="list" class="list-main">
          <layoutItem
            class="drag-move"
            v-for="record in list"
            :key="record.key"
            :record="record"
            @dragStart="dragStart"
            @handleSelectItem="handleSelectItem"
            @handleCopy="handleCopy"
            @handleDetele="handleDetele"
            @handleColAdd="handleColAdd"
          />
        </transition-group>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts">
import draggable from 'vuedraggable'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import bemMixins from '@/mixins/bem'
import layoutItem from './layout-item.vue'
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
  name: 'KFormComponentPanel',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    draggable,
    layoutItem
  }
})
export default class KFormComponentPanel extends Vue {
  @Prop({ default: [] })
  list!: Array<any>
  deepClone(evt) {
    console.log(evt)
    const newIndex = evt.newIndex
    // json深拷贝一次
    const listString = JSON.stringify(this['list'])
    const list = JSON.parse(listString)
    // 删除icon及compoent属性
    delete list[newIndex].icon
    delete list[newIndex].component
    this.$emit('handleSetSelectItem', list[newIndex])
  }
  dragStart(evt, list) {
    // 拖拽结束,自动选择拖拽的控件项
    this.$emit('handleSetSelectItem', list[evt.oldIndex])
  }
  handleSelectItem(record) {
    // 修改选择Item
    this.$emit('handleSetSelectItem', record)
  }
  handleCopy(isCopy = true, data) {
    const traverse = array => {
      array.forEach((element, index) => {
        if (element.key === this['curPanelSelectTag'].key) {
          if (isCopy) {
            // 复制添加到选择节点后面
            array.splice(index + 1, 0, element)
          } else {
            // 双击添加到选择节点后面
            array.splice(index + 1, 0, data)
          }
          // 复制完成，重置key值
          const evt = {
            newIndex: index + 1
          }
          this.handleColAdd(evt, array, true)
          return
        }
      })
    }
    traverse(this['list'])
  }
  handleColAdd(evt, columns, isCopy = false) {
    // 重置或者生成key值
    const newIndex = evt.newIndex
    const key = columns[newIndex].type + '_' + new Date().getTime()
    if (columns[newIndex].key === '' || isCopy) {
      this.$set(columns, newIndex, {
        ...columns[newIndex],
        key,
        model: key
      })
      if (this['noModel'].includes(columns[newIndex].type)) {
        // 删除不需要的model属性
        delete columns[newIndex].model
      }
      if (typeof columns[newIndex].list !== 'undefined') {
        // 深拷贝list
        columns[newIndex].list = []
      }
      if (typeof columns[newIndex].columns !== 'undefined') {
        // 深拷贝columns
        const columnsStr = JSON.stringify(columns[newIndex].columns)
        columns[newIndex].columns = JSON.parse(columnsStr)
        // 复制时，清空数据
        columns[newIndex].columns.forEach(item => {
          item.list = []
        })
      }
    }
    // 深拷贝数据
    const listString = JSON.stringify(columns[newIndex])
    columns[newIndex] = JSON.parse(listString)
    this.$emit('handleSetSelectItem', columns[newIndex])
  }
  handleDetele() {
    // 删除已选择
    const traverse = array => {
      array = array.filter((element, index) => {
        if (element.key !== this['curPanelSelectTag'].key) {
          return true
        } else {
          if (array.length === 1) {
            this.handleSelectItem({ key: '' })
          } else if (array.length - 1 > index) {
            this.handleSelectItem(array[index + 1])
          } else {
            this.handleSelectItem(array[index - 1])
          }
          return false
        }
      })
      return array
    }

    const selectTagList = traverse(this['list'])
    this['setTagSelectList'](selectTagList)
  }
}
</script>

<style lang="less">
.KFormComponentPanel {
  &__wrapper {
    &--wrapper {
    }
  }
}
</style>
