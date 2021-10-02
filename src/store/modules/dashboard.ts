import requestStoreList from './requestStore'
import { defineStore } from 'pinia'

const module = 'main/analysis/dashboard'
const store = requestStoreList[module]()
const dashBoardStore = defineStore('dashboard', {
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      goodsAmountList: []
    }
  },
  actions: {
    async refreshCatrgoryData() {
      this.categoryGoodsCount = await store.getCategoryCount()
      this.categoryGoodsSale = await store.getCategorySale()
      this.categoryGoodsFavor = await store.getCategoryFavor()
      this.addressGoodsSale = await store.getAddressSale()
      this.goodsAmountList = await store.getAmountList()
    }
  }
})
export default dashBoardStore
