<template>
  <div class="header">
    <div style="display: flex; align-items: center">
      <el-icon
        :size="30"
        style="cursor: pointer; margin-right: 10px"
        @click="switchCollapse"
      >
        <component :is="isCollapse ? 'Expand' : 'Fold'" />
      </el-icon>
      <BreadCrumb :breadCrumbs="breadCrumbs" />
    </div>
    <UserInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import BreadCrumb, { IBreadCromb } from '@/base-ui/breadCrumb'
import setting from '@/store/modules/sys'
import { useRoute } from 'vue-router'
import UserInfo from './user-info.vue'
import { mapState } from 'pinia'
export default defineComponent({
  components: { Expand, Fold, UserInfo, BreadCrumb },
  computed: {
    ...mapState(setting, ['isCollapse', 'activeIndex'])
  },
  setup() {
    const route = useRoute()
    const sys = setting()
    let breadCrumbs = computed(() => {
      const temp: IBreadCromb[] = []
      route.matched.forEach((item) => {
        temp.push({ name: item.meta.title as string, path: item.path })
      })
      return temp
    })
    const switchCollapse = () => {
      sys.changeIsCollapse()
    }
    return { switchCollapse, breadCrumbs }
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
