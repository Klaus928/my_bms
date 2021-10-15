import { ITableConfig } from '@/types/logic'
const options: ITableConfig = {
  title: '角色列表',
  showIndexColumn: false,
  showCheckColumn: true,
  headerItems: [
    { prop: 'name', label: '角色名' },
    { prop: 'intro', label: '角色介绍' },
    { prop: 'createAt', label: '创建时间', dateFormat: true },
    { prop: 'updateAt', label: '更新时间', dateFormat: true },
    { prop: 'id', label: '操作', slotName: 'handler', minWidth: 120 }
  ]
}
export default options
