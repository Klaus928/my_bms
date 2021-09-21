import PageModal from '@/components/page-modal'
import { ref } from 'vue'
type callback = (item?: any) => void
export function usePageModal(
  newCb?: callback,
  editCb?: callback,
  title?: string
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleAdd = () => {
    if (pageModalRef.value?.dialogOption) {
      pageModalRef.value.dialogOption.visible = true
      pageModalRef.value.dialogOption.title = '新增' + title
    }
    newCb && newCb()
  }
  const handleEdit = (...args) => {
    editCb && editCb(...args)
    if (pageModalRef.value?.dialogOption) {
      pageModalRef.value.dialogOption.visible = true
      pageModalRef.value.dialogOption.title = '编辑' + title
    }
  }
  return [pageModalRef, handleAdd, handleEdit]
}
