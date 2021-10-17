import { IDialogConfig } from '@/types/logic'
export const modalConfig: IDialogConfig = {
  apiModule: 'main/system/department',
  apiName: 'addDepartment',
  size: 'small',
  formItems: [
    {
      label: '部门名称',
      value: 'name',
      col: 24,
      type: 'input',
      hidden: false,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
      label: '部门领导',
      value: 'leader',
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
    id: '',
    name: '',
    leader: ''
  }
}
export default modalConfig
