<template>
  <div class="user">
    <h2>
      <base-form v-bind="searchConfig" :formObject="formObject" />
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import searchConfig from './config/search-config'
export default defineComponent({
  name: 'user',
  setup() {
    const formObject = ref({
      id: '',
      userName: '',
      password: '',
      likeSport: '',
      createDateTime: [],
      createTime: ''
    })
    watch(
      formObject,
      (newVal) => {
        console.log('formObject', newVal)
      },
      { deep: true }
    )
    return { searchConfig, formObject }
  }
})
</script>

<style scoped>
.user {
  background: #fff;
  padding: 10px;
}
</style>
