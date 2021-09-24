import { ref } from 'vue'
import TablePage from '@/components/table-page'
export function useTablePage() {
  const tablePageRef = ref<InstanceType<typeof TablePage>>()
  return [tablePageRef]
}
