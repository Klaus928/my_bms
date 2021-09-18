import { IForm } from '@/base-ui/form'
import { ITable } from '@/base-ui/table'
export interface ISearchConfig extends IForm {
  apiModule?: string
  apiName?: string
}
export interface ITableConfig extends ITable {
  title?: string
  showIndexColumn?: boolean
  showCheckColumn?: boolean
}
