import ElementPlus from 'element-plus'
import { App } from 'vue'
export function registerGlobComp(app: App): void {
  app.use(ElementPlus)
}
