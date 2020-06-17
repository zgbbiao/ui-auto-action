<!--
 * @Author: your name
 * @Date: 2020-06-08 17:37:17
 * @LastEditTime: 2020-06-14 19:29:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auto-ant-vue2\src\pages\index\views\index\index.vue
-->
<template>
  <div
    class="content"
    :class="{
      'show-head': isShowHead,
      'toolbars-top': isToolbarsTop,
      'show-head-and-toolbars-top': isToolbarsTop && isShowHead,
      [btoStr(b('wrapper', ['content']))]: true
    }"
  >
    <!-- 左侧控件区域 start -->
    <aside class="left">
      <PageIndexLeftAside />
    </aside>
    <!-- 左侧控件区域 end -->
    <!-- 中间面板区域 start -->
    <section>
      <PageIndexMiddleSection />
    </section>
    <!-- 中间面板区域 end -->
    <!-- 右侧控件属性区域 start -->
    <aside class="right">
      <PageIndexRightAside />
    </aside>
    <!-- 右侧控件属性区域 end -->
  </div>
</template>
<script lang="ts">
import bemMixins from '@/mixins/bem'
import PageIndexLeftAside from '@/pages/index/views/left-aside/index.vue'
import PageIndexRightAside from '@/pages/index/views/right-aside/index.vue'
import PageIndexMiddleSection from '@/pages/index/views/middle-section/index.vue'
import {
  Component,
  // Emit,
  // Inject,
  // Model,
  // Provide,
  // Prop,
  Vue
  // Watch
} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const vuexIndexModule = namespace('index')
@Component({
  name: 'PageIndexContent',
  mixins: [bemMixins],
  components: {
    PageIndexLeftAside,
    PageIndexRightAside,
    PageIndexMiddleSection
  }
})
export default class PageIndexContent extends Vue {
  @vuexIndexModule.State('isToolbarsTop')
  isToolbarsTop!: boolean
  @vuexIndexModule.State('isShowHead')
  isShowHead!: boolean
  data() {
    return {}
  }
}
</script>

