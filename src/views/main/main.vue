<template>
  <el-container class="container">
    <el-aside :width="isCollapse ? '60px' : '200px'" class="aside">
      <NavMenu />
    </el-aside>
    <el-container>
      <el-header height="60px" class="header"><NavHeader /></el-header>
      <el-main class="main">
        <!-- 测试区域 -->
        <!-- <base-select
          :selectConfig="selectConfig"
          @change="handleChange"
        ></base-select> -->
        <transition>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import BaseSelect from '@/base-ui/select'
import { defineComponent } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import setting from '@/store/modules/sys'
import { mapState } from 'pinia'
export default defineComponent({
  components: { NavMenu, NavHeader, BaseSelect },
  computed: {
    ...mapState(setting, ['isCollapse'])
  },
  setup() {
    const selectConfig = {
      apiModule: 'main/system',
      apiName: 'getUserList',
      value: '',
      defaultProps: {
        value: 'id',
        label: 'name'
      },
      options: [{ label: 'heelo', value: 'sss' }]
    }
    const handleChange = (value) => {
      console.log('select', selectConfig.value)
    }
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
