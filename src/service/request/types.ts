import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface myRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface myRequestConfig extends AxiosRequestConfig {
  interceptors?: myRequestInterceptors
}
