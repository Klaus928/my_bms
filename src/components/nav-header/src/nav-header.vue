<template>
  <div>
    <el-icon style="cursor: pointer" @click="switchCollapse">
      <component :is="isCollapse ? 'DArrowRight' : 'DArrowLeft'" />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons'
import setting from '@/store/modules/sys'
export default defineComponent({
  components: { DArrowLeft, DArrowRight },
  setup() {
    const sys = setting()
    let isCollapse = ref(sys.isCollapse)
    const switchCollapse = () => {
      isCollapse.value = !isCollapse.value
      sys.changeIsCollapse(isCollapse.value)
    }
    return { isCollapse, switchCollapse }
  }
})
</script>

<style scoped></style>
