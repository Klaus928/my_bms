<template>
  <div ref="echartDiv" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
'BaseEchart'
import { ref, defineProps, withDefaults, onMounted, watchEffect } from 'vue'
import { useEchart } from '../hooks/useEchart'
import { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '350px'
  }
)
const echartDiv = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echartDiv.value!)
  setOptions(props.option)

  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>
<style scoped></style>
