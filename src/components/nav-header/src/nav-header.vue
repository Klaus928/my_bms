<template>
  <div class="header">
    <div style="display: flex; align-items: center">
      <el-icon
        :size="30"
        style="cursor: pointer; margin-right: 10px"
        @click="switchCollapse"
      >
        <component
          :is="isCollapse ? 'Expand' : 'Fold'"
          class="hidden-sm-and-down"
        />
        <component
          :is="!mobileHeaderVisible ? 'Expand' : 'Fold'"
          class="hidden-md-and-up"
        />
      </el-icon>
      <BreadCrumb :breadCrumbs="breadCrumbs" />
    </div>
    <UserInfo />
  </div>
  <el-drawer v-model="mobileHeaderVisible" title="菜单目录" direction="ltr">
    <span><Menu /></span>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import BreadCrumb, { IBreadCromb } from '@/base-ui/breadCrumb'
import setting from '@/store/modules/sys'
import { useRoute } from 'vue-router'
import UserInfo from './user-info.vue'
import { mapState } from 'pinia'
import { Menu } from '@/components/nav-menu'
export default defineComponent({
  components: { Expand, Fold, UserInfo, BreadCrumb, Menu },
  computed: {
    ...mapState(setting, ['isCollapse', 'activeIndex'])
  },
  setup() {
    const route = useRoute()
    const sys = setting()
    const mobileHeaderVisible = ref(false)
    let breadCrumbs = computed(() => {
      const temp: IBreadCromb[] = []
      route.matched.forEach((item) => {
        temp.push({ name: item.meta.title as string, path: item.path })
      })
      return temp
    })
    const switchCollapse = () => {
      const width = document.documentElement.clientWidth
      if (width > 768) {
        sys.changeIsCollapse()
      } else {
        // 打开el-draw
        mobileHeaderVisible.value = !mobileHeaderVisible.value
      }
      console.log(mobileHeaderVisible.value)
    }
    return { switchCollapse, breadCrumbs, mobileHeaderVisible }
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
