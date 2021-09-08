// 封装请求 类的封装性更好
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { myRequestInterceptors, myRequestConfig } from './types'

class myRequest {
  private instance: AxiosInstance
  private readonly options: myRequestConfig
  private interceptors?: myRequestInterceptors
  constructor(options: myRequestConfig) {
    this.options = options
    this.instance = axios.create(options)
    this.interceptors = options.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 拦截所有请求
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求总拦截成功')
        return config
      },
      (err) => {
        console.log('总失败')
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('详情总拦截成功')
        return config
      },
      (err) => {
        console.log(err.response.status)
        switch (err.response.status) {
          case 404:
            console.log('不存在')
            break
        }
      }
    )
  }
  request(options: myRequestConfig) {
    this.instance.request(options).then((res) => {
      console.log(res)
    })
  }
}
export default myRequest
