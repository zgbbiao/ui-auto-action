<!--
 * @Author: your name
 * @Date: 2020-07-17 01:40:44
 * @LastEditTime: 2020-07-17 17:14:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\views\middle-section\dda.vue
 -->
<template>
  <div>
    <vue-context-menu
      class="right-menu"
      :target="target"
      :show="contextMenuVisible"
      @update:show="show => (contextMenuVisible = show)"
      @click.prevent.stop="() => {}"
    >
      <div
        v-for="(item, index) in menus"
        :key="index"
        @click.prevent.stop="showScene(item)"
        class="right-menu-item"
      >
        <a href="javascript:;">{{ item.label }}</a>
      </div>
    </vue-context-menu>
  </div>
</template>
<script>
import { component as VueContextMenu } from '@xunlei/vue-context-menu'
import { mapState } from 'vuex'
export default {
  name: 'rightMenu',
  components: {
    'vue-context-menu': VueContextMenu
  },
  props: {
    contextMenuTarget: null,
    record: null,
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      contextMenuVisible: false,
      target: ''
    }
  },
  computed: {
    ...mapState('index', ['selectTagList'])
  },
  watch: {
    contextMenuTarget: {
      handler(newValue) {
        if (newValue) {
          this.$nextTick(() => {
            console.log(newValue, newValue.indexOf('countid') !== -1)
            if (newValue.indexOf('countid') !== -1) {
              const countidTarget = document.querySelector(
                `[data-countid="${newValue}"]`
              )
              this.initial(countidTarget)
            } else {
              this.initial(newValue)
            }
          })
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    showScene(item) {
      console.log('showScene', this.record)
      this.$emit(`${item.handler}`, {
        item,
        record: this.record
      })
    },
    initial(myChartContainer) {
      if (myChartContainer) {
        // 右击显示菜单 区域位置
        this.target = myChartContainer
        // 关闭浏览器右击默认菜单
        myChartContainer.oncontextmenu = function() {
          return false
        }
      }
    }
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.right-menu {
  position: fixed;
  z-index: 9999;
  width: 200px;
  background: rgb(255, 255, 255);
  font-variant: JIS04;
  box-shadow: 0px 0px 10px #ccc;
}
.right-menu-item {
  line-height: 46px;
  padding: 0px 12px;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
}
</style>
