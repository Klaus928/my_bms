<template>
  <div class="login-panel">
    <LoginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { loginState } from '@/store'
import LoginPanel from './components/login-panel.vue'
export default defineComponent({
  components: { LoginPanel },
  setup(props, context) {
    const loginStore = loginState()
    const handleClick = () => {
      // console.log(loginStore)
    }
    return { handleClick, loginStore }
  }
})
</script>

<style scoped>
.login-panel {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
