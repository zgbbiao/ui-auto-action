<!--
 * @Author: your name
 * @Date: 2020-07-09 22:30:53
 * @LastEditTime: 2020-07-10 00:49:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\views\right-aside\tabs\label.vue
 -->
<template>
  <a-form
    :form="form"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    @submit="handleSubmit"
  >
    <a-form-item label="字体大小">
      <a-input
        v-decorator="[
          'fontsSize',
          { rules: [{ required: true, message: 'Please input your note!' }] }
        ]"
      />
    </a-form-item>
    <a-form-item label="字体颜色">
      <a-input
        v-decorator="[
          'fontColor',
          { rules: [{ required: true, message: 'Please input your note!' }] }
        ]"
      />
    </a-form-item>
    <a-form-item label="字体族">
      <a-input
        v-decorator="[
          'fontFamily',
          { rules: [{ required: true, message: 'Please input your note!' }] }
        ]"
      />
    </a-form-item>
    <a-form-item label="边框大小">
      <a-input
        v-decorator="[
          'borderSize',
          { rules: [{ required: true, message: 'Please input your note!' }] }
        ]"
      />
    </a-form-item>
    <a-form-item label="边框颜色">
      <a-input
        v-decorator="[
          'borderColor',
          { rules: [{ required: true, message: 'Please input your note!' }] }
        ]"
      />
    </a-form-item>
    <a-form-item label="边框线状">
      <a-input
        v-decorator="[
          'borderStyle',
          { rules: [{ required: true, message: 'Please input your note!' }] }
        ]"
      />
    </a-form-item>
    <a-form-item
      label="间距"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 24 }"
    >
      <CommonStyleBox></CommonStyleBox>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        保存
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
<style lang="less"></style>
