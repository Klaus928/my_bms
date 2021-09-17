import { ISearchConfig } from '@/types/logic'
const options: ISearchConfig = {
  apiName: 'getUserList',
  apiModule: 'main/system',
  formItems: [
    { label: '用户名', value: 'userName', type: 'input' },
    { label: '密码', value: 'password', type: 'input' },
    {
      label: '创建时间',
      value: 'createDateTime',
      type: 'datepicker',
      // col: 10,
      otherOptions: {
        type: 'daterange'
      }
    },
    {
      label: '喜欢的运动',
      value: 'likeSport',
      type: 'select',
      options: [
        { label: 'basketball', value: 'basketball' },
        { label: 'football', value: 'football' },
        { label: 'sing', value: 'sing' }
      ]
    }
  ],
  labelWidth: '100px',
  formObject: {
    id: '',
    userName: '',
    password: '',
    likeSport: '',
    createDateTime: [],
    createTime: ''
  }
}

export default options
