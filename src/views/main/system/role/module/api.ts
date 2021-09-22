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
    url: '/users',
    method: 'POST'
  },
  editRole: {
    url: '/users/',
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
  }
}
export default apiItems
