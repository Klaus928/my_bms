import { ITableConfig } from '@/types/logic'
export const tableConfig: ITableConfig = {
  title: '商品列表',
  showIndexColumn: false,
  showCheckColumn: true,
  headerItems: [
    { prop: 'name', label: '商品名称', width: 120, minWidth: 100 },
    { prop: 'oldPrice', label: '原价格', slotName: 'price', minWidth: 60 },
    { prop: 'newPrice', label: '现价格', slotName: 'price', minWidth: 60 },
    { prop: 'imgUrl', label: '商品图片', slotName: 'imgColumn', minWidth: 60 },
    { prop: 'status', label: '状态', slotName: 'status', minWidth: 60 },
    { prop: 'createAt', label: '创建时间', dateFormat: true },
    { prop: 'updateAt', label: '更新时间', dateFormat: true },
    { prop: 'id', label: '操作', slotName: 'handler', minWidth: 150 }
  ]
}
import { ISearchConfig } from '@/types/logic'
export const searchConfig: ISearchConfig = {
  apiName: 'getGoodList',
  apiModule: 'main/product'
}
