<template>
  <div class="header">
    <el-icon :size="30" style="cursor: pointer" @click="switchCollapse">
      <component :is="isCollapse ? 'Expand' : 'Fold'" />
    </el-icon>
    <UserInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import setting from '@/store/modules/sys'
import UserInfo from './user-info.vue'
import { mapState } from 'pinia'
export default defineComponent({
  components: { Expand, Fold, UserInfo },
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
