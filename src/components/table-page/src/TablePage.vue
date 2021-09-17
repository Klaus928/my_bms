<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <base-form
      v-bind="searchConfig"
      :formObject="formObject"
      @update="handleUpdateData"
      @search="handleSearch"
      ref="baseForm"
    >
    </base-form>
    <slot name="footer">
      <div class="footer">
        <el-button @click="handleSearch" type="primary">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </div>
    </slot>
    <div class="table">
      <base-table v-bind="tableConfig" :tableData="tableData"> </base-table>
    </div>
    <div class="pagnation">
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:currentPage="pageIndex"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      >
      </el-pagination> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, toRefs, reactive } from 'vue'
import BaseForm from '@/base-ui/form'
import { ISearchConfig } from '@/types/logic'
import requestStoreList from '@/store/modules/requestStore'
import { StoreDefinition } from 'pinia'
export default defineComponent({
  components: { BaseForm },
  name: 'TablePage',
  props: {
    searchConfig: {
      type: Object as PropType<ISearchConfig>,
      required: true
    },
    tableConfig: {
      type: Object,
      required: true
    }
  },
  setup(props: any) {
    const { apiName, apiModule } = toRefs(props.searchConfig)
    let tableData = ref([])
    const baseForm = ref()
    let formObject = ref({ ...props.searchConfig.formObject })
    const handleUpdateData = (obj: any) => {
      Object.keys(obj).forEach((item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (formObject.value?.hasOwnProperty(item)) {
          if (formObject.value[item] != obj[item]) {
            formObject.value[item] = obj[item]
          }
        }
      })
    }
    const resetForm = () => {
      baseForm.value?.resetField()
    }
    const handleSearch = () => {
      if (apiModule.value) {
        const request = (requestStoreList as StoreDefinition[])[
          apiModule.value
        ]()
        request[apiName.value]().then(
          (res) => {
            tableData.value = res.list
          },
          (err) => {
            console.log(err)
          }
        )
      }
    }

    handleSearch()
    return { handleUpdateData, handleSearch, resetForm, baseForm, tableData }
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
}
</style>
