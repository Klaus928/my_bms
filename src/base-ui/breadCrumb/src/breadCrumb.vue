<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadCrumbs" :key="item.path">
      <el-breadcrumb-item :to="{ path: item.path }">
        {{ item.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadCromb } from '../types'
export default defineComponent({
  name: 'BreadCrumb',
  props: {
    breadCrumbs: {
      type: Array as PropType<IBreadCromb[]>,
      default() {
        return []
      }
    }
  },
  setup() {
    return {}
  }
})
</script>

<style>
.el-breadcrumb__separator {
  color: #000;
}
</style>
