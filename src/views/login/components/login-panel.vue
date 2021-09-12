<template>
  <div class="login-container">
    <div class="title">后台管理系统</div>
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane label="手机登陆">
        <template #label>
          <span>
            <el-icon> <avatar /> </el-icon> 手机登陆</span
          >
        </template>
        <LoginByAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="账号登陆">
        <template #label>
          <span>
            <el-icon> <iphone /> </el-icon> 账号登陆</span
          >
        </template>
        <LoginByPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isRememberPwd">记住密码</el-checkbox
      ><el-link type="primary">忘记密码</el-link>
    </div>
    <div>
      <el-button type="primary" style="width: 100%" @click="handleLogin"
        >登录</el-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons'
import LoginByAccount from './login-account.vue'
import LoginByPhone from './login-phone.vue'
export default defineComponent({
  name: 'LoginPanel',
  components: { Avatar, Iphone, LoginByAccount, LoginByPhone },
  setup() {
    let isRememberPwd = ref(false)
    const accountRef = ref<InstanceType<typeof LoginByAccount>>()
    const handleLogin = () => {
      console.log(accountRef.value?.ruleForm)
      accountRef.value?.loginAction(isRememberPwd.value)
    }
    return { handleLogin, isRememberPwd, accountRef }
  }
})
</script>
<style scoped>
.title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
.account-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
