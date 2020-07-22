/*
 * @Author: your name
 * @Date: 2020-07-22 10:56:57
 * @LastEditTime: 2020-07-23 01:31:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\right-aside\tabs\class\addMixins.js
 */
import gaudMixins from '@/pages/index/mixins/part/gaud.js'
export default {
  mixins: [gaudMixins],
  data() {
    return {
      addVisible: false,
      addFormData: {},
      addTitle: ''
    }
  },
  methods: {
    handleAddShow(row) {
      this.addFormData = row || {}
      this.addTitle = '新增样式'
      if (Object.values(this.addFormData).length) {
        this.addTitle = '编辑样式'
      }
      this.addVisible = true
    },
    handleAddClose() {
      this.addVisible = false
    },
    async handleAddOk(data) {
      // setAdd
      console.log(data)
      // const arr = this.setGet({
      //   path: 'globalClassList'
      // })
      this.setAdd({
        path: 'globalClassList',
        data: data
      })
      this.handleAddClose()
      this.init()
    },
    handleStyleChange(style, isUpdate) {
      if (Object.keys(style).length || isUpdate) {
        console.log(style)
      }
    }
  }
}
