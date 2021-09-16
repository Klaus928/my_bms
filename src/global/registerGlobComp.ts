// import { ElButton } from 'element-plus'
import ElementPlus from 'element-plus'
import { App } from 'vue'
import BaseForm from '@/base-ui/form'
const components = [BaseForm]
export function registerGlobComp(app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  const ElementPlus = require('element-plus')

  app.use(ElementPlus)
}
