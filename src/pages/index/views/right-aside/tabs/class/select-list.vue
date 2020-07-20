<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 17:16:20
 * @LastEditTime: 2020-07-20 19:36:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <a-modal
    :visible="visible"
    :title="title"
    width="80%"
    style="min-width:640px;"
    :after-close="handleClose"
    :mask-closable="false"
    @cancel="handleClose"
  >
    <template slot="footer">
      <!-- <a-button key="submit" type="primary" @click="handleOk">返回</a-button> -->
      <!-- <a-button key="back" @click="handleClose">取消</a-button> -->
      <span></span>
    </template>
    <div style="margin: -24px;">
      <CommonPageTable
        ref="PageTable"
        v-model="searchData"
        :columns="columns"
        :data="tableData"
        :search-list="searchList"
        :search-data="searchData"
        :search-btn="searchBtn"
        :slots="slots"
        :pagination="pagination"
        :table-bind="tableBind"
        :header-layout="headerLayout"
        @change="handlePaginationChange"
      >
        <template v-slot:action="{ scopedSlots, scope }">
          <!-- <a
            v-if="!scope.row.permissionId"
            href="javascript:;"
            @click="handleEdit(scope.row)"
            >编辑</a
          > -->
          <pageTableAction
            :operateArr="[
              {
                iconName: 'edit',
                text: '编辑',
                click: handleEdit
              },
              {
                iconName: 'view',
                text: '查看',
                click: handleEdit
              },
              {
                iconName: 'delete',
                text: '删除',
                click: handleEdit
              }
            ]"
            :scope="scope"
          ></pageTableAction>
        </template>
        <template v-slot:table-header-top>
          <div class="table-header-top">
            <div>
              <span>已选择</span>
              <span class="selected-num">
                {{ rowSelectionOptions.selectedRowKeys.length }}
              </span>
              <span>项目</span>
              <span
                v-if="rowSelectionOptions.selectedRowKeys.length !== 0"
                :class="{
                  'selected-cancel': true,
                  'selected-cancel--disabled':
                    rowSelectionOptions.selectedRowKeys.length === 0
                }"
                @click="handleCencelSelect"
              >
                取消选择
              </span>
            </div>
          </div>
        </template>
      </CommonPageTable>
      <router-view></router-view>
    </div>
  </a-modal>
</template>
<script>
import CommonPageTable from 'page-table'
import { mapState, mapActions } from 'vuex'
import tableCheckboxMixins from 'page-table/tableCheckbox.js'
import pageTableAction from 'page-table/action.vue'
export default {
  mixins: [tableCheckboxMixins],
  components: { CommonPageTable, pageTableAction },
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      searchData: {},
      slots: [
        {
          name: 'action',
          scopedSlots: {
            customRender: 'action'
          }
        }
      ],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0
      },
      headerLayout: {
        leftSpan: 24,
        rightSpan: 24
      },
      tableData: [
        {
          className: 'active',
          desc: '激活中'
        }
      ]
    }
  },
  computed: {
    ...mapState('index', []),
    columns() {
      return [
        {
          title: '类名称', // 列标题
          dataIndex: 'className', // 数据的key
          key: 'className' // 数据的key
        },
        {
          title: '功能描述', // 列标题
          dataIndex: 'desc', // 数据的key
          key: 'desc' // 数据的key
          // scopedSlots: { customRender: 'desc' }
        },
        {
          title: '操作', // 列标题
          dataIndex: 'action', // 数据的key
          key: 'action', // 数据的key
          scopedSlots: { customRender: 'action' }
        }
      ]
    },
    searchBtn() {
      return [
        {
          label: '查询',
          click: () => {
            this.handleSearch()
          }
        },
        {
          label: '重置',
          bind: {
            type: 'default'
          },
          click: () => {
            this.handleResetSearch()
          }
        }
      ]
    },
    searchList() {
      return [
        {
          label: '类名称',
          type: 'input-search',
          prop: 'className',
          placeholder: '请输入类名称',
          formItemLayout: {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 24 }
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 24 }
            }
          },
          span: 8,
          className: 'form-item-align',
          listeners: {
            // search: this.handleSearch,
            pressEnter: this.handleSearch
          }
        },
        {
          label: '功能描述',
          type: 'input-search',
          prop: 'desc',
          placeholder: '请输入功能描述',
          formItemLayout: {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 24 }
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 24 }
            }
          },
          span: 8,
          className: 'form-item-align',
          listeners: {
            // search: this.handleSearch,
            pressEnter: this.handleSearch
          }
        }
      ]
    }
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions('index', []),
    getData() {
      console.log('getData')
    },
    init() {
      this.getData()
    },
    handlePaginationChange(pagination) {
      this.pagination = pagination
      this.getData()
    },
    async handleEdit(row) {
      console.log('handleEdit')
    },
    handleSearch() {
      this.pagination.current = 1
      this.getData()
    },
    handleClose() {
      this.$emit('close')
    },
    handleOk() {
      this.$emit('ok')
    },
    handleResetSearch() {
      this.pagination.current = 1
      this.searchData = {}
      this.$refs.PageTable.form.setFieldsValue({
        className: '',
        desc: ''
      })
      this.handleSearch()
    }
  }
}
</script>
