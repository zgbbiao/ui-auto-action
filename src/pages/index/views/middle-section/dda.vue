<!--
 * @Author: your name
 * @Date: 2020-07-17 01:40:44
 * @LastEditTime: 2020-07-17 02:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\views\middle-section\dda.vue
 -->
<template>
  <div>
    <div
      @contextmenu="showMenu"
      id="contextmenu"
      style="width: 100px;height: 100px;background: red;"
    ></div>
    <vue-context-menu
      class="right-menu"
      :target="contextMenuTarget"
      :show="contextMenuVisible"
      @update:show="show => (contextMenuVisible = show)"
    >
      <a href="javascript:;" @click="showScene">复制</a>
    </vue-context-menu>
  </div>
</template>
<script>
import { component as VueContextMenu } from '@xunlei/vue-context-menu'
export default {
  components: {
    'vue-context-menu': VueContextMenu
  },
  data() {
    return {
      contextMenuVisible: false,
      contextMenuTarget: '',
      selectedIndex: ''
    }
  },
  mounted() {
    const myChartContainer = document.getElementById('contextmenu')
    // 右击显示菜单 区域位置
    this.contextMenuTarget = myChartContainer
    // 关闭浏览器右击默认菜单
    myChartContainer.oncontextmenu = function(e) {
      return false
    }
  },
  methods: {
    showMenu() {
      event.preventDefault()
      this.selectedIndex = 'df'
    },
    showScene() {
      console.log(this.selectedIndex)
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.right-menu {
  position: fixed;
}
</style>
