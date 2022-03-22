import HTRequest from "./request"
import {BASE_URL, TIME_OUT} from './request/config'

const htRequest = new HTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: function(config) {

      console.log('request success!')
      return config
    },
    requestInterceptorsCatch: function(error: any) {
      console.log('request failed!')
      return error
    },
    responseInterceptors: function(res) {
      console.log('response success!')
      return res.data
    },
    responseInterceptorsCatch: function(error: any) {
      console.log('response failed!')
      return error
    }
  }
})
export default htRequest