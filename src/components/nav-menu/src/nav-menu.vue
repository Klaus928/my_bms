<template>
  <div class="theme-container">
    <!-- <img src="~@/assets/images/theme.jpg" width="90" /> -->
    <el-link>
      <el-avatar :src="imgUrl" alt="头像"></el-avatar>
    </el-link>
    <span class="title" v-if="!isCollapse">Vue3+Ts</span>
  </div>
  <div class="menu-container">
    <el-menu
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
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { loginState } from '@/store'
import setting from '@/store/modules/sys'
import { mapState } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  name: 'NavMenu',
  computed: {
    ...mapState(setting, ['isCollapse', 'activeIndex'])
  },
  setup() {
    const imgUrl =
      'https://pica.zhimg.com/80/v2-d91571d2bc4f8a0f217a6790473b4aff_720w.jpg?source=1940ef5c'
    const login = loginState()
    const settingStore = setting()
    const router = useRouter()
    const userMenus = login.userMenus
    const route = useRoute()
    settingStore.changeActiveIndex(route.path)
    // let activeIndex = ref(route.path)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      imgUrl,
      // activeIndex,
      userMenus,
      handleOpen
    }
  }
})
</script>

<style lang="less" scoped>
.theme-container {
  white-space: nowrap;
  margin-top: 20px;
  .title {
    font-weight: 700;
    font-size: 18px;
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
