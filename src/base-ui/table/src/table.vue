<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <template v-for="item in headerItems" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          align="center"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              <span>{{
                item.dateFormat
                  ? getDate(scope.row[item.prop], item.dateFormat)
                  : scope.row[item.prop]
              }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { headerItems } from '../types'
import dayjs from 'dayjs'
export default defineComponent({
  name: 'BaseTable',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    headerItems: {
      type: Array as PropType<headerItems[]>,
      default() {
        return []
      }
    }
  },
  computed: {
    getDate() {
      return function (value, dataFormat) {
        const format =
          typeof dataFormat === 'string' ? dataFormat : 'YYYY-MM-DD HH:mm:ss'
        return dayjs(value).format(format)
      }
    }
  },
  setup() {
    return { dayjs }
  }
})
</script>

<style scoped></style>
