import { ITableConfig } from '@/types/logic'
const options: ITableConfig = {
  title: '部门列表',
  showIndexColumn: false,
  showCheckColumn: true,
  headerItems: [
    { prop: 'name', label: '部门名称' },
    { prop: 'leader', label: '部门领导' },
    { prop: 'createAt', label: '创建时间', dateFormat: true },
    { prop: 'updateAt', label: '更新时间', dateFormat: true },
    { prop: 'id', label: '操作', slotName: 'handler', minWidth: 120 }
  ]
}
export default options
