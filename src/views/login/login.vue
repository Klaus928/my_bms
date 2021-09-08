<template>
  <div>
    <el-button @click="handleClick">{{ $store.state.count }}</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  created() {
    // this.$http.request({
    //   method: 'get',
    //   url: '/home/multidata'
    // })
  },
  setup(props, context) {
    const x = getCurrentInstance()
    const handleClick = () => {
      if (x?.proxy) {
        x.proxy.$http.request({
          method: 'get',
          url: '/home/multidata'
        })
      }
    }
    return { handleClick }
  }
})
</script>

<style scoped></style>
