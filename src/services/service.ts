import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
}) as AxiosInstance

// request interceptor
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // do something before request is sent
    config.headers = config.headers ?? { 'Content-Type': 'application/json' }
    return config ?? {}
  },
  (error: AxiosError) => {
    return Promise.reject(error) ?? null
  },
) as unknown as AxiosInterceptorManager<AxiosRequestConfig>

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * ! return  response => response
   */
  (response: AxiosResponse) => {
    return response?.data ?? null
  },
  (error: AxiosError) => {
    const err = error?.response?.data as { message: string, error: string }
    return Promise.reject(err) ?? null
  },
) as unknown as AxiosInterceptorManager<AxiosResponse>

export default service
