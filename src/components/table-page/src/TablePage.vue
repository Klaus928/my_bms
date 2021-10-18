<template>
  <div>
    <div class="header">
      <slot name="pageHeader"></slot>
    </div>
    <div class="search-form" v-if="searchConfig.formItems">
      <base-form
        v-bind="searchConfig"
        :formObject="formObject"
        @update="handleUpdateData"
        ref="baseFormRef"
      >
      </base-form>
      <slot name="footer">
        <div class="footer" v-if="searchConfig.formItems">
          <el-button @click="handleSearch" type="primary">查询</el-button>
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
        ref="pageTableRef"
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
import BaseTable from '@/base-ui/table'
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
    const pageTableRef = ref<InstanceType<typeof BaseTable>>()
    const baseFormRef = ref<InstanceType<typeof BaseForm>>()
    let tableData = ref([])
    let totalCount = ref(0)
    let formObject = reactive(
      Object.assign(props.searchConfig?.formObject || {}, {
        offset: 1,
        size: 10
      })
    )
    let loadingInstance
    // 更新formObject 对象
    const handleUpdateData = (obj: any) => {
      Object.keys(obj).forEach((item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (formObject.hasOwnProperty(item)) {
          if (formObject[item] != obj[item]) {
            formObject[item] = obj[item]
          }
        }
      })
    }
    // 搜索
    const handleSearch = (offset = 1, size = 10) => {
      size = pageTableRef.value?.pageSize || 10

      offset = ((pageTableRef.value?.currentPage || 1) - 1) * size
      console.log('formObject', formObject)
      if (apiModule.value) {
        loading.value = true
        loadingInstance = ElLoading.service(loadingOptions)
        const request = (requestStoreList as StoreDefinition[])[
          apiModule.value
        ]()
        // const searchInfo = JSON.parse(JSON.stringify(formObject.value))
        request[apiName.value]({ ...formObject, offset, size }).then(
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
      baseFormRef.value?.resetField()
      handleSearch()
    }
    //分页条数变化
    const sizeChange = () => {
      // const index = pageTableRef.value?.currentPage
      // handleSearch(index, size)
      handleSearch()
    }
    // 分页页码变化
    const offsetChange = () => {
      // const size = pageTableRef.value?.pageSize
      // handleSearch(offset, size)
      handleSearch()
    }
    // 初始化
    onMounted(() => {
      handleSearch()
    })
    return {
      baseFormRef,
      tableData,
      formObject,
      totalCount,
      pageTableRef,
      handleUpdateData,
      handleSearch,
      resetForm,
      sizeChange,
      offsetChange
    }
  },
  computed: {
    getColumnSlots() {
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
