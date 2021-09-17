import obj from '@/api'
import { defineStore } from 'pinia'
const { apis, url } = obj

console.log('obj', obj)
const requestStoreList = []
const actions = {}
for (const module in url) {
  for (const name in apis[module]) {
    actions[name] = (params = {}) => {
      return new Promise((resolve, reject) => {
        apis[module][name](params).then((res) => {
          let data = res.data
          if (res.code === 0) {
            data = (
              url[module][name]['afterResponse'] ||
              function (data) {
                return data
              }
            )(data)
            resolve(data)
          } else {
            reject(res)
          }
        })
      })
    }
  }
  requestStoreList[module] = defineStore(module, {
    actions
  })
}
export default requestStoreList
