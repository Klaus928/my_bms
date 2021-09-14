<template>
  <div class="userinfo-container">
    <el-dropdown trigger="click" placement="bottom-end">
      <span class="el-dropdown-link">
        {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon>
              <setting />
            </el-icon>
            用户信息</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon>
              <switch-button />
            </el-icon>
            退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { loginState } from '@/store'
import { Avatar, Setting, SwitchButton } from '@element-plus/icons'
export default defineComponent({
  name: 'UserInfo',
  components: { Setting, SwitchButton },
  setup() {
    const login = loginState()
    const userName: any = login.userInfo.name
    console.log('userName', userName)
    return { userName }
  }
})
</script>
<style lang="less">
.userinfo-container {
  .el-dropdown {
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
  }
}
</style>
