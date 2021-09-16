<template>
  <div class="user">
    <h2>
      <base-form
        v-bind="searchConfig"
        :formObject="formObject"
        @update="handleUpdateData"
        @search="handleSearch"
      />
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import searchConfig from './config/search-config'
export default defineComponent({
  name: 'user',
  setup() {
    let formObject = ref({
      id: '',
      userName: '',
      password: '',
      likeSport: '',
      createDateTime: [],
      createTime: ''
    })
    // 如果想在父组件同步数据就需要添加update 事件
    //因为eslint不允许子组件往父组件流通数据，所以只能使用emit方式
    const handleUpdateData = (obj: any) => {
      formObject.value = obj
    }
    const handleSearch = (data) => {
      console.log('emitO', data)
    }
    return { searchConfig, formObject, handleUpdateData, handleSearch }
  }
})
</script>

<style scoped>
.user {
  background: #fff;
  padding: 10px;
}
</style>
