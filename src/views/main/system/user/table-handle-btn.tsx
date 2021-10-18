import { h, defineComponent, resolveComponent } from 'vue'
import { Delete, Edit } from '@element-plus/icons'
const deleteBtn = defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    return () =>
      h(
        <el-button
          size="mini"
          onClick={() => emit('click')}
          type="danger"
          title="删除"
          plain
        >
          <el-icon class="default-icon">
            <Delete />
          </el-icon>
        </el-button>
      )
  }
})
const editBtn = defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    return () =>
      h(
        <el-button
          size="mini"
          title="编辑"
          type="primary"
          plain
          onClick={() => emit('click')}
        >
          <el-icon>
            <Edit />
          </el-icon>
        </el-button>
      )
  }
})

const handleBtn = defineComponent({
  props: {
    title: { type: String, default: '' },
    icon: { type: String, default: 'Edit' }
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () =>
      h(
        <el-button
          size="mini"
          title={props.title}
          type="primary"
          plain
          onClick={() => emit('click')}
        >
          <el-icon>{h(resolveComponent(props.icon))}</el-icon>
        </el-button>
      )
  }
})

const editCps = defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    return () => () => <handleBtn title="编辑" onClick={() => emit('click')} />
  }
})

export default { editCps }
