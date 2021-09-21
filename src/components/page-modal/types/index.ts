import { ElDialog, DialogProps } from 'element-plus'
import { IForm } from '@/base-ui/form'
export interface IDialogConfig extends IForm {
  title?: string
  width?: string | number
  visible: boolean
}
