<!--
 * @Description: 头部
 * @Author: kcz
 * @Date: 2019-12-30 00:37:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-11 02:55:26
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
          :value="options['marginTop']"
          @change="e => change(e, 'marginTop')"
        ></a-input>
      </div>
      <div class="style-box-body">
        <div class="style-box-body-left">
          <a-input
            class="style-box-input"
            size="small"
            :value="options['marginLeft']"
            @change="e => change(e, 'marginLeft')"
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
                :value="options['borderTop']"
                @change="e => change(e, 'borderTop')"
              ></a-input>
            </div>
            <div class="style-box-body">
              <div class="style-box-body-left">
                <a-input
                  class="style-box-input"
                  size="small"
                  :value="options['borderLeft']"
                  @change="e => change(e, 'borderLeft')"
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
                      :value="options['paddingTop']"
                      @change="e => change(e, 'paddingTop')"
                    ></a-input>
                  </div>
                  <div class="style-box-body">
                    <div class="style-box-body-left">
                      <a-input
                        class="style-box-input"
                        size="small"
                        :value="options['paddingLeft']"
                        @change="e => change(e, 'paddingLeft')"
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
                        :value="options['paddingRight']"
                        @change="e => change(e, 'paddingRight')"
                      ></a-input>
                    </div>
                  </div>
                  <div class="style-box-footer">
                    <a-input
                      class="style-box-input"
                      size="small"
                      :value="options['paddingBottom']"
                      @change="e => change(e, 'paddingBottom')"
                    ></a-input>
                  </div>
                </div>
                <!-- padding end -->
              </div>
              <div class="style-box-body-right">
                <a-input
                  class="style-box-input"
                  size="small"
                  :value="options['borderRight']"
                  @change="e => change(e, 'borderRight')"
                ></a-input>
              </div>
            </div>
            <div class="style-box-footer">
              <a-input
                class="style-box-input"
                size="small"
                :value="options['borderBottom']"
                @change="e => change(e, 'borderBottom')"
              ></a-input>
            </div>
          </div>
          <!-- border end -->
        </div>
        <div class="style-box-body-right">
          <a-input
            class="style-box-input"
            size="small"
            :value="options['marginRight']"
            @change="e => change(e, 'marginRight')"
          ></a-input>
        </div>
      </div>
      <div class="style-box-footer">
        <a-input
          class="style-box-input"
          size="small"
          :value="options['marginBottom']"
          @change="e => change(e, 'marginBottom')"
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
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: 0,
        borderLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
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
