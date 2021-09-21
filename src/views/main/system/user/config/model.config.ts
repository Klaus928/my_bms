import { IDialogConfig } from '@/types/logic'
export const modalConfig: IDialogConfig = {
  apiModule: 'main/system/user',
  apiName: '',
  size: 'small',
  formItems: [
    {
      label: '用户名',
      value: 'name',
      col: 24,
      type: 'input',
      hidden: false,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
      label: '真实姓名',
      value: 'realname',
      col: 24,
      type: 'input',
      hidden: false,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
      label: '密码',
      value: 'password',
      col: 24,
      type: 'input',
      hidden: true,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
      label: '电话号码',
      value: 'cellphone',
      col: 24,
      type: 'input',
      hidden: false,
      rules: [{ required: true, message: '必填项', trigger: 'blur' }]
    },
    {
      label: '角色',
      value: 'roleId',
      col: 24,
      type: 'select',
      hidden: false,
      select: {
        apiModule: 'main/system/user',
        apiName: 'getRoleList',
        value: '',
        defaultProps: {
          value: 'id',
          label: 'name'
        },
        options: [{ label: 'heelo', value: 'sss' }]
      },
      test: true,
      rules: [
        { required: true, message: '必选项', trigger: ['blur', 'change'] }
      ]
    },
    {
      label: '部门',
      value: 'departmentId',
      col: 24,
      type: 'select',
      hidden: false,
      select: {
        apiModule: 'main/system/user',
        apiName: 'getDeptList',
        value: '',
        defaultProps: {
          value: 'id',
          label: 'name'
        },
        options: [{ label: 'heelo', value: 'sss' }]
      },
      test: true,
      rules: [
        { required: true, message: '必选项', trigger: ['blur', 'change'] }
      ]
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
    realname: '',
    password: '',
    cellphone: '',
    roleId: '',
    departmentId: ''
  }
}
export default modalConfig
