<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex"
      class="menu"
      :collapse="isCollapse"
      :router="true"
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
import { defineComponent } from 'vue'
import { loginState } from '@/store'
import setting from '@/store/modules/sys'
import { useRoute } from 'vue-router'
import { mapState } from 'pinia'
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(setting, ['isCollapse', 'activeIndex'])
  },
  setup() {
    const login = loginState()
    const settingStore = setting()
    const userMenus = login.userMenus
    const route = useRoute()
    settingStore.changeActiveIndex(route.path)
    return { userMenus }
  }
})
</script>

<style lang="less" scoped>
.menu-container {
  .menu {
    white-space: nowrap;
    border: none;
    background-color: #d3dce6;
  }
}
</style>
