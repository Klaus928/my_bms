// service 统一出口
import myRequest from './request/index'
const Request = new myRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('发送拦截', config)
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      console.log('接收拦截', config)
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default Request
