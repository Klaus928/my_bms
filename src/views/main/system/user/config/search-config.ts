import { ISearchConfig } from '@/types/logic'
const options: ISearchConfig = {
  apiName: 'getUserList',
  apiModule: 'main/system/user',
  formItems: [
    { label: '用户名', value: 'name', type: 'input', hidden: false },
    { label: '真实姓名', value: 'realname', type: 'input', hidden: false },
    {
      label: '创建时间',
      value: 'createAt',
      type: 'datepicker',
      hidden: false,
      // col: 10,
      otherOptions: {
        type: 'daterange'
      }
    },
    {
      label: '用户状态',
      value: 'status',
      type: 'select',
      hidden: false,
      select: {
        value: '',
        options: [
          { label: '启用', value: '1' },
          { label: '禁用', value: '0' }
        ]
      },
      test: true
    }
  ],
  labelWidth: '100px',
  formObject: {
    // id: '',
    name: ''
    // cellphone: '',
    // realname: '',
    // status: '',
    // createAt: []
  }
}

export default options
