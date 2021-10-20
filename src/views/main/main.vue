<template>
  <el-container class="container">
    <el-aside
      :width="isCollapse ? '60px' : '200px'"
      class="aside hidden-sm-and-down"
    >
      <NavMenu class="hidden-xs-only hidden-sm-only" />
    </el-aside>
    <el-container>
      <el-header height="60px" class="header"><NavHeader /></el-header>
      <el-main class="main">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeInDown"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import BaseSelect from '@/base-ui/select'
import { defineComponent, onMounted } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import setting from '@/store/modules/sys'
import { mapState } from 'pinia'
import settingStore from '@/store/modules/sys'

export default defineComponent({
  components: { NavMenu, NavHeader, BaseSelect },
  computed: {
    ...mapState(setting, ['isCollapse'])
  },
  setup() {
    const selectConfig = {
      apiModule: 'main/system/user',
      apiName: 'getUserList',
      value: '',
      defaultProps: {
        value: 'id',
        label: 'name'
      },
      options: [{ label: 'heelo', value: 'sss' }]
    }
    const handleChange = () => {
      console.log('select', selectConfig.value)
    }
    const handleWidthChange = () => {
      debugger
      const windowWidth = document.documentElement.clientWidth
      store.changeScreenWidth(windowWidth)
      if (windowWidth < 1000) {
        store.changeCollapse(true)
      } else {
        store.changeCollapse(false)
      }
    }
    const store = settingStore()
    // 控制侧边栏显示与隐藏
    onMounted(() => {
      handleWidthChange()
      addEventListener('resize', () => {
        handleWidthChange()
      })
    })
    return { selectConfig, handleChange }
  }
})
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  .header {
    line-height: 60px;
    background-color: #b3c0d1;
    overflow: hidden;
  }
  .aside {
    background-color: #d3dce6;
    transition: width 0.5s ease-in-out;
  }
  .main {
    // background-color: #e9eef3;
  }
}
</style>
