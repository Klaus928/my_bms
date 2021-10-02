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
import requestStoreList from '@/store/modules/requestStore'
import { Delete, Edit } from '@element-plus/icons'
import { message, msgBox } from '@/utils/messagebox'
/*引入hooks*/
import { usePageModal } from '@/hooks/use-page-modal'
import { useTablePage } from '@/hooks/use-table-page'
export default defineComponent({
  name: 'user',
  components: { Delete, Edit },
  setup() {
    const [tablePageRef, refreshTableData] = useTablePage()
    const sysStore = requestStoreList['main/system/user']()
    const handleDelete = async (row) => {
      msgBox(`确认删除用户： ${row.realname}?`)
        .then(async () => {
          await sysStore.deleteUser(row.id)
          message.success('删除成功！')
          // refreshTableData()
        })
        .catch((err) => err)
    }
    const addCallback = () => {
      dialogConfig.apiName = 'addUser'
      Object.keys(dialogConfig.formObject).forEach((key) => {
        dialogConfig.formObject[key] = ''
      })
      dialogConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = false
        }
        return item
      })
      // dialogConfig.visible = true
      // dialogConfig.title = '新增用户'
    }
    const editCallback = (item) => {
      dialogConfig.apiName = 'editUser'
      dialogConfig.formObject = JSON.parse(JSON.stringify(item))
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
      '用户',
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
