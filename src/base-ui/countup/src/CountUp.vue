<template>
  <span ref="counterRef"></span>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ',', // 千位分割
  decimal: '.', // 小数分割
  prefix: '￥' // 单位
}
export default defineComponent({
  name: 'BaseCountUp',
  props: {
    number: {
      type: Number,
      default: 0
    },
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const counterRef = ref<HTMLElement>()
    const instance = ref<CountUp>()
    const start = () => {
      if (!instance.value) return
      instance.value.start()
    }
    const createCounter = () => {
      if (!counterRef.value) return
      const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
      instance.value = new CountUp(counterRef.value, props.number, opts)
      start()
    }

    onMounted(() => {
      createCounter()
    })
    return { counterRef }
  }
})
</script>
<style scoped></style>
