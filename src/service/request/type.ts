import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

export interface HTRequestInterceptors {
    requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorsCatch?: (error: any) => any
    responseInterceptors?: (res: AxiosResponse) => AxiosResponse
    responseInterceptorsCatch?: (error: any) => any
}
export interface HTRequestConfig extends AxiosRequestConfig {
    interceptors?: HTRequestInterceptors
}