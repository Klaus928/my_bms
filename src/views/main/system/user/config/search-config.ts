import { ISearchConfig } from '@/types/logic'
const options: ISearchConfig = {
  apiName: 'getUserList',
  apiModule: 'main/system',
  formItems: [
    { label: '用户名', value: 'name', type: 'input' },
    { label: '真实姓名', value: 'realname', type: 'input' },
    {
      label: '创建时间',
      value: 'createAt',
      type: 'datepicker',
      // col: 10,
      otherOptions: {
        type: 'daterange'
      }
    },
    {
      label: '用户状态',
      value: 'status',
      type: 'select',
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' }
      ]
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
