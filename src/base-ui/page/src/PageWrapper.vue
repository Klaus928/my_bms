<template>
  <div>
    <div class="header">
      <div class="title" :title="title">{{ title }}</div>
      <div class="header-content">
        <slot name="headerContent"></slot>
      </div>
    </div>
    <div class="overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {},
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

<style lang="less" scoped>
.header {
  margin-bottom: 10px;
}
.title {
  margin-right: 12px;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.header-content {
  margin-top: 20px;
}
</style>
