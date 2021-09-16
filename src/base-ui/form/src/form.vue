<template>
  <div>
    <el-form :label-width="labelWidth">
      <el-row :gutter="20">
        <template v-for="item in formItems" :key="item.value">
          <el-col :span="item.col || 8" v-bind="colLayout">
            <el-form-item :label="item.label + '：'" :style="itemStyles">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formObject[item.value]"
                  :show-password="item.type === 'password'"
                  :placeholder="
                    item?.placeholder ||
                    item?.otherOptions?.placeholder ||
                    `请输入${item.label}`
                  "
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formObject[item.value]"
                  :placeholder="
                    item?.placeholder ||
                    item?.otherOptions?.placeholder ||
                    `请选择${item.label}`
                  "
                >
                  <template v-for="option in item.options || []" :key="option">
                    <el-option
                      v-model="formObject[item.value]"
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formObject[item.value]"
                  :type="item?.otherOptions?.type"
                  :start-placeholder="
                    item?.otherOptions?.startPlaceholder || '开始时间'
                  "
                  :end-placeholder="
                    item?.otherOptions?.endPlaceholder || '结束时间'
                  "
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, watch } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  name: 'BaseForm',
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default() {
        return []
      }
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    formObject: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    itemStyles: {
      type: Object,
      default() {
        return { padding: '0 40px' }
      }
    },
    colLayout: {
      type: Object,
      default() {
        return {
          xl: 8,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    }
  },
  setup(props, { emit }) {
    // console.log('props', props['formObject'])
    // let formData = ref(props['formObject'])
    // watch(formData, (newVal) => {
    //   console.log('newVal', newVal)

    // })
    // watch(
    //   formData,
    //   (newVal) => {
    //     console.log('newVal', newVal)
    //     emit('update:formObject', newVal)
    //   },
    //   { deep: true }
    // )
    // const formData = computed({
    //   get: () => props['formObject'],
    //   set: (newVal) => {
    //     emit('update:formObject', newVal)
    //   }
    // })
    return {}
  },
  emits: ['update:formObject']
})
</script>

<style scoped></style>
