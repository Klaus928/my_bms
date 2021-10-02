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
    <page-modal ref="pageModalRef" :dialogConfig="dialogConfig">
      <template #bottomContent>
        <el-tree
          ref="tree"
          :data="menuData"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
        />
      </template>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
import tableConfig from './config/table-config'
import searchConfig from './config/search-config'
import dialogConfig from './config/modal.config'
/*引入hooks*/
import { usePageModal } from '@/hooks/use-page-modal'
import { useTablePage } from '@/hooks/use-table-page'
import { Delete, Edit } from '@element-plus/icons'
import requestStore from '@/store/modules/requestStore'
export default defineComponent({
  name: 'role',
  components: { Delete, Edit },
  setup() {
    const store = requestStore['main/system/role']()
    const [tablePageRef, refreshTableData] = useTablePage()
    provide('refreshTableData', refreshTableData)
    const defaultProps = {
      children: 'children',
      label: 'label'
    }
    let menuData = reactive([])
    const getMenuList = () => {
      store.getMenuList().then((res) => {
        menuData = res ?? []
      })
    }
    getMenuList()
    const addCallback = () => {
      dialogConfig.apiName = 'addRole'
      Object.keys(dialogConfig.formObject).forEach((key) => {
        dialogConfig.formObject[key] = ''
      })
    }
    // 回显其他数据
    const editCallback = (item) => {
      dialogConfig.apiName = 'editRole'
      Object.keys(dialogConfig.formObject).forEach((key) => {
        dialogConfig.formObject[key] = item[key]
      })
      dialogConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = true
        }
        return item
      })
    }
    const [pageModalRef, handleAdd, handleEdit] = usePageModal(
      '角色',
      addCallback,
      editCallback
    )
    return {
      defaultProps,
      menuData,
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
