<template>
  <BaseEchart :option="option" />
</template>
<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echart'
;('RoseEchart')
const props = withDefaults(
  defineProps<{
    roseData?: any[]
  }>(),
  {
    roseData: () => []
  }
)
const option = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        label: {
          show: false
        },
        data: props.roseData
      }
    ]
  }
})
</script>
