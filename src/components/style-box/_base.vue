<!--
 * @Description: 头部
 * @Author: kcz
 * @Date: 2019-12-30 00:37:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-19 19:25:30
 -->
<template>
  <header :class="b('wrapper', ['wrapper'])">
    <!-- margin start -->
    <div class="style-box style-box-margin">
      <div class="style-box-header clearfix">
        <span style="margin-left: -50px;">margin</span>
        <a-input
          class="style-box-input"
          size="small"
          :value="options['margin-top']"
          @change="e => change(e, 'margin-top')"
        ></a-input>
      </div>
      <div class="style-box-body">
        <div class="style-box-body-left">
          <a-input
            class="style-box-input"
            size="small"
            :value="options['margin-left']"
            @change="e => change(e, 'margin-left')"
          ></a-input>
        </div>
        <div class="style-box-body-middle">
          <!-- border start -->
          <div class="style-box-border">
            <div class="style-box-header">
              <span style="margin-left: -50px;">border</span>
              <a-input
                class="style-box-input"
                size="small"
                :value="options['border-top']"
                @change="e => change(e, 'border-top')"
              ></a-input>
            </div>
            <div class="style-box-body">
              <div class="style-box-body-left">
                <a-input
                  class="style-box-input"
                  size="small"
                  :value="options['border-left']"
                  @change="e => change(e, 'border-left')"
                ></a-input>
              </div>
              <div class="style-box-body-middle">
                <!-- padding start -->
                <div class="style-box-padding">
                  <div class="style-box-header">
                    <span style="margin-left: -50px;">padding</span>
                    <a-input
                      class="style-box-input"
                      size="small"
                      :value="options['padding-top']"
                      @change="e => change(e, 'padding-top')"
                    ></a-input>
                  </div>
                  <div class="style-box-body">
                    <div class="style-box-body-left">
                      <a-input
                        class="style-box-input"
                        size="small"
                        :value="options['padding-left']"
                        @change="e => change(e, 'padding-left')"
                      ></a-input>
                    </div>
                    <div class="style-box-body-middle">
                      <!-- concent start -->
                      <div class="style-box-concent"></div>
                      <!-- concent end -->
                    </div>
                    <div class="style-box-body-right">
                      <a-input
                        class="style-box-input"
                        size="small"
                        :value="options['padding-right']"
                        @change="e => change(e, 'padding-right')"
                      ></a-input>
                    </div>
                  </div>
                  <div class="style-box-footer">
                    <a-input
                      class="style-box-input"
                      size="small"
                      :value="options['padding-bottom']"
                      @change="e => change(e, 'padding-bottom')"
                    ></a-input>
                  </div>
                </div>
                <!-- padding end -->
              </div>
              <div class="style-box-body-right">
                <a-input
                  class="style-box-input"
                  size="small"
                  :value="options['border-right']"
                  @change="e => change(e, 'border-right')"
                ></a-input>
              </div>
            </div>
            <div class="style-box-footer">
              <a-input
                class="style-box-input"
                size="small"
                :value="options['borderB-bottom']"
                @change="e => change(e, 'border-bottom')"
              ></a-input>
            </div>
          </div>
          <!-- border end -->
        </div>
        <div class="style-box-body-right">
          <a-input
            class="style-box-input"
            size="small"
            :value="options['margin-right']"
            @change="e => change(e, 'margin-right')"
          ></a-input>
        </div>
      </div>
      <div class="style-box-footer">
        <a-input
          class="style-box-input"
          size="small"
          :value="options['margin-bottom']"
          @change="e => change(e, 'margin-bottom')"
        ></a-input>
      </div>
    </div>
    <!-- margin end -->
  </header>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'CommonStyleBox',
  mixins: [bemMixins]
})
export default class CommonStyleBox extends Vue {
  @Prop({
    default: () => {
      return {
        'margin-top': 0,
        'margin-right': 0,
        'margin-bottom': 0,
        'margin-left': 0,
        'border-top': 0,
        'border-right': 0,
        'border-bottom': 0,
        'border-left': 0,
        'padding-top': 0,
        'padding-right': 0,
        'padding-bottom': 0,
        'padding-left': 0
      }
    }
  })
  options: any
  change(e, status) {
    const value = e.target.value
    const options = JSON.parse(JSON.stringify(this['options']))
    options[status] = value
    this.$emit('change', {
      value,
      status,
      options
    })
  }
}
</script>
<style lang="less">
.CommonStyleBox {
  &__wrapper {
    &--wrapper {
    }
  }
}

.style-box {
  &.style-box-margin {
    border: 1px dashed #aaa;
    width: 250px;
    height: 225px;
    background: #f9cc9d;
    &:hover {
      background: rgba(107, 88, 33, 0.85);
    }
  }
  .style-box-border {
    border: 1px solid #aaa;
    background: #ffeebc;
    &:hover {
      background: rgb(241, 219, 140);
    }
  }
  .style-box-padding {
    border: 1px solid #aaa;
    background: #c4dfb8;
    &:hover {
      background: rgb(241, 219, 140);
    }
  }
  .style-box-concent {
    border: 1px solid #aaa;
    width: 64px;
    height: 40px;
    background: #7d98b1;
    &:hover {
      background: rgb(241, 219, 140);
    }
  }
  .style-box-header {
    height: 30px;
    text-align: center;
  }
  .style-box-body {
    // height: 100px;
    display: flex;
    .style-box-body-left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
    }
    .style-box-body-middle {
      // width: calc(100%-60px);
      // height: 100%;
      flex: 1;
    }
    .style-box-body-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
    }
  }
  .style-box-footer {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
input.style-box-input {
  padding: 0;
  text-align: center;
  display: inline-block;
  max-width: 30px;
  background: transparent;
  border-radius: 50%;
  border: 1px dashed #aaa;
  &:focus {
    background: #fff;
  }
}
</style>
