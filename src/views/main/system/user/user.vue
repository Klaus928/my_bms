<template>
  <div class="user">
    <table-page :searchConfig="searchConfig" :tableConfig="tableConfig">
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'primary' : ''" size="mini">
          {{ scope.row.enable ? '启用' : '禁用' }}</el-tag
        >
      </template>
      <template #handler>
        <el-button size="mini">
          <el-icon><edit /></el-icon>编辑
        </el-button>
        <el-button size="mini">
          <el-icon>
            <delete />
          </el-icon>
          删除
        </el-button>
      </template>
      <template #tableHeader>
        <el-button type="primary">更新用户</el-button>
      </template>
    </table-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchConfig from './config/search-config'
import tableConfig from './config/table-config'
import { Delete, Edit } from '@element-plus/icons'
export default defineComponent({
  name: 'user',
  components: { Delete, Edit },
  setup() {
    return { searchConfig, tableConfig }
  }
})
</script>

<style scoped>
.user {
  /* background: #fff; */
  padding: 10px;
}
</style>
