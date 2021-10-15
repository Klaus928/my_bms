<template>
  <div>
    <PageHeader :ghost="ghost" :title="title" ref="headerRef"> </PageHeader>
    <slot name="headerContent"></slot>
    <div class="overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { PageHeader } from 'ant-design-vue'

export default defineComponent({
  components: { PageHeader },
  props: {
    ghost: { type: Boolean, default: true },
    title: { type: String, default: '' },
    content: { type: String, default: '' }
  },
  setup() {
    // eslint-disable-next-line no-undef
    const headerRef = ref<ComponentRef>(null)
    return { headerRef }
  }
})
</script>

<style scoped></style>
