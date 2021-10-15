/* eslint-disable @typescript-eslint/no-unused-vars */
import { myRequestConfig } from '@/service/request/types'
import { IForm } from '@/base-ui/form'
import { ITable } from '@/base-ui/table'

interface IRequest {
  url: string
  data: any
}
export interface IApiItem extends myRequestConfig {
  queryName?: queryName[]
  beforeRequest?: (url: string, data: any) => IRequest
  afterResponse?: (data: any) => any
}
export interface IApi {
  [propName: string]: IApiItem | string
}

type queryName = 'params' | 'data'

export interface ISearchConfig extends IForm {
  apiModule?: string
  apiName?: string
}
export interface ITableConfig extends ITable {
  type?: string
}
