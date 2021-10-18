<template>
  <el-select
    v-model="select.value"
    :placeholder="select?.placeholder || `请选择`"
    @change="handleChange"
  >
    <template v-for="option in options || []" :key="option.value">
      <el-option
        :label="option[select?.defaultProps?.label || 'label']"
        :value="option[select?.defaultProps?.value || 'value']"
      >
        {{
          options.length ? option[select?.defaultProps?.label || 'label'] : ''
        }}
      </el-option>
    </template>
  </el-select>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, reactive, watch } from 'vue'
import requestStore from '@/store/modules/requestStore'
import { ISelect } from '../types'
export default defineComponent({
  props: {
    selectConfig: {
      type: Object as PropType<ISelect>,
      required: true
    }
  },
  name: 'BaseSelect',
  emits: ['change'],
  setup(props, { emit }) {
    const select = reactive(props.selectConfig)
    // const modalValue = ref(props.value || select.value)
    let options = ref(props.selectConfig.options)
    if (select.apiModule && select.apiName) {
      const store = requestStore[select.apiModule]()
      store[select.apiName]().then((res) => {
        options.value = res.list
      })
    }
    watch(
      () => select.value,
      (cur) => {
        console.log(cur)
      },
      { deep: true }
    )
    const handleChange = (value) => {
      emit('change', value)
    }

    return { select, options, handleChange }
  }
})
</script>
<style scoped></style>
