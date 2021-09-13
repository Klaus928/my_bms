<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="form"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item prop="phone" label="手机号：">
      <el-input v-model.number="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item prop="verifyCode" label="验证码：">
      <el-input
        v-model.number="ruleForm.password"
        type="password"
        autocomplete="off"
      ></el-input>
      <el-button>获取验证码</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneInfo } from '@/types/user'
export default defineComponent({
  name: 'LoginByPhone',
  setup() {
    const ruleForm = reactive({
      phone: undefined,
      verifyCode: undefined
    })
    const rules = reactive({
      phone: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur',
          pattern: /^[0-9]{11}/
        }
      ],
      verifyCode: [
        {
          required: true,
          message: '请输入正确的验证码',
          trigger: 'blur',
          pattern: /^[0-9]{6}/
        }
      ]
    })
    return { ruleForm, rules }
  }
})
</script>
<style scoped></style>
