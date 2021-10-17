<template>
  <div class="userinfo-container">
    <notification />
    <el-dropdown trigger="click" placement="bottom-end">
      <span class="el-dropdown-link">
        <el-avatar
          size="mini"
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        {{ userName }}
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
              <info-filled />
            </el-icon>
            修改密码</el-dropdown-item
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
import { Setting, SwitchButton, InfoFilled, Bell } from '@element-plus/icons'
import localCache from '@/utils/cache'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import notification from './notification.vue'
export default defineComponent({
  name: 'UserInfo',
  components: { Setting, SwitchButton, InfoFilled, Bell, notification },
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
  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
  .badge {
    margin-right: 10px;
    position: relative;
    top: -5px;
    cursor: pointer;
  }
}
</style>
