export interface ISelect {
  // api 模块
  apiModule?: string
  //api方法名称
  apiName?: string
  // 数据
  value: string
  //option数据键名
  defaultProps?: {
    value: string
    label: string
  }
  // 传入的options
  options?: any[]
}
