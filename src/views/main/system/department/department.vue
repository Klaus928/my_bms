<template>
  <div class="role">
    <table-page
      :searchConfig="searchConfig"
      :tableConfig="tableConfig"
      ref="tablePageRef"
    >
      <template #handler="scope">
        <handle-edit-btn @click="handleEdit(scope.row)"></handle-edit-btn>
        <handle-delete-btn @click="handleDelete(scope.row, 'name')" />
      </template>
      <template #tableHeader>
        <el-button type="primary" @click="handleAdd">新建部门</el-button>
      </template>
    </table-page>
    <page-modal ref="pageModalRef" :dialogConfig="dialogConfig"> </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import tableConfig from './config/table-config'
import searchConfig from './config/search-config'
import dialogConfig from './config/modal.config'
/*引入hooks*/
import { usePageModal } from '@/hooks/use-page-modal'
import { useTablePage } from '@/hooks/use-table-page'
import { Delete, Edit } from '@element-plus/icons'
export default defineComponent({
  name: 'department',
  components: { Delete, Edit },
  setup() {
    const { tablePageRef, handleDelete } = useTablePage('部门', 'department')
    let menuData = reactive([])
    // 回显其他数据
    const [pageModalRef, handleAdd, handleEdit] = usePageModal(
      '部门',
      'department',
      dialogConfig
    )
    return {
      menuData,
      tableConfig,
      searchConfig,
      dialogConfig,
      pageModalRef,
      tablePageRef,
      handleAdd,
      handleEdit,
      handleDelete
    }
  }
})
</script>

<style scoped></style>
