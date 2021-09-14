<template>
  <el-container class="container">
    <el-aside :width="isCollapse ? '60px' : '200px'" class="aside">
      <NavMenu />
    </el-aside>
    <el-container>
      <el-header height="60px" class="header"><NavHeader /></el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import setting from '@/store/modules/sys'
import { mapState } from 'pinia'
export default defineComponent({
  components: { NavMenu, NavHeader },
  computed: {
    ...mapState(setting, ['isCollapse'])
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  .header {
    line-height: 60px;
    background-color: #b3c0d1;
  }
  .aside {
    background-color: #d3dce6;
    transition: width 0.5s ease-in-out;
  }
  .main {
    background-color: #e9eef3;
  }
}
</style>
