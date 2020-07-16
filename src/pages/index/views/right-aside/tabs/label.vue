<!--
 * @Author: your name
 * @Date: 2020-07-09 22:30:53
 * @LastEditTime: 2020-07-11 18:47:21
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
      labelWidth="auto"
      :formItemLayout="formItemLayout"
      @input="handleFormInput"
    >
    </CommonPageForm>
  </div>
</template>

<script>
import CommonPageForm from 'page-form'
export default {
  components: {
    CommonPageForm
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
      return [
        {
          label: '文本内容',
          dom: 'input',
          prop: 'text',
          customLabel: true,
          span: 24
        }
      ]
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
