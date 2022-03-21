import { createApp } from 'vue'
import { registerApp } from './global/index'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'

// 对路由进行注册
import router from './router'

const app = createApp(App)
registerApp(app)
// app.use(ElementPlus)
app.use(router)
app.mount('#app')
