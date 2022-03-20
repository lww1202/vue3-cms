import { createApp } from 'vue'
import App from './App.vue'
// 对路由进行注册
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
