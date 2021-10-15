// service 统一出口
import myRequest from './request/index'
import localCache from '@/utils/cache'
const Request = new myRequest({
  baseURL: '/api',
  interceptors: {
    // requestInterceptor: (config) => {
    //   const token = localCache.getCache('token')
    //   if (token) {
    //     config.headers.Authorization = `${token}`
    //     config.headers.accessToken = `${token}`
    //   }
    //   return config
    // },
    // requestInterceptorCatch: (err) => {
    //   return err
    // },
    // responseInterceptor: (config) => {
    //   return config
    // },
    // responseInterceptorCatch: (err) => {
    //   return err
    // }
  }
})
export default Request
