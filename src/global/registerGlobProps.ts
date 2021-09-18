import { App } from 'vue'
import dayjs from 'dayjs'
export function registerGlobProperties(app: App<Element>) {
  app.config.globalProperties.$http = Request
  app.config.globalProperties.$filters = {
    formatDate: (value) => {
      return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