<style lang="less">
.PageIndexContent {
  &__wrapper {
    &--wrapper {
    }
    // 设计器内容样式
    &--content {
      display: flex;
      height: 100%;
      flex: 1;

      &.show-head {
        margin-top: 6px;
        height: calc(100% - @header-height - 6px);
      }

      &.toolbars-top {
        margin-top: 6px;
        height: calc(100% - @operating-area-height - 6px);
      }

      &.show-head-and-toolbars-top {
        margin-top: 6px;
        height: calc(100% - @header-height - @operating-area-height - 6px);
      }

      // 左右栏
      aside {
        box-shadow: 0px 0px 1px 1px @border-color;
        width: @left-right-width;
        height: 100%;
        // >.left-title {
        //   padding    : 12px 10px 8px;
        //   user-select: none;
        // }

        &.left {
          // border-right: 1px solid @aside-border-color;
          height: 100%;
          overflow: auto;
          user-select: none;

          .ant-collapse-content-box {
            padding: 0;
          }

          .ant-collapse {
            border: 0;
            > .ant-collapse-item {
              border-color: @border-color;
              > .ant-collapse-header {
                padding: 7px 0 7px 40px;
              }

              > .ant-collapse-content {
                border-color: @border-color;
              }
            }
          }

          ul {
            padding: 5px;
            list-style: none;
            display: flex;
            margin-bottom: 0;
            flex-wrap: wrap;
            // background: #efefef;

            li {
              border-radius: 0;
              border: 0;
              box-shadow: 1px 0 0 0 @border-color, 0 1px 0 0 @border-color,
                1px 1px 0 0 @border-color, 1px 0 0 0 @border-color inset,
                0 1px 0 0 @border-color inset;
              padding: 8px 12px;
              transition: all 0.3s;
              width: calc(50% - 6px);
              margin: 2.7px;
              height: 36px;
              line-height: 20px;
              cursor: move;
              border: 1px solid transparent;
              border-radius: 3px;
              transition: all 0.3s;

              &:hover {
                color: @primary-color;
                border: 1px solid @primary-color;
                position: relative;
                z-index: 1;
                box-shadow: 0 2px 6px @primary-color;
              }
            }
          }
        }

        // 右侧区域
        &.right {
          height: 100%;
          // border-left: 1px solid @aside-border-color;
          // border-top : 1px solid @aside-border-color;
          color: #fff;
          overflow: hidden;
          position: relative;

          // 控件属性设置
          .form-item-properties {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 12;
            left: 100%;
            top: 0;
            // box-shadow: 0 0px 3px 3px #aaa;
            transition: all 0.5s;

            &.show-properties {
              left: 0px;

              .close-box {
                right: @left-right-width - 1px;
                opacity: 0.7;
              }
            }

            // 关闭控件属性面板按钮
            .close-box {
              opacity: 0;
              transition: all 0.5s;
              position: fixed;
              background: @primary-color;
              // background   : fade(@primary-color,70%);
              padding: 8px 10px;
              cursor: pointer;
              user-select: none;
              border-radius: 5px 0 0 5px;
              font-size: 16px;
              color: #fff;
              bottom: 10px;
              right: 0px;
            }
          }

          .properties-centent {
            height: 100%;
            overflow: hidden;
            background: #fff;

            .head-title {
              height: 48px;
              line-height: 48px;
              padding: 0 24px;
              font-size: 16px;
              border-bottom: 1px solid @border-color;
              color: rgba(0, 0, 0, 0.85);
            }

            .properties-body {
              overflow: auto;
              height: calc(100% - 48px);
              padding: 8px 16px;
            }

            .ant-form-item {
              margin-bottom: 0;
              padding: 6px 0;
              border-bottom: 1px solid @border-color;

              .ant-form-item-label {
                line-height: 2;
              }
            }
          }

          .hint-box {
            color: #aaa;
            height: 75vh;
            line-height: 75vh;
            text-align: center;
            font-size: 20px;
          }
        }
      }

      // 中间内容区域
      section {
        flex: 1;
        max-width: calc(100% - @left-right-width - @left-right-width);
        user-select: none;
        margin: 0 8px 0;
        box-shadow: 0px 0px 1px 1px @border-color;

        // 内容操作区域
        .form-panel {
          // height       : calc(100% - 50px);
          height: 100%;
          background: #eee;
          // border       : 1px solid #ccc;
          position: relative;

          &.no-toolbars-top {
            height: calc(100% - 50px);
          }

          > .hint-text {
            position: absolute;
            left: 0;
            top: 45%;
            width: 100%;
            text-align: center;
            font-size: 20px;
            color: #aaa;
            z-index: 16;
          }

          .a-form-box {
            height: 100%;
            // box-shadow: 0px 1px 5px 1px #ccc;
          }

          .draggable-box {
            height: 100%;
            overflow: auto;

            .list-main {
              min-height: 100%;
              padding: 5px;
              position: relative;
              background: #fafafa;
              // border    : 1px #ccc dashed;

              .moving {
                // 拖放移动中
                // outline-width: 0;
                min-height: 35px;
                box-sizing: border-box;
                overflow: hidden;
                padding: 0 !important;
                // margin       : 3px 0;
                position: relative;

                &::before {
                  content: '';
                  height: 5px;
                  width: 100%;
                  background: @primary-color;
                  position: absolute;
                  top: 0;
                  right: 0;
                }
              }

              // 动态表格设计面板样式
              .batch-box {
                > .batch-label {
                  font-size: 16px;
                  font-weight: 500;
                  padding: 10px 10px;
                }

                .draggable-box {
                  min-height: 60px;
                  width: 100%;
                  border: 1px #ccc dashed;
                  background: #fff;

                  .list-main {
                    min-height: 60px;
                    position: relative;
                    border: 1px #ccc dashed;
                    overflow-x: auto;
                    overflow-y: auto;
                    white-space: nowrap;

                    .moving {
                      // 拖放移动中
                      width: 175px;
                      min-height: 94px;
                      display: inline-block;
                    }

                    > div {
                      min-width: 185px;
                      display: inline-block;
                      vertical-align: top;

                      .ant-form-item > .ant-form-item-label,
                      .ant-form-item > .ant-form-item-control-wrapper {
                        text-align: left;
                        display: block;
                      }

                      .ant-col {
                        width: 100%;
                      }
                    }
                  }
                }
              }

              .batch-box,
              .grid-box,
              .table-box {
                position: relative;
                box-sizing: border-box;
                padding: 5px;
                background: @layout-background-color;
                width: 100%;
                transition: all 0.3s;
                overflow: hidden;

                .form-item-box {
                  position: relative;
                  box-sizing: border-box;

                  .ant-form-item {
                    // 修改ant form-item的margin为padding
                    margin: 0;
                    padding-bottom: 15px;
                  }
                }

                .grid-row,
                .table-layout {
                  background: @layout-background-color;

                  .grid-col,
                  .table-td {
                    .draggable-box {
                      min-height: 60px;
                      min-width: 50px;
                      border: 1px #ccc dashed;
                      background: #fff;

                      .list-main {
                        min-height: 60px;
                        position: relative;
                        border: 1px #ccc dashed;
                      }
                    }
                  }
                }

                // 选择时 start
                &::before {
                  content: '';
                  height: 5px;
                  width: 100%;
                  background: transparent;
                  position: absolute;
                  top: 0;
                  right: -100%;
                  transition: all 0.3s;
                }

                &.active {
                  &::before {
                    background: @layout-color;
                    right: 0;
                  }

                  background: @layout-hover-bg-color;
                  outline-offset: 0;
                }

                > .copy,
                > .delete {
                  position: absolute;
                  top: 0px;
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                  color: #fff;
                  z-index: 989;
                  transition: all 0.3s;

                  &.unactivated {
                    opacity: 0 !important;
                    pointer-events: none;
                  }

                  &.active {
                    opacity: 1 !important;
                  }
                }

                > .copy {
                  border-radius: 0 0 0 8px;
                  right: 30px;
                  background: @layout-color;
                }

                > .delete {
                  right: 0px;
                  background: @layout-color;
                }
              }
            }
          }
        }
      }
    }
  }
}

