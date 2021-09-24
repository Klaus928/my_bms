<template>
  <div class="role">
    <table-page
      :searchConfig="searchConfig"
      :tableConfig="tableConfig"
      ref="tablePageRef"
    >
      <template #handler="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">
          <el-icon><edit /></el-icon>编辑
        </el-button>
        <el-button size="mini" @click="handleDelete(scope.row)">
          <el-icon>
            <delete />
          </el-icon>
          删除
        </el-button>
      </template>
      <template #tableHeader>
        <el-button type="primary" @click="handleAdd">新建角色</el-button>
      </template>
    </table-page>
    <page-modal ref="pageModalRef" :dialogConfig="dialogConfig"> </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tableConfig from './config/table-config'
import searchConfig from './config/search-config'
import dialogConfig from './config/modal.config'
/*引入hooks*/
import { usePageModal } from '@/hooks/use-page-modal'
import { useTablePage } from '@/hooks/use-table-page'
import { Delete, Edit } from '@element-plus/icons'
export default defineComponent({
  name: 'role',
  components: { Delete, Edit },
  setup() {
    const [tablePageRef] = useTablePage()
    const addCallback = () => {
      dialogConfig.apiName = 'addRole'
      Object.keys(dialogConfig.formObject).forEach((key) => {
        dialogConfig.formObject[key] = ''
      })
    }
    const editCallback = (item) => {
      dialogConfig.apiName = 'editRole'
      dialogConfig.formObject = item
      dialogConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = true
        }
        return item
      })
      // dialogConfig.visible = true
      // dialogConfig.title = '编辑用户'
    }
    const [pageModalRef, handleAdd, handleEdit] = usePageModal(
      '角色',
      addCallback,
      editCallback
    )
    return {
      tableConfig,
      searchConfig,
      dialogConfig,
      pageModalRef,
      tablePageRef,
      handleAdd,
      handleEdit
    }
  }
})
</script>

<style scoped></style>
