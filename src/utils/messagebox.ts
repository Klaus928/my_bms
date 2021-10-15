import { ElMessage, ElMessageBox } from 'element-plus'

export function msgBox(msg: string, options?) {
  return ElMessageBox.confirm(msg, '确认', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    dangerouslyUseHTMLString: true,
    ...(options ?? {})
  })
}

export const message = ElMessage
