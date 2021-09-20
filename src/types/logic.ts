import { IForm } from '@/base-ui/form'
import { ITable } from '@/base-ui/table'
// 搜索表单
export interface ISearchConfig extends IForm {
  apiModule?: string
  apiName?: string
}
export interface ITableConfig extends ITable {
  title?: string
  showIndexColumn?: boolean
  showCheckColumn?: boolean
}
// 普通表单
export interface IFormConfig extends IForm {
  apiModule?: string
  apiName?: string
}
