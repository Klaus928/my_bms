<template>
  <PageWrapper title="关于">
    <template #headerContent>
      <div class="flex justify-between items-center">
        <span class="flex-1">
          <a :href="GITHUB_URL" target="_blank">{{ name }}</a>
          是一个基于Vue3.0、 Element ui、TypeScript 创建的后台管理系统,
          <el-link :href="GITHUB_URL">Github地址</el-link>
        </span>
      </div>
    </template>
    <Description title="生产环境依赖" :data="schema" />
    <Description title="开发环境依赖" :data="schemaDev" />
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageWrapper, Description } from '@/base-ui/page'
export default defineComponent({
  name: 'overview',
  components: { PageWrapper, Description },
  setup() {
    // eslint-disable-next-line no-undef
    const { dependencies, devDependencies } = $pkg || {}
    const schema: any[] = []
    const schemaDev: any[] = []
    // eslint-disable-next-line no-undef
    Object.keys(dependencies).forEach((key) => {
      schema.push({ field: key, label: dependencies[key] })
    })
    Object.keys(devDependencies).forEach((key) => {
      schemaDev.push({ field: key, label: devDependencies[key] })
    })
    const GITHUB_URL = process.env.VUE_APP_GITHUB_URL
    return { schema, schemaDev, GITHUB_URL }
  }
})
</script>

<style scoped></style>
