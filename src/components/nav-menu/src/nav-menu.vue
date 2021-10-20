<template>
  <div>
    <div class="theme-container">
      <span class="title" v-if="!isCollapse">Vue3 + ts</span>
    </div>
    <div class="menu-container">
      <Menu :isCollapse="isCollapse" />
      <!-- <el-menu
        :default-active="activeIndex"
        class="menu"
        :collapse="isCollapse"
        :router="true"
        @open="handleOpen"
      >
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="`${item.id}`">
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subItem in item.children" :key="subItem.id">
                <el-menu-item :index="subItem.url">
                  <span>{{ subItem.name }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.url">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginState } from '@/store'
import setting from '@/store/modules/sys'
import { mapState } from 'pinia'
import { useRoute } from 'vue-router'
import 'element-plus/theme-chalk/display.css'
// import url from '@/assets/logo.png'
import Menu from './menu.vue'
export default defineComponent({
  name: 'NavMenu',
  components: { Menu },
  computed: {
    ...mapState(setting, ['isCollapse', 'activeIndex'])
  },
  setup() {
    // const login = loginState()
    // const settingStore = setting()
    // const userMenus = login.userMenus
    // const route = useRoute()
    // settingStore.changeActiveIndex(route.path)
    // // let activeIndex = ref(route.path)
    // const handleOpen = (key, keyPath) => {
    //   console.log(key, keyPath)
    // }
    return {
      // userMenus,
      // handleOpen
    }
  }
})
</script>

<style lang="less" scoped>
.theme-container {
  white-space: nowrap;
  margin: 20px;
  .title {
    font-weight: 700;
    font-size: 24px;
    margin-left: 10px;
  }
}
.menu-container {
  .menu {
    white-space: nowrap;
    border: none;
    background-color: #d3dce6;
  }
}
</style>
