import Request from '@/service'
import { myRequestConfig } from '@/service/request/types'
// const sysFiles = require.context('./modules/', true, /.ts$/)
const files = require.context('@/views', true, /api\.ts$/)
const sysFiles = require.context('./modules', true, /\.ts$/)
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
      const requestObject = (
        url[module][name]['beforeRequest'] ||
        function (url: string, data: any) {
          return { url, data }
        }
      )(url[module][name].url || url[module][name], obj)
      obj = requestObject.data
      const temp: myRequestConfig = {
        url: requestObject.url,
        method: (url[module][name].method || 'get').toLowerCase(),
        responseType: url[module][name]['responseType'] || '',
        headers: url[module][name]['headers'] || {},
        showLoading: true
      }
      // Maybe you need more params
      // temp = Object.assign({}, temp, url[module][name])
      if (
        url[module][name].queryName &&
        url[module][name].queryName.includes('data') &&
        url[module][name].queryName.includes('params')
      ) {
        temp.data = obj.data
        temp.params = obj.params
      } else if (
        temp.method == 'get' ||
        temp.method == 'delete' ||
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
