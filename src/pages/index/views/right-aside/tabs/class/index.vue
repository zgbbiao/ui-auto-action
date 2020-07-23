<!--
 * @Author: your name
 * @Date: 2020-07-09 22:30:53
 * @LastEditTime: 2020-07-24 00:05:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\views\right-aside\tabs\label.vue
 -->
<template>
  <div :key="mardomUpdate">
    <CommonPageForm
      ref="CommonPageForm"
      :form-list="formList"
      :form-data="formData"
      :rules="rules"
      labelWidth="100px"
      :formItemLayout="formItemLayout"
      @input="handleFormInput"
    >
      <template v-slot:classList="{ item }">
        <a-select
          v-show="item.show !== false"
          v-decorator="[
            item.prop,
            {
              initialValue: formData[item.prop],
              rules: rules[item.prop]
            }
          ]"
          v-bind="item.bind"
          :disabled="item.disabled"
          :placeholder="item.placeholder"
          v-on="item.listeners || {}"
          style="width: 150px;"
        >
          <a-select-option v-if="!(item.bind || {}).emptySelect" value="">
            请选择
          </a-select-option>
          <a-select-option
            v-for="(item2, key) in item.list || []"
            :key="'option' + key"
            :value="item2.value"
            >{{ item2.label }}</a-select-option
          >
        </a-select>
        <a-button style="width: 50px;" @click="addComponentVisible = true"
          >选择</a-button
        >
      </template>
    </CommonPageForm>
    <!-- <addComponent :visible="addComponentVisible"></addComponent> -->
    <selectListComponent
      :visible="addComponentVisible"
      title="选择应用"
      @ok="handleselectListComponentOk"
      @close="handleselectListComponentClose"
    ></selectListComponent>
  </div>
</template>

<script>
import CommonPageForm from 'page-form'
// import addComponent from './add.vue'
import selectListComponent from './select-list.vue'
// import inputSelect from '@/components/input-select/_base.vue'
import dict from '@/dict/index.js'
// import { cssStyle2DomStyle } from '@/utils/index.js'
import lodash from 'lodash'
import { mapActions } from 'vuex'
export default {
  components: {
    CommonPageForm,
    // addComponent,
    selectListComponent
    // inputSelect
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      rules: {},
      formData: {},
      mardomUpdate: '',
      formItemLayout: {
        labelCol: {
          xs: { span: 0 },
          sm: { span: 0 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 }
        }
      },
      addComponentVisible: false,
      selectClassList: []
      // lodash
    }
  },
  watch: {
    formData: {
      handler: lodash.throttle(function(newValue) {
        const obj = {}
        for (const key in newValue) {
          if (newValue[key]) {
            obj[key] = newValue[key]
          }
        }
        this.$emit('change', obj)
      }, 100),
      deep: true
    }
  },
  computed: {
    formList() {
      const selectClassList = this.selectClassList
      return [
        {
          label: '选择添加类名',
          dom: 'slot',
          prop: 'classList',
          placeholder: '请选择添加类名',
          slots: ['classList'],
          bind: {
            labelInValue: true,
            emptySelect: true,
            mode: 'tags',
            open: false
          },
          listeners: {
            change: value => {
              console.log(value)
              // this.handleResourceTypeChange(value)
            }
          },
          list: selectClassList,
          span: 24
        }
      ]
    }
  },
  methods: {
    ...mapActions('index', ['setTagPanelCurSelectOptions']),
    handleFormInput: lodash.throttle(function(value) {
      const formData = JSON.parse(JSON.stringify(this.formData))
      for (const key in value) {
        if (key.indexOf('_input_select') === -1) {
          formData[key] = value[key]
        }
      }
      this.$set(this, 'formData', JSON.parse(JSON.stringify(formData)))
      // this.setTagClass()
    }, 300),
    reset() {
      this.formData = {}
      this.$refs.CommonPageForm.reset()
    },
    setFieldsValue(obj) {
      this.formData = obj
      this.$refs.CommonPageForm.setFieldsValue(obj)
    },
    handleselectListComponentOk(list) {
      if (!Array.isArray(this.formData.classList)) {
        this.formData.classList = []
      }
      this.selectClassList.push(
        ...list.map(item => {
          return {
            ...item,
            label: item.desc,
            value: item.className
          }
        })
      )
      // this.formData.classList.push(...list.map(item => item.className))
      this.formData.classList.push(
        ...list.map(item => {
          return {
            key: item.className,
            title: item.desc
          }
        })
      )
      this.formData.classList = lodash.uniqBy(this.formData.classList, 'key')
      this.selectClassList = lodash.uniqBy(this.selectClassList, 'value')
      this.setFieldsValue(this.formData)
      this.setTagClass()
    },
    setDefaultValue(selectClassList) {
      console.log(selectClassList)
      this.selectClassList = selectClassList
      this.formData.classList = selectClassList.map(item => {
        return {
          label: item.desc,
          value: item.className
        }
      })
      this.setFieldsValue(this.formData)
    },
    setTagClass() {
      if (!Array.isArray(this.formData.classList)) {
        this.formData.classList = []
      }
      const obj = {}
      this.formData.classList.forEach(item => {
        obj[item.key] = true
      })
      this.setTagPanelCurSelectOptions({
        class: obj,
        selectClassList: this.selectClassList
      })
      this.setGlobalCss(this.selectClassList)
      this.handleselectListComponentClose()
    },
    handleselectListComponentClose() {
      this.addComponentVisible = false
    },
    setGlobalCss(list) {
      let style = document.querySelector('#globalcssStyle')
      if (!style) {
        style = document.createElement('style')
        style.type = 'text/css'
        style.id = 'globalcssStyle'
        document.body.appendChild(style)
      }
      style.innerHTML = list
        .map(item => {
          const obj = JSON.parse(JSON.stringify(item))
          delete obj.className
          delete obj.desc
          delete obj.label
          delete obj.value
          let str = ''
          for (const key in obj) {
            str += `${key}: ${obj[key]};`
          }
          return `
          .${item.value} {
            ${str}
          }
          `
        })
        .join('')
    }
  }
}
/*
width:187px;
height:42px;
font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:18px;
*/
</script>
<style lang="less"></style>
