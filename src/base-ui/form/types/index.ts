type IFormType = 'input' | 'password' | 'select' | 'datetime' | 'datepicker'
export interface IFormItem {
  value: string
  label: string
  field?: string
  // 也可以在otherOptions里设置
  placeholder?: string
  type: IFormType
  rules?: any[]
  col?: number
  disabled?: boolean
  // select
  options?: any[]
  //  element组件属性
  otherOptions?: any
}

export interface IForm {
  // api
  formItems: IFormItem[]
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
  formObject: any
}
