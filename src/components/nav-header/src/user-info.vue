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
          <el-dropdown-item @click="handleLogout"
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
import { Setting, SwitchButton } from '@element-plus/icons'
import localCache from '@/utils/cache'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'UserInfo',
  components: { Setting, SwitchButton },
  setup() {
    const router = useRouter()
    const login = loginState()
    const userName: any = login.userInfo.name
    const handleLogout = () => {
      ElMessageBox.confirm('确认退出', {
        cancelButtonText: '取消',
        confirmButtonText: '确认'
      }).then(() => {
        localCache.deleteCache('token')
        router.push({ name: 'login' })
      })
    }
    return { userName, handleLogout }
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
