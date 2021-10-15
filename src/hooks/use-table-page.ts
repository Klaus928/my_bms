import { ref } from 'vue'
import TablePage from '@/components/table-page'
export function useTablePage() {
  const tablePageRef = ref<InstanceType<typeof TablePage>>()
  const refreshTableData = () => {
    if (tablePageRef.value?.handleSearch) {
      tablePageRef.value?.handleSearch()
    }
  }
  return [tablePageRef, refreshTableData]
}
