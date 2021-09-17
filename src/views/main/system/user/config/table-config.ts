import { ITableConfig } from '@/types/logic'
const options: ITableConfig = {
  headerItems: [
    { prop: 'name', label: '用户名' },
    { prop: 'realname', label: '真实姓名' },
    { prop: 'cellphone', label: '电话号码' },
    { prop: 'enable', label: '状态', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', dateFormat: true },
    { prop: 'updateAt', label: '更新时间', dateFormat: true }
  ]
}
export default options
