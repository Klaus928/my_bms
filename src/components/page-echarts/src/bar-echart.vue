<template>
  <base-echart :option="option"></base-echart>
</template>
<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = withDefaults(
  defineProps<{
    values?: string[]
    labels?: string[]
  }>(),
  {
    values: () => [],
    labels: () => []
  }
)
const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    title: {
      text: '支持鼠标滚动缩放'
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        data: props.values,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
})
</script>
