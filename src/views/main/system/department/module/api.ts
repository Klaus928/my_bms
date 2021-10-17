import { IApi } from '@/types/request'
const apiItems: IApi = {
  getDepartmentList: { url: '/department/list', method: 'POST' },
  deleteDepartment: {
    url: '/department/',
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
  addDepartment: {
    url: '/department',
    method: 'POST'
  },
  editDepartment: {
    url: '/department/',
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
