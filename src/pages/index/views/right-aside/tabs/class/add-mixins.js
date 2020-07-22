/*
 * @Author: your name
 * @Date: 2020-07-22 10:56:57
 * @LastEditTime: 2020-07-23 01:50:50
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
      if (
        !this.globalClassList.find(item => item.className === data.className)
      ) {
        this.setAdd({
          path: 'globalClassList',
          data: data
        })
      } else {
        this.setUpdate({
          path: 'globalClassList',
          data: val => {
            return val.map(item => {
              return item.className === data.className ? data : item
            })
          }
        })
      }
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
