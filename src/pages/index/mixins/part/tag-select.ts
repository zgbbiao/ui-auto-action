/*
 * @Author: your name
 * @Date: 2020-06-14 15:47:17
 * @LastEditTime: 2020-06-14 17:44:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\mixins\part\tag-select.ts
 */ 
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const vuexIndexModule = namespace('index')
@Component({
  data() {
    return {
      updateTime: 0,
      showPropertie: false,
    }
  }
})
export default class Bem extends Vue {
  @vuexIndexModule.Action('setTagPanelType') setTagPanelType
  @vuexIndexModule.Action('setTagPanelCurSelect') setTagPanelCurSelect
  @vuexIndexModule.State(state => state.curPanelSelectTag) curPanelSelectTag
  @vuexIndexModule.State(state => state.isHideModel) isHideModel
  @vuexIndexModule.State('selectTagList') selectTagList
  @vuexIndexModule.State('noModel') noModel
  handleSetSelectItem(record) {
    // 操作间隔不能低于100毫秒
    const newTime = new Date().getTime()
    if (newTime - this['updateTime'] < 100) {
      return false
    }

    this['updateTime'] = newTime

    // 设置selectItem的值
    this['setTagPanelCurSelect'](record)

    // 判断是否选中控件，如果选中则弹出属性面板，否则关闭属性面板
    if (record.key) {
      this['setTagPanelType'](record.type)
      this['showPropertie'] = true
    } else {
      this['showPropertie'] = false
    }
  }
}
