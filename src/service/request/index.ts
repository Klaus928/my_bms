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
      (res) => {
        console.log('详情总拦截成功')
        const data = res.data
        return data
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
  request<T>(options: myRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对request的拦截
      // 判断是否显示loading
      this.instance
        .request<any, T>(options)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(options: myRequestConfig): Promise<T> {
    return this.instance.request({ ...options, method: 'GET' })
  }
  post<T>(options: myRequestConfig): Promise<T> {
    return this.instance.request({ ...options, method: 'POST' })
  }
  delete<T>(options: myRequestConfig): Promise<T> {
    return this.instance.request({ ...options, method: 'DELETE' })
  }
  patch<T>(options: myRequestConfig): Promise<T> {
    return this.instance.request({ ...options, method: 'PATCH' })
  }
}
export default myRequest
