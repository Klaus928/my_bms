<template>
  <div class="goods">
    <table-page :tableConfig="tableConfig" :searchConfig="searchConfig">
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
import { Edit, Delete } from '@element-plus/icons'
export default defineComponent({
  components: { Edit, Delete },
  name: 'goods',
  setup() {
    return { tableConfig, searchConfig }
  }
})
</script>

<style scoped></style>
