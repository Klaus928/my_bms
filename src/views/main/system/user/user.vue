<template>
  <div class="user">
    <table-page :searchConfig="searchConfig" :tableConfig="tableConfig">
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'primary' : ''">
          {{ scope.row.enable ? '启用' : '取消' }}</el-tag
        >
      </template>
    </table-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchConfig from './config/search-config'
import tableConfig from './config/table-config'
export default defineComponent({
  name: 'user',
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
