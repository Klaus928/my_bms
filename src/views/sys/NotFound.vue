<template>
  <el-empty description="您访问的页面不存在" style="height: 80vh">
    <router-link :to="{ name: 'overview' }">
      <el-button>回到首页</el-button></router-link
    >
    <template #image>
      <el-icon :size="120" color="#f56c6c">
        <circle-close-filled />
      </el-icon>
    </template>
  </el-empty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WarningFilled, CircleCloseFilled } from '@element-plus/icons'
export default defineComponent({
  name: 'NotFound',
  components: { WarningFilled, CircleCloseFilled },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
