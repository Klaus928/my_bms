import { IDialogConfig } from '@/types/logic'
export const modalConfig: IDialogConfig = {
  apiModule: 'main/system/user',
  apiName: '',
  size: 'small',
  formItems: [
    {
      label: '角色名',
      value: 'name',
      col: 24,
      type: 'input',
      hidden: false,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
      label: '角色介绍',
      value: 'intro',
      col: 24,
      type: 'input',
      hidden: false,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    }
  ],
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  formObject: {
    name: '',
    intro: ''
  }
}
export default modalConfig
