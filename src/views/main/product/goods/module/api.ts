import { IApi } from '@/types/request'
const apiItems: IApi = {
  getGoodsList: { url: '/goods/list', method: 'POST' },
  deleteGoods: {
    url: '/goods/',
    method: 'DELETE',
    beforeRequest: (url, data) => {
      url = url + data
      data = {}
      return { url, data }
    }
  },
  addGoods: {
    url: '/goods',
    method: 'POST'
  },
  editGoods: {
    url: '/goods/',
    method: 'PATCH',
    beforeRequest: (url, data) => {
      if (data && data.id) {
        // 编辑
        url = url + data.id
      } else {
        // 删除
        url = url + data
        data = {}
      }

      return { url, data }
    }
  },
  getMenuList: {
    url: '/menu/list',
    method: 'GET'
  }
}
export default apiItems
