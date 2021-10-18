import handleBtn from './handleBtn'
import { h, defineComponent, resolveComponent } from 'vue'
import { Edit } from '@element-plus/icons'
export default defineComponent({
  emits: ['click'],
  components: { handleBtn },
  setup(props, { emit }) {
    const slots = {
      icon: () => <Edit />
    }
    return () => (
      <handleBtn v-slots={slots} title="编辑" onClick={() => emit('click')} />
    )
  }
})
