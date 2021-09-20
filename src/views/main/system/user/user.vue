<template>
  <div class="user">
    <table-page
      :searchConfig="searchConfig"
      :tableConfig="tableConfig"
      ref="tablePage"
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
        <el-button type="primary" @click="hanldeAdd">新建用户</el-button>
      </template>
    </table-page>
    <page-modal
      ref="baseDialog"
      v-bind="dialogConfig"
      :dialogConfig="dialogConfig"
      @submit="handleSubmit"
    >
      <template #content>
        <base-form v-bind="formConfig"></base-form>
      </template>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import searchConfig from './config/search-config'
import tableConfig from './config/table-config'
import { Delete, Edit } from '@element-plus/icons'
import requestStoreList from '@/store/modules/requestStore'
import { message, msgBox } from '@/utils/messagebox'
import TablePage from '@/components/table-page'
import formConfig from './config/model.config'
import PageModal from '@/components/page-modal'
export default defineComponent({
  name: 'user',
  components: { Delete, Edit },
  setup() {
    const dialogConfig = reactive({
      title: '新增用户',
      visible: false
    })
    const baseDialog = ref<InstanceType<typeof PageModal>>()
    const dialogOption = ref({
      visible: true,
      title: '新建用户'
    })
    const tablePage = ref<InstanceType<typeof TablePage>>()
    const sysStore = requestStoreList['main/system']()
    const handleDelete = async (row) => {
      msgBox(`确认删除用户： ${row.realname}?`)
        .then(() => {
          sysStore.deleteUser(row.id)
          message.success('删除成功！')
          tablePage.value?.handleSearch()
        })
        .catch((err) => err)
    }
    const hanldeAdd = () => {
      Object.keys(formConfig.formObject).forEach((key) => {
        formConfig.formObject[key] = ''
      })
      formConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = false
        }
        return item
      })
      dialogConfig.visible = true
      dialogConfig.title = '新增用户'
    }
    const handleEdit = (item) => {
      formConfig.formObject = item
      formConfig.formItems?.forEach((item) => {
        if (item.value === 'password') {
          item.hidden = true
        }
        return item
      })
      dialogConfig.visible = true
      dialogConfig.title = '编辑用户'
    }
    const handleSubmit = () => {
      console.log('formConfig', formConfig)
    }
    return {
      tablePage,
      searchConfig,
      dialogOption,
      tableConfig,
      formConfig,
      dialogConfig,
      baseDialog,
      hanldeAdd,
      handleEdit,
      handleDelete,
      handleSubmit
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
