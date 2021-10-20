<template>
  <el-button
    @click="handleOpenDialog"
    circle
    size="small"
    style="border: none; background: transparent"
  >
    <el-icon :size="18" class="setting-icon">
      <setting />
    </el-icon>
  </el-button>
  <el-drawer v-model="drawer" title="项目配置" direction="rtl">
    <div class="flex">
      <span>左侧菜单</span>
      <el-switch
        v-model="isCollapse"
        active-color="#0084f4"
        inactive-color="#bfbfbf"
        @change="handleChange"
      />
    </div>
  </el-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Setting } from '@element-plus/icons'
import sysStore from '@/store/modules/sys'
export default defineComponent({
  name: 'SysSetting',
  components: { Setting },
  setup() {
    const store = sysStore()
    const isCollapse = ref(!store.isCollapse)
    const drawer = ref(false)
    const handleOpenDialog = () => {
      drawer.value = true
    }
    const handleChange = () => {
      store.changeCollapse(!isCollapse.value)
    }
    return { drawer, isCollapse, handleOpenDialog, handleChange }
  }
})
</script>
<style scoped>
.setting-icon {
  margin-left: 10px;
  position: relative;
  top: -4px;
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