.list-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  .layout-width {
    width: 100%;
  }
}
.drag-move-box {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s;
  min-height: 36px;

  &:hover {
    background: @primary-hover-bg-color;
  }

  // 选择时 start
  &::before {
    content: '';
    height: 5px;
    width: 100%;
    background: @primary-color;
    position: absolute;
    top: 0;
    right: -100%;
    transition: all 0.3s;
  }

  &.active {
    &::before {
      right: 0;
    }

    background: @primary-hover-bg-color;
    outline-offset: 0;
  }

  // 选择时 end
  .form-item-box {
    position: relative;
    box-sizing: border-box;
    word-wrap: break-word;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }

    .ant-form-item {
      // 修改ant form-item的margin为padding
      margin: 0;
      padding-bottom: 6px;
    }
  }

  .show-key-box {
    // 显示key
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 14px;
    z-index: 987;
    color: @primary-color;
  }

  > .copy,
  > .delete {
    position: absolute;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    z-index: 989;
    transition: all 0.3s;
    cursor: pointer;

    &.unactivated {
      opacity: 0 !important;
      pointer-events: none;
    }

    &.active {
      opacity: 1 !important;
    }
  }

  > .copy {
    border-radius: 0 0 0 8px;
    right: 30px;
    background: @primary-color;
  }

  > .delete {
    right: 0px;
    background: @primary-color;
  }
}
</style>
