import { IApi } from '@/types/request'
const apiItems: IApi = {
  getCategoryCount: { url: '/goods/category/count', method: 'GET' },
  getCategorySale: '/goods/category/sale',
  getCategoryFavor: '/goods/category/favor',
  getGoodsTop10: '/goods/sale/top10',
  getAddressSale: '/goods/address/sale',
  getAmountList: '/goods/amount/list'
}
export default apiItems
