export interface ITable {
  headerItems: headerItems[]
}
export interface headerItems {
  label: string
  prop: string
  width?: number
  minWidth?: number
  dateFormat?: boolean | string
  slotName?: string
}
