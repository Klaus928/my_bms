import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerGlobComp } from '@/global/registerGlobComp'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
// 注册全局组件
registerGlobComp(app)
app.mount('#app')
