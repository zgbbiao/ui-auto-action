<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-19 14:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <draggable
    tag="div"
    class="draggable-box"
    v-bind="{
      group: {
        name: 'form-draggable',
        // pull: 'clone',
        pull: true,
        put: true
      },
      sort: true,
      ghostClass: 'moving',
      animation: 180
    }"
    :list="list"
    @add="deepClone"
    @start="dragStart($event, list)"
  >
    <!-- :value="list"
    @input="onChangeValue" -->
    <div class="panel-tag-coniner">
      <transition-group tag="div" name="list" class="list-main">
        <formNode
          v-for="record in list"
          :key="record.key"
          :record="record"
          @handleSelectItem="handleSelectItem"
          @handleCopy="handleCopy"
          @handleDetele="handleDetele"
        >
          <nested-draggable :list="record.chindren"></nested-draggable>
        </formNode>
      </transition-group>
    </div>
  </draggable>
</template>
<script lang="ts">
import draggable from 'vuedraggable'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import bemMixins from '@/mixins/bem'
import layoutItem from './layout-item.vue'
import { namespace } from 'vuex-class'
import formNode from './form-node.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  Prop,
  Vue,
  Watch
} from 'vue-property-decorator'
const vuexIndexModule = namespace('index')
@Component({
  name: 'nested-draggable',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    draggable,
    layoutItem,
    formNode
  }
})
export default class KFormComponentPanel extends Vue {
  @vuexIndexModule.State(state => state.tagKeyNewSelect) tagKeyNewSelect
  @vuexIndexModule.Getter('findDeepItem') findDeepItem
  @Prop({ default: [] })
  list!: Array<any>
  // @Watch('list')
  onChangeValue(newVal: any) {
    // todo...
    this.$emit('input', newVal)
  }

  deepClone(evt) {
    console.log('clone')
    const list = JSON.parse(JSON.stringify(this['list']))
    // 查找指定内容
    const obj = this['findDeepItem'](list, this['tagKeyNewSelect'])
    this['handleSelectItem'](obj)
  }
  dragStart(evt, list) {
    // 拖拽结束,自动选择拖拽的控件项
    this['handleSelectItem'](list[evt.oldIndex])
  }
  handleSelectItem(record) {
    console.log('record', record)
    // 修改选择Item
    this['handleSaveSetSelectItem'](record)
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
    console.log('middle-section-add')
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
    this.handleSelectItem(columns[newIndex])
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
