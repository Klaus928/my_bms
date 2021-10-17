import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { registerGlobComp } from '@/global/registerGlobComp'
import { registerGlobProperties } from '@/global/registerGlobProps'
import 'element-plus/dist/index.css'
import '@/assets/css/base.less'
const app = createApp(App)

// 安装状态
setupStore(app)
// 注册全局组件
registerGlobComp(app)
// 在状态之后安装
setupRouter(app)
registerGlobProperties(app)
app.mount('#app')
