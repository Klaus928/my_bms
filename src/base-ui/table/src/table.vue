<template>
  <div>
    <div class="header">
      <span>{{ title }}</span>
      <slot name="tableHeader"></slot>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        type="selection"
        width="50"
        v-if="showCheckColumn"
        align="center"
      ></el-table-column>
      <el-table-column
        type="index"
        width="50"
        v-if="showIndexColumn"
        align="center"
        label="序号"
      >
      </el-table-column>
      <template v-for="item in headerItems" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          align="center"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row" :prop="item.prop">
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
    <slot name="tableFooter">
      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
        >
        </el-pagination>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { headerItems } from '../types'
import dayjs from 'dayjs'
import { formatUTCDate } from '@/utils/date-format'
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
    },
    showCheckColumn: {
      type: Boolean,
      default: true
    },
    showIndexColumn: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    totalCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['sizeChange', 'offsetChange'],
  computed: {
    getDate() {
      return function (value) {
        // const format =
        //   typeof dataFormat === 'string' ? dataFormat : 'YYYY-MM-DD HH:mm:ss'
        // return dayjs(value).format(format)
        return formatUTCDate(value)
      }
    }
  },
  setup(props, { emit }) {
    const pageSize = ref(10)
    const currentPage = ref(1)
    const handleSizeChange = (value) => {
      pageSize.value = value
      emit('sizeChange', value)
    }
    const handleCurrentChange = (value) => {
      currentPage.value = value
      emit('offsetChange', value)
    }
    return {
      dayjs,
      currentPage,
      pageSize,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.footer {
  text-align: right;
  margin-top: 10px;
}
</style>
