<template>
  <transition name="slide-fade">
    <div class="description">
      <div class="header">
        <span>{{ title }}</span>
      </div>
      <el-descriptions class="margin-top" :column="3" :size="size" border>
        <template v-for="item in data" :key="item.field">
          <el-descriptions-item :label="item.field">
            <el-tag size="small">{{ item.label }} </el-tag>
          </el-descriptions-item>
        </template>
      </el-descriptions>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Description',
  components: {},
  props: {
    title: { type: String, default: '' },
    data: {
      type: Array,
      default: () => []
    },
    size: { type: String, default: 'small' }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.header {
  color: #303133;
}
.description {
  border: 1px solid var(--el-border-color-base);
  box-shadow: var(--el-box-shadow-base);
  padding: 10px;
  margin-bottom: 10px;
}
.demo-shadow-text {
  line-height: 50px;
  color: var(--el-text-color-regular);
  font-size: 14px;
}
.header {
  border-bottom: 1px solid var(--el-border-color-base);
  padding-bottom: 10px;
}
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
