import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import { registerGlobComp } from '@/global/registerGlobComp'
import 'element-plus/dist/index.css'
import Request from '@/service'
const app = createApp(App)

app.use(router)
// 注册全局组件
registerGlobComp(app)
// 安装状态
setupStore(app)
app.config.globalProperties.$http = Request
app.mount('#app')
interface DataType {
  data: any
  returnCode: number
}
// Request.request<DataType>({
//   url: '/home/multidata',
//   method: 'GET'
// }).then((res) => {
//   console.log('es', res)
// })
Request.get({
  url: '/home/multidata'
}).then((res) => {
  console.log('get', res)
})
