import { IApi } from '@/types/request'
const apiItems: IApi = {
  getUserList: { url: '/users/list', method: 'POST' },
  deleteUser: {
    url: '/users/',
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
  getRoleList: {
    method: 'POST',
    url: '/role/list'
  },
  addUser: {
    url: '/users',
    method: 'POST'
  },
  editUser: {
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
