import PageModal from '@/components/page-modal'
import { ref } from 'vue'
import { IDialogConfig } from '@/types/logic'
type callback = (item?: any) => void
export function usePageModal(
  title: string,
  module: string,
  dialogConfig: IDialogConfig,
  newCb?: callback | null,
  editCb?: callback | null
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleAdd = () => {
    if (pageModalRef.value?.dialogOption) {
      pageModalRef.value.dialogOption.visible = true
      pageModalRef.value.dialogOption.title = '新增' + title
    }
    dialogConfig.apiName =
      'add' + module.slice(0, 1).toUpperCase() + module.slice(1)
    Object.keys(dialogConfig.formObject).forEach((key) => {
      dialogConfig.formObject[key] = ''
    })
    newCb && newCb()
  }
  const handleEdit = (item) => {
    dialogConfig.apiName =
      'edit' + module.slice(0, 1).toUpperCase() + module.slice(1)
    dialogConfig.formObject = JSON.parse(JSON.stringify(item))
    editCb && editCb(item)
    if (pageModalRef.value?.dialogOption) {
      pageModalRef.value.dialogOption.visible = true
      pageModalRef.value.dialogOption.title = '编辑' + title
    }
  }
  return [pageModalRef, handleAdd, handleEdit]
}
