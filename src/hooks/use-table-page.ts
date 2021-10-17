import { ref, provide } from 'vue'
import TablePage from '@/components/table-page'
import requestStoreList from '@/store/modules/requestStore'
import { message, msgBox } from '@/utils/messagebox'
// module='user' 默认删除api为deleteUser
export function useTablePage(title?: string, module?: string) {
  const sysStore = requestStoreList[`main/system/${module}`]()
  const tablePageRef = ref<InstanceType<typeof TablePage>>()
  const refreshTableData = () => {
    {
      if (tablePageRef.value?.handleSearch) {
        tablePageRef.value?.handleSearch()
      }
    }
  }
  provide('refreshTableData', refreshTableData)
  const handleDelete = async (row: any, showKey: string) => {
    if (module) {
      const method = module.slice(0, 1).toUpperCase() + module.slice(1)
      msgBox(`确认删除${title}： ${row[showKey]}?`)
        .then(async () => {
          await sysStore[`delete${method}`](row.id)
          refreshTableData()
          message.success('删除成功！')
        })
        .catch((err) => err)
    }
  }

  return { tablePageRef, refreshTableData, handleDelete }
}
