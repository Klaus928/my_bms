import Request from '@/service'
import { myRequestConfig } from '@/service/request/types'
// const sysFiles = require.context('./modules/', true, /.ts$/)
const files = require.context('@/views', true, /api\.ts$/)
const url: any = {}

files.keys().forEach((key) => {
  url[key.replace(/(\.\/|\.ts|\/api|\/module)/g, '')] = {
    ...(files(key).default || {})
  }
})

const apis: any = {}
for (const module in url) {
  apis[module] = {}
  for (const name in url[module]) {
    apis[module][name] = (obj: any) => {
      if (obj == undefined) {
        obj = {}
      }
      obj = (
        url[module][name]['beforeRequest'] ||
        function (data: any) {
          return data
        }
      )(obj)
      let temp: myRequestConfig = {
        url: url[module][name].url || url[module][name],
        method: url[module][name].method || 'get',
        responseType: url[module][name]['responseType'] || '',
        headers: url[module][name]['headers'] || {},
        showLoading: true
      }
      // Maybe you need more params
      temp = Object.assign({}, temp, url[module][name])
      if (
        url[module][name].queryName &&
        url[module][name].queryName.includes('data') &&
        url[module][name].queryName.includes('params')
      ) {
        temp.data = obj.data
        temp.params = obj.params
      } else if (
        url[module][name].method == 'get' ||
        !url[module][name].method ||
        (url[module][name].queryName &&
          url[module][name].queryName.includes('params'))
      ) {
        temp.params = obj
      } else {
        temp.data = obj
      }
      return Request.request(temp)
    }
  }
}
export default { url, apis }
