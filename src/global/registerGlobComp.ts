import { App } from 'vue'
import BaseForm from '@/base-ui/form'
import TablePage from '@/components/table-page'
import 'dayjs/locale/zh-cn' //中文
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import BaseTable from '@/base-ui/table'
import BaseDialog from '@/base-ui/dialog'
import PageModal from '@/components/page-modal'
// 统一在这里导入项目公共组件
import {
  handleEditBtn,
  handleDeleteBtn
} from '@/components/table-page/src/button'
const components = [BaseForm, TablePage, BaseTable, BaseDialog, PageModal]
export function registerGlobComp(app: App): void {
  components.forEach((component) => {
    app.component(
      component.name,
      Object.assign(component, { inheritAttrs: false })
    )
  })
  const ElementPlus = require('element-plus')
  app.use(ElementPlus, { locale })
  app.component('handle-edit-btn', handleEditBtn)
  app.component('handle-delete-btn', handleDeleteBtn)
}
