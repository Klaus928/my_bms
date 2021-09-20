import { ElFormItem } from 'element-plus'
import { ISelect } from '@/base-ui/select'
type IFormType = 'input' | 'password' | 'select' | 'datetime' | 'datepicker'
export interface IFormItem {
  value: string
  label: string
  field?: string
  hidden?: boolean
  // 也可以在otherOptions里设置
  placeholder?: string
  type: IFormType
  rules?: any[]
  col?: number
  disabled?: boolean
  // select
  select?: ISelect
  options?: any[]
  apiModule?: string
  apiName?: string
  // 测试
  test?: boolean
  //  element组件属性
  otherOptions?: any
}
export interface IForm {
  // api
  formItems?: IFormItem[]
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
  formObject?: any
  size?: string
}
