<template>
  <div class="user">
    <table-page
      :searchConfig="searchConfig"
      :tableConfig="tableConfig"
      ref="tablePageRef"
    >
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'primary' : ''" size="mini">
          {{ scope.row.enable ? '启用' : '禁用' }}</el-tag
        >
      </template>
      <template #handler="scope">
        <handle-edit-btn @click="handleEdit(scope.row)"></handle-edit-btn>
        <handle-delete-btn @click="handleDelete(scope.row, 'realname')" />
      </template>
      <template #tableHeader>
        <el-button type="primary" @click="handleAdd">新建用户</el-button>
      </template>
    </table-page>
    <page-modal ref="pageModalRef" :dialogConfig="dialogConfig"> </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/*引入config*/
import searchConfig from './config/search-config'
import tableConfig from './config/table-config'
import dialogConfig from './config/model.config'
/*引入hooks*/
import { usePageModal } from '@/hooks/use-page-modal'
import { useTablePage } from '@/hooks/use-table-page'
export default defineComponent({
  name: 'user',
  components: {},
  setup() {
    const { tablePageRef, handleDelete } = useTablePage('用户', 'user')
    const addCallback = () => {
      dialogConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = false
        }
        return item
      })
    }
    const editCallback = () => {
      dialogConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = true
        }
        return item
      })
    }
    const [pageModalRef, handleAdd, handleEdit] = usePageModal(
      '用户',
      'user',
      dialogConfig,
      addCallback,
      editCallback
    )
    return {
      tablePageRef,
      pageModalRef,
      searchConfig,
      tableConfig,
      dialogConfig,
      handleAdd,
      handleEdit,
      handleDelete
    }
  }
})
</script>

<style scoped>
.user {
  /* background: #fff; */
  padding: 10px;
}
</style>
