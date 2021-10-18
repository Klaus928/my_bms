import { ElMessageBoxOptions } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import deleteImgPath from '@/assets/images/警告1.png'
export const deleteConfirm = (message: string, option: ElMessageBoxOptions) => {
  return ElMessageBox.confirm(
    `<div><img src="${deleteImgPath}"></div>${message}`,
    {
      title: '删除',
      confirmButtonText: '删除',
      dangerouslyUseHTMLString: true,
      center: true,
      customClass: 'custom-message-box__btns',
      cancelButtonClass: 'custom-btn-cancel',
      confirmButtonClass: 'custom-btn-delete',
      ...option
    }
  )
}
