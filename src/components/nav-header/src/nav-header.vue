<template>
  <div>
    <el-icon
      :size="30"
      style="cursor: pointer; line-height: 68px"
      @click="switchCollapse"
    >
      <component :is="isCollapse ? 'Expand' : 'Fold'" />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import setting from '@/store/modules/sys'
import { mapState } from 'pinia'
export default defineComponent({
  components: { Expand, Fold },
  computed: {
    ...mapState(setting, ['isCollapse'])
  },
  setup() {
    const sys = setting()
    const switchCollapse = () => {
      sys.changeIsCollapse()
    }
    return { switchCollapse }
  }
})
</script>

<style scoped></style>
