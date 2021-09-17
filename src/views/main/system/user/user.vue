<template>
  <div class="user">
    <table-page :searchConfig="searchConfig" :tableConfig="tableConfig">
      <template #status="scope">
        {{ scope.row.enable }}
      </template>
    </table-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchConfig from './config/search-config'
import tableConfig from './config/table-config'
export default defineComponent({
  name: 'user',
  setup() {
    return { searchConfig, tableConfig }
  }
})
</script>

<style scoped>
.user {
  /* background: #fff; */
  padding: 10px;
}
</style>
