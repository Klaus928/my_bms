import { IApi } from '@/types/request'
const apiItems: IApi = {
  getRoleList: { url: '/role/list', method: 'POST' },
  deleteRole: {
    url: '/role/',
    method: 'DELETE',
    beforeRequest: (url, data) => {
      url = url + data
      data = {}
      return { url, data }
    }
  },
  getDeptList: {
    method: 'POST',
    url: '/department/list'
  },
  addRole: {
    url: '/role',
    method: 'POST'
  },
  editRole: {
    url: '/role/',
    method: 'PATCH',
    beforeRequest: (url, data) => {
      debugger
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
