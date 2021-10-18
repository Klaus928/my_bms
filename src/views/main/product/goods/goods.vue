<template>
  <div class="goods">
    <table-page :tableConfig="tableConfig" :searchConfig="searchConfig">
      <template #handler>
        <handle-edit-btn />
        <handle-delete-btn />
      </template>
      <template #imgColumn="scope">
        <el-image
          :src="scope.row.imgUrl"
          style="width: 60px; height: 60px"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #status="scope">
        <el-tag :type="scope.row.status ? 'primary' : ''" size="mini">
          {{ scope.row.status ? '启用' : '禁用' }}</el-tag
        >
      </template>
      <template #price="scope">
        {{ '￥' + scope.row[scope.prop] }}
      </template>
    </table-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tableConfig, searchConfig } from './config'
/*引入hooks*/
import { usePageModal } from '@/hooks/use-page-modal'
export default defineComponent({
  name: 'goods',
  setup() {
    return { tableConfig, searchConfig }
  }
})
</script>

<style scoped></style>
