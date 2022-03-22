import { createApp } from 'vue'
// import { registerApp } from './global/index'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import htRequest from './service'

// 对路由进行注册
import router from './router'

const app = createApp(App)
htRequest.request({
    url:'home/multidata',
    method: 'get',
    interceptors:{
        requestInterceptors: function(config) {
            console.log('单独的拦截器：request success!')
            return config
          },
            responseInterceptors: function(res) {
                console.log('单独的拦截器：response success!')
                return res
            },
    }
})
// registerApp(app)
// app.use(ElementPlus)
app.use(router)
app.mount('#app')
