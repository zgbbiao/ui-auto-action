<!--
 * @Author: your name
 * @Date: 2020-07-09 22:30:53
 * @LastEditTime: 2020-07-18 02:07:48
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
      <template v-slot:bj>
        <CommonStyleBox @change="handleStyleBoxChange"></CommonStyleBox>
      </template>
      <template v-slot:code>
        <CommonTestCodemirror
          :value="JSON.stringify(formData, null, 2)"
          @input="handleComedirrorInput"
        ></CommonTestCodemirror>
      </template>
      <!-- CommonTestCodemirror -->
    </CommonPageForm>
  </div>
</template>

<script>
import CommonPageForm from 'page-form'
// import inputSelect from '@/components/input-select/_base.vue'
import dict from '@/dict/index.js'
import { cssStyle2DomStyle } from '@/utils/index.js'
// import lodash from 'lodash'
export default {
  components: {
    CommonPageForm
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
      }
    }
  },
  watch: {
    formData: {
      handler(newValue) {
        const fn = () => {
          const obj = {}
          for (const key in newValue) {
            if (newValue[key]) {
              obj[key] = newValue[key]
            }
          }
          this.$emit('change', obj)
        }
        fn()
        // lodash.throttle(fn, 100)
      },
      deep: true
    }
  },
  computed: {
    formList() {
      return dict.styles
        .map(item => {
          return {
            label: item.desc,
            dom: item.list ? 'input-select' : 'input',
            prop: item.prop,
            list: item.list,
            customLabel: true,
            span: 24
          }
        })
        .concat([
          {
            label: '边距',
            dom: 'slot',
            prop: 'bj',
            span: 24,
            slots: ['bj']
          },
          {
            label: '代码',
            dom: 'slot',
            prop: 'code',
            span: 24,
            slots: ['code']
          }
        ])
      // return [
      //   {
      //     label: '选择导入分组',
      //     dom: 'select',
      //     prop: 'resourceGroupId',
      //     placeholder: '请选择导入分组',
      //     list: [],
      //     bind: {
      //       labelInValue: true,
      //       emptySelect: true
      //     },
      //     listeners: {
      //       change: value => {
      //         // this.handleResourceTypeChange(value)
      //       }
      //     },
      //     span: 24
      //   }
      // ]
    }
  },
  methods: {
    handleSelectInput(value, prop) {
      this.formData[prop] = value
      // this.$refs.CommonPageForm.setFieldsValue({
      //   [prop]: value
      // })
      this.mardomUpdate = value
      this.$forceUpdate()
    },
    handleFormInput(value) {
      console.log(value)
      for (const key in value) {
        if (key.indexOf('_input_select') === -1) {
          this.formData[key] = value[key]
        }
      }
      this.$set(this, 'formData', JSON.parse(JSON.stringify(this.formData)))
    },
    handleComedirrorInput(value) {
      value = value
        .replace(/[\n\r\t\v]/g, '')
        .replace(/(\w+)-(\w+)/gi, function(str) {
          return cssStyle2DomStyle(str)
        })
        .replace(/(\w)+:/gi, function(str) {
          return `"${str.slice(0, -1)}":`
        })
        .replace(/:[^;]+;/gi, function(str) {
          return `${str.slice(0, 1)}"${str.slice(1, -1)}"${str.slice(-1)}`
        })
        .replace(/;/gi, ',')
        .replace(/,\}$/g, '}')
        .replace(/\s/g, '')
      console.log(value)
      this.formData = JSON.parse(value)
      this.$set(this, 'formData', this.formData)
      setTimeout(() => {
        this.$emit('change', this.formData, true)
      }, 300)
    },
    handleStyleBoxChange({ value, status }) {
      console.log(value, status)
      // this.mardomUpdate = value
      this.formData[status] = value
      this.$set(this, 'formData', this.formData)
    },
    reset() {
      this.formData = {}
      this.$refs.CommonPageForm.reset()
    },
    setFieldsValue(obj) {
      this.formData = obj
      this.$refs.CommonPageForm.setFieldsValue(obj)
    }
  }
}
</script>
<style lang="less"></style>
