import { App } from 'vue'
import BaseForm from '@/base-ui/form'
import TablePage from '@/components/table-page'
import 'dayjs/locale/zh-cn' //中文
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import BaseTable from '@/base-ui/table'
// 统一在这里导入项目公共组件
const components = [BaseForm, TablePage, BaseTable]
export function registerGlobComp(app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  const ElementPlus = require('element-plus')
  app.use(ElementPlus, { locale })
}
