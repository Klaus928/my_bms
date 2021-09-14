import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { registerGlobComp } from '@/global/registerGlobComp'
import 'element-plus/dist/index.css'
import Request from '@/service'
const app = createApp(App)

// 安装状态
setupStore(app)
// 注册全局组件
registerGlobComp(app)
// 在状态之后安装
setupRouter(app)

app.config.globalProperties.$http = Request
app.mount('#app')
