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
  }
}
export default apiItems
