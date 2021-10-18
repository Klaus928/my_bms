import { h, defineComponent, resolveComponent } from 'vue'
import { Delete, Edit } from '@element-plus/icons'
export default defineComponent({
  props: {
    title: { type: String, default: '' },
    type: { type: String, default: 'primary' }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    return () => (
      <el-button
        size="mini"
        title={props.title}
        type={props.type}
        plain
        onClick={() => emit('click')}
      >
        <el-icon>{slots.icon?.()}</el-icon>
      </el-button>
    )
  }
})
