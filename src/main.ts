import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerGlobComp } from '@/global/registerGlobComp'
import 'element-plus/lib/theme-chalk/index.css'
import Request from '@/service'
const app = createApp(App)
app.use(store)
app.use(router)
// 注册全局组件
registerGlobComp(app)
app.config.globalProperties.$http = Request
app.mount('#app')
