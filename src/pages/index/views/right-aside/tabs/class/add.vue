<!--
 * @Author: your name
 * @Date: 2020-07-09 22:30:53
 * @LastEditTime: 2020-07-23 01:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\views\right-aside\tabs\label.vue
 -->
<template>
  <a-modal
    :title="title"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
  >
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
          <CommonStyleBox
            :options="styleBoxOptions"
            @change="handleStyleBoxChange"
          ></CommonStyleBox>
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
  </a-modal>
</template>

<script>
import CommonPageForm from 'page-form'
// import inputSelect from '@/components/input-select/_base.vue'
import dict from '@/dict/index.js'
// import { cssStyle2DomStyle } from '@/utils/index.js'
import lodash from 'lodash'
export default {
  components: {
    CommonPageForm
    // inputSelect
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '新增样式'
    },
    addFormData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      rules: {
        className: [
          {
            required: true,
            message: '请输入类名称'
          }
        ],
        textarea: [
          {
            required: true,
            message: '请输入功能描述'
          }
        ]
      },
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
        console.log('formData-fn')
        this.$emit('change', obj)
      }, 100),
      deep: true
    },
    addFormData: {
      handler: lodash.throttle(function(newValue) {
        this.$nextTick(() => {
          this.reset()
          this.setFieldsValue(newValue)
        })
      }, 100),
      deep: true
    }
  },
  computed: {
    formList() {
      return [
        {
          label: '类名称',
          dom: 'input',
          prop: 'className',
          customLabel: false,
          span: 24
        },
        {
          label: '功能描述',
          dom: 'textarea',
          prop: 'desc',
          customLabel: true,
          span: 24
        }
      ]
        .concat(
          dict.styles.map(item => {
            return {
              label: item.desc,
              dom: item.list ? 'input-select' : 'input',
              prop: item.prop,
              list: item.list,
              customLabel: true,
              span: 24
            }
          })
        )
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
    },
    styleBoxOptions() {
      return {
        'margin-top': this.formData['margin-top'],
        'margin-right': this.formData['margin-right'],
        'margin-bottom': this.formData['margin-bottom'],
        'margin-left': this.formData['margin-left'],
        'border-top': this.formData['border-top'],
        'border-right': this.formData['border-right'],
        'border-bottom': this.formData['border-bottom'],
        'border-left': this.formData['border-left'],
        'padding-top': this.formData['padding-top'],
        'padding-right': this.formData['padding-right'],
        'padding-bottom': this.formData['padding-bottom'],
        'padding-left': this.formData['padding-left']
      }
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
    handleFormInput: lodash.throttle(function(value) {
      const formData = JSON.parse(JSON.stringify(this.formData))
      for (const key in value) {
        if (key.indexOf('_input_select') === -1) {
          formData[key] = value[key]
        }
      }
      this.$set(this, 'formData', JSON.parse(JSON.stringify(formData)))
    }, 300),
    handleComedirrorInput: lodash.throttle(function(value) {
      try {
        // 当value已经是json的时候，则不进行转换
        value = JSON.stringify(JSON.parse(value))
      } catch {
        // 当value不是json，即可能从蓝湖复制的css代码块，则进行转换。
        value = value
          .replace(/[^\s|^{]+:/gi, function(str) {
            return `"${str.slice(0, -1)}":`
          })
          .replace(/[\n\r\t\v]/g, '')
          .replace(/:[^;]+;/gi, function(str) {
            return `${str.slice(0, 1)}"${str.slice(1, -1)}"${str.slice(-1)}`
          })
          .replace(/;\}$/g, '}')
          .replace(/(;)/g, function() {
            return ','
          })
      }
      console.log(value)
      this.formData = JSON.parse(value)
      this.$set(this, 'formData', this.formData)
      setTimeout(() => {
        this.$emit('change', this.formData, true)
      }, 300)
    }, 300),
    handleStyleBoxChange({ value, status }) {
      const formData = JSON.parse(JSON.stringify(this.formData))
      console.log(value, status)
      // this.mardomUpdate = value
      formData[status] = value
      this.$set(this, 'formData', JSON.parse(JSON.stringify(formData)))
    },
    reset() {
      this.formData = {}
      this.$refs.CommonPageForm.reset()
    },
    setFieldsValue(obj) {
      this.formData = obj
      this.$refs.CommonPageForm.setFieldsValue(obj)
    },
    handleOk() {
      this.$refs.CommonPageForm.handleOk((err, values) => {
        console.log(err, values)
        if (!err) {
          this.$emit('ok', this.formData)
        }
      })
    },
    handleCancel() {
      this.$emit('close')
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
