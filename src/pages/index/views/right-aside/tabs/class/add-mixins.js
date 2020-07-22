/*
 * @Author: your name
 * @Date: 2020-07-22 10:56:57
 * @LastEditTime: 2020-07-22 11:10:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\right-aside\tabs\class\addMixins.js
 */

export default {
  data() {
    return {
      addVisible: false
    }
  },
  methods: {
    handleAddShow() {
      this.addVisible = true
    },
    handleAddClose() {
      this.addVisible = false
    },
    handleAddOk() {
      this.handleAddClose()
    },
    handleStyleChange(style, isUpdate) {
      if (Object.keys(style).length || isUpdate) {
        console.log(style)
      }
    }
  }
}
