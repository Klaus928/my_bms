import { IForm } from '@/base-ui/form'
export interface IDialogConfig extends IForm {
  title?: string
  width?: string | number
  visible: boolean
}
