import { ElButton } from 'element-plus'
import { App } from 'vue'
const components = [ElButton]
export function registerGlobComp(app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
