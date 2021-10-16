<template>
  <base-echart :option="option"></base-echart>
</template>
<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IPieEchartData } from '../types'
const props = withDefaults(
  defineProps<{
    title?: string
    data?: IPieEchartData[]
  }>(),
  {
    title: '',
    data: () => []
  }
)
const option = computed(() => {
  return {
    title: {
      text: props.title,
      // subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
      top: 'bottom'
    },
    series: [
      {
        name: '来自',
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>
<style scoped></style>
