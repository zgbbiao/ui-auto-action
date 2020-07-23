<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-07-23 23:03:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <expandRender :options="recordoptions">
    <div :class="b('wrapper', ['wrapper'])">
      <div
        class="drag-move-box"
        @click.stop="handleSelectItem"
        :class="{ active: record.key === curPanelSelectTag.key }"
      >
        <div class="form-item-box">
          {{
            record.options.domProps
              ? record.options.domProps.innerHTML
                ? record.options.domProps.innerHTML
                : record.options.domProps.innerText
                ? record.options.domProps.innerText
                : ''
              : ''
          }}
          <slot />
        </div>
        <!-- <div v-if="!isHideModel" class="show-key-box" v-text="record.model" /> -->
        <!-- <div
          class="copy"
          :class="
            record.key === curPanelSelectTag.key ? 'active' : 'unactivated'
          "
          @click.stop="$emit('handleCopy')"
        >
          <a-icon type="copy" />
        </div>
        <div
          class="delete"
          :class="
            record.key === curPanelSelectTag.key ? 'active' : 'unactivated'
          "
          @click.stop="$emit('handleDetele')"
        >
          <a-icon type="delete" />
        </div> -->
      </div>
    </div>
    <rightMenu
      :record="record"
      :menus="menus"
      @delete="handleDetele"
      :contextMenuTarget="record.options.attrs['data-countid']"
    ></rightMenu>
  </expandRender>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import tagSelectMixins from '@/pages/index/mixins/part/tag-select'
import expandRender from '@/components/expand/index.js'
import { namespace } from 'vuex-class'
import rightMenu from './right-menu.vue'
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
const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexFormNode',
  mixins: [bemMixins, tagSelectMixins],
  components: {
    expandRender,
    rightMenu
  },
  data() {
    return {
      menus: [
        {
          handler: 'copy', // Binding events(绑定事件)
          icon: 'copy', // icon (icon图标 )
          label: '复制' // The name of the menu option (菜单名称)
        },
        {
          handler: 'delete', // Binding events(绑定事件)
          icon: 'delete', // icon (icon图标 )
          label: '删除' // The name of the menu option (菜单名称)
        }
      ]
    }
  }
})
export default class PageIndexFormNode extends Vue {
  @vuexIndexModule.State(state => state.curPanelSelectTag) curPanelSelectTag
  @vuexIndexModule.Action('setTagPanelCurSelect') setTagPanelCurSelect
  @Prop({ default: {} })
  record: any
  handleSelectItem() {
    console.log(this['record'])
    this['setTagPanelCurSelect'](this['record'])
  }
  get recordoptions() {
    const options = JSON.parse(JSON.stringify(this['record'].options))
    delete options.domProps
    return options
  }
  // handleCopy() {}
  handleDetele() {
    this.$emit('handleDetele')
  }
}
</script>

<style lang="less">
.PageIndexFormNode {
  &__wrapper {
    &--wrapper {
      display: block;
      width: 100%;
    }

    .copy,
    .delete {
      position: absolute;
      top: 0px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      z-index: 989;
      transition: all 0.3s;

      &.unactivated {
        opacity: 0 !important;
        pointer-events: none;
      }

      &.active {
        opacity: 1 !important;
      }
    }

    .copy {
      border-radius: 0 0 0 8px;
      right: 30px;
      background: @layout-color;
    }

    .delete {
      right: 0px;
      background: @layout-color;
    }

    .drag-move-box {
      position: relative;
      box-sizing: border-box;
      padding: 8px;
      overflow: hidden;
      transition: all 0.3s;
      min-height: 36px;
      // background: red;

      &:hover {
        background: @primary-hover-bg-color;
      }

      // 选择时 start
      &::before {
        content: '';
        height: 5px;
        width: 100%;
        background: @primary-color;
        position: absolute;
        top: 0;
        right: -100%;
        transition: all 0.3s;
      }

      &.active {
        &::before {
          right: 0;
        }

        background: @primary-hover-bg-color;
        outline-offset: 0;
      }

      // 选择时 end
      .form-item-box {
        position: relative;
        box-sizing: border-box;
        word-wrap: break-word;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 888;
        }

        .ant-form-item {
          // 修改ant form-item的margin为padding
          margin: 0;
          padding-bottom: 6px;
        }
      }

      .show-key-box {
        // 显示key
        position: absolute;
        bottom: 2px;
        right: 5px;
        font-size: 14px;
        z-index: 987;
        color: @primary-color;
      }
    }
  }
}
</style>
