<template>
  <div class="base-form">
    <el-form
      :label-width="labelWidth"
      :model="formData"
      ref="form"
      :size="size"
    >
      <el-row :gutter="20">
        <template v-for="item in formItems" :key="item.value">
          <el-col :span="item.col || 8" v-bind="colLayout">
            <el-form-item
              :label="item.label + '：'"
              :style="itemStyles"
              :prop="item.value"
              v-if="!item.hidden"
              :rules="item.rules"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formData[item.value]"
                  :show-password="item.type === 'password'"
                  :placeholder="
                    item?.placeholder ||
                    item?.otherOptions?.placeholder ||
                    `请输入${item.label}`
                  "
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <base-select
                  :selectConfig="selectConfig(item)"
                  v-if="item.test"
                  @change="handleSelectChange($event, item)"
                ></base-select>
                <el-select
                  v-else
                  v-model="formData[item.value]"
                  :placeholder="
                    item?.placeholder ||
                    item?.otherOptions?.placeholder ||
                    `请选择${item.label}`
                  "
                >
                  <template v-for="option in item.options || []" :key="option">
                    <el-option
                      v-model="formData[item.value]"
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[item.value]"
                  :type="item?.otherOptions?.type"
                  :start-placeholder="
                    item?.otherOptions?.startPlaceholder || '开始时间'
                  "
                  :end-placeholder="
                    item?.otherOptions?.endPlaceholder || '结束时间'
                  "
                  range-separator="至"
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
import { defineComponent, PropType, ref, watch, reactive } from 'vue'
import { IFormItem } from '../types'
import BaseSelect from '@/base-ui/select'
import { ElForm } from 'element-plus'
export default defineComponent({
  name: 'BaseForm',
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyles: {
      type: Object,
      default() {
        return {}
      }
    },
    colLayout: {
      type: Object,
      default() {
        return {
          xl: 6,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    },
    formObject: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: 'medium '
    }
  },
  computed: {
    selectConfig() {
      return (item) => {
        return Object.assign(item.select, {
          value: this.formObject[item.value]
        })
      }
    }
  },
  components: { BaseSelect },
  setup(props: any, { emit }) {
    const form = ref<InstanceType<typeof ElForm>>()
    let formData = reactive(props.formObject)
    // 监听formData 触发父组件更新数据
    watch(
      formData,
      (newVal) => {
        emit('update', newVal)
      },
      { deep: true }
    )
    const resetField = () => {
      form.value?.resetFields()
    }
    const validate = () => {
      return new Promise((resolve, reject) => {
        form.value?.validate((valid) => {
          if (valid) {
            resolve(true)
          } else {
            reject(false)
          }
        })
      })
    }
    // select change
    const handleSelectChange = (value, row) => {
      formData[row.value] = value
    }
    return { formData, resetField, form, handleSelectChange, validate }
  },
  emits: ['update']
})
</script>

<style lang="less" scoped>
&:deep(.el-select) {
  width: 100%;
}
&:deep(.el-range-editor.el-input__inner) {
  width: 100%;
}
</style>
