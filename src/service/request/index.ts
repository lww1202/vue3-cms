import axios from 'axios'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {HTRequestInterceptors, HTRequestConfig} from './type'

class HTRequest{
    instance : AxiosInstance
    interceptors?: HTRequestInterceptors
    constructor(config: HTRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        // 从config中取出的拦截器是对应实例的拦截器
        this.instance.interceptors.request.use(this.interceptors?.requestInterceptors, this.interceptors?.requestInterceptorsCatch)
        this.instance.interceptors.response.use(this.interceptors?.responseInterceptors, this.interceptors?.responseInterceptorsCatch)
        // 所有实例都有的拦截器
        this.instance.interceptors.request.use(config => {
            return config
        }, err => {
            return err
        })
        this.instance.interceptors.response.use(res => {
            return res
        }, err => {
            return err
        })
    }
    request(config: HTRequestConfig) {
        if(config.interceptors?.requestInterceptors) {
            config = config.interceptors.requestInterceptors(config)
        }
        this.instance.request(config).then((res:any) => {
            if(config.interceptors?.responseInterceptors) {
                config = config.interceptors.responseInterceptors(res)
            }
            console.log(res)
        })
    }
    
}
export default HTRequest