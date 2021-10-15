<template>
  <div>
    <a-descriptions>
      <a-descriptions-item label="Product">
        Cloud Database
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Descriptions } from 'ant-design-vue'
export default defineComponent({
  name: 'Description',
  components: {
    'a-descriptions': Descriptions,
    'a-descriptions-item': Descriptions.Item
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
