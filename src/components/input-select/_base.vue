<!--
 * @Author: your name
 * @Date: 2020-07-10 23:07:24
 * @LastEditTime: 2020-07-10 23:42:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\components\input-select\_base.vue
-->
<template>
  <div class="input-select u-clearfix" v-show="item.show !== false">
    <a-input
      class="input-select-input"
      v-decorator="[
        item.prop,
        {
          initialValue: formData[item.prop],
          rules: rules[item.prop]
        }
      ]"
      v-bind="item.bind"
      :placeholder="item.placeholder"
      v-on="{ ...(item.listeners || {}), change: handleChange }"
    >
      <template v-for="slotItem in item.slots || []" v-slot:[slotItem]>
        <slot
          :name="slotItem"
          :scopedSlots="item.scopedSlots || {}"
          :item="item"
        ></slot>
      </template>
    </a-input>
    <a-select
      v-decorator="[
        item.prop + 'select',
        {
          initialValue: formData[item.prop],
          rules: rules[item.prop]
        }
      ]"
      style="width: 100%;"
      class="input-select-select"
      v-bind="item.bind"
      :placeholder="item.placeholder"
      v-on="{ ...(item.listeners || {}), change: handleChange }"
    >
      <a-select-option v-if="(item.bind || {}).emptySelect" value="">
        请选择
      </a-select-option>
      <a-select-option
        v-for="(item2, key) in item.list || []"
        :key="'option' + key"
        :value="item2.value"
        >{{ item2.label }}</a-select-option
      >
    </a-select>
  </div>
</template>

<script>
export default {
  name: 'CommonInputSelect',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    },
    value: {
      default: ''
    },
    formData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    handleChange(value) {
      console.log(value)
      this.$emit('input', value)
    }
  }
}
</script>

<style>
.input-select {
  position: relative;
}
input.input-select-input {
  position: absolute;
  z-index: 2;
  left: 0;
  width: calc(100% - 40px);
}
div.input-select-select {
  position: absolute;
  top: 0;
  left: 0;
}
.select-color-btn {
  width: 14%;
  display: inline-block;
  height: 80rpx;
  float: right;
  z-index: 3;
  position: relative;
}
</style>
