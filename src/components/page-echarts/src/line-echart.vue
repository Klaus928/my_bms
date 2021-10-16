<template>
  <BaseEchart :option="option" />
</template>
<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echart'
;('RoseEchart')
const props = withDefaults(
  defineProps<{
    labels?: string[]
    values?: string[]
  }>(),
  {
    labels: () => [],
    values: () => []
  }
)
const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    series: [
      {
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>
