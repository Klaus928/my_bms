<template>
  <PageWrapper title="关于">
    <template #headerContent>
      <div class="flex justify-between items-center">
        <span class="flex-1">
          <a :href="GITHUB_URL" target="_blank">{{ name }}</a>
          是一个基于Vue3.0、 Element ui、TypeScript 创建的后台管理系统
        </span>
      </div>
    </template>
    <Description />
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
    const { dependencies, devDependencies, name, version } = $pkg || {}
    const schema: any[] = []
    // eslint-disable-next-line no-undef
    console.log($pkg)
    Object.keys(dependencies).forEach((key) => {
      schema.push({ field: key, label: key })
    })
    console.log(schema)
    return { schema }
  }
})
</script>

<style scoped></style>
