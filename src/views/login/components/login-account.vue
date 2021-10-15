<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="formRef"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item prop="name" label="用户名：">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item prop="password" label="密码：">
      <el-input
        v-model="ruleForm.password"
        show-password
        autocomplete="off"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { userInfo } from '@/types/user'
import localCache from '@/utils/cache'
import { loginState } from '@/store'
export default defineComponent({
  name: 'LoginByAccount',
  setup() {
    const loginStore = loginState()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const ruleForm = reactive({
      name: localCache.getCache('name'),
      password: localCache.getCache('password')
    })
    const rules = reactive({
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [
        {
          required: true,
          message: '6个字符，支持数字、大小写字母',
          trigger: 'blur',
          pattern: /^[0-9a-zA-Z]{6}/
        }
      ]
    })
    const loginAction = (isRememberPwd: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1、是否记住密码
          if (isRememberPwd) {
            localCache.setCache('name', ruleForm.name)
            localCache.setCache('password', ruleForm.password)
          }
          // 2、进行登录
          loginStore.loginByAccount(ruleForm)
        }
      })
    }
    return { ruleForm, rules, loginAction, formRef }
  }
})
</script>
<style scoped></style>
