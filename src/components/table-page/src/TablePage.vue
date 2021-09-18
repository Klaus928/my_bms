<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="search-form" v-if="searchConfig">
      <base-form
        v-bind="searchConfig"
        :formObject="formObject"
        @update="handleUpdateData"
        ref="baseForm"
      >
      </base-form>
      <slot name="footer">
        <div class="footer">
          <el-button @click="handleSearch(1, 10)" type="primary"
            >查询</el-button
          >
          <el-button @click="resetForm">重置</el-button>
        </div>
      </slot>
    </div>
    <div class="table main-table">
      <base-table
        v-bind="tableConfig"
        :tableData="tableData"
        :totalCount="totalCount"
        @sizeChange="sizeChange"
        @offsetChange="offsetChange"
        ref="pageTable"
        v-loading="loading"
      >
        <template #tableHeader>
          <slot name="tableHeader"></slot>
        </template>
        <template
          v-slot:[item.slotName]="scope"
          v-for="item in getColumnSlots"
          :key="item"
        >
          <slot
            :name="item.slotName"
            :row="scope.row"
            :prop="scope.prop"
          ></slot>
        </template>
        <template #tableFooter>
          <slot name="tableFooter"></slot>
        </template>
      </base-table>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  PropType,
  toRefs,
  reactive,
  onMounted
} from 'vue'
import BaseForm from '@/base-ui/form'
import { ISearchConfig } from '@/types/logic'
import requestStoreList from '@/store/modules/requestStore'
import { StoreDefinition } from 'pinia'
import { ITableConfig } from '@/types/logic'
import { ElLoading } from 'element-plus'

const loadingOptions = {
  target: '.main-table',
  lock: true,
  text: '正在加载...'
}
export default defineComponent({
  components: { BaseForm },
  name: 'TablePage',
  props: {
    searchConfig: {
      type: Object as PropType<ISearchConfig>,
      required: true
    },
    tableConfig: {
      type: Object as PropType<ITableConfig>,
      required: true
    }
  },
  setup(props: any) {
    const { apiName, apiModule } = toRefs(props.searchConfig)
    let loading = ref(false)
    const pageTable = ref()
    const baseForm = ref()
    let tableData = ref([])
    let totalCount = ref(0)
    let formObject = ref({
      offset: 1,
      size: 10,
      ...(props.searchConfig?.formObject || {})
    })
    let loadingInstance
    // 更新formObject 对象
    const handleUpdateData = (obj: any) => {
      Object.keys(obj).forEach((item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (formObject.value.hasOwnProperty(item)) {
          if (formObject.value[item] != obj[item]) {
            formObject.value[item] = obj[item]
          }
        }
      })
    }
    // 搜索
    const handleSearch = (offset = 1, size = 10) => {
      if (apiModule.value) {
        loading.value = true
        loadingInstance = ElLoading.service(loadingOptions)
        const request = (requestStoreList as StoreDefinition[])[
          apiModule.value
        ]()
        // const searchInfo = JSON.parse(JSON.stringify(formObject.value))
        request[apiName.value]({ ...formObject.value, offset, size }).then(
          (res) => {
            loadingInstance.close()
            // loading.value = false
            tableData.value = res.list
            totalCount.value = res.totalCount
          },
          (err) => {
            // loading.value = false
            console.log(err)
          }
        )
      }
    }
    // 重置搜索表单
    const resetForm = () => {
      baseForm.value?.resetField()
      handleSearch()
    }
    //分页条数变化
    const sizeChange = (size) => {
      const index = pageTable.value.currentPage
      handleSearch(index, size)
    }
    // 分页页码变化
    const offsetChange = (offset) => {
      const size = pageTable.value.pageSize
      handleSearch(offset, size)
    }
    // 初始化
    onMounted(() => {
      handleSearch()
    })
    return {
      baseForm,
      tableData,
      formObject,
      totalCount,
      pageTable,
      handleUpdateData,
      handleSearch,
      resetForm,
      sizeChange,
      offsetChange
    }
  },
  computed: {
    getColumnSlots() {
      console.log(this.tableConfig.headerItems.filter((item) => item.slotName))
      const slots = this.tableConfig.headerItems.filter((item) => item.slotName)
      return slots
    }
  }
})
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: flex-end;
}
.table {
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
}
.search-form {
  background: #fff;
  padding: 10px;
}
</style>
