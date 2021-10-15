// 封装请求 类的封装性更好
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { myRequestInterceptors, myRequestConfig } from './types'
import { ElMessage } from 'element-plus'
import localCache from '@/utils/cache'
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
        const token = localCache.getCache('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
          // config.headers.accessToken = `Bearer ${token}`
          // config.headers.common['token'] = token
        }
        return config
      },
      (err) => {
        ElMessage.error('请求失败')
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        const codes = [400, -1003]
        if (codes.findIndex((item) => item === data.code) != -1) {
          ElMessage.error(data.data)
        }
        // switch (data.code) {
        //   case -1003:
        //     ElMessage.error(data.data)
        //     break;
        //     case
        // }
        return data
      },
      (err) => {
        ElMessage.error('请求失败')
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
      this.instance.request<any, T>(options).then((res) => {
        resolve(res)
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
