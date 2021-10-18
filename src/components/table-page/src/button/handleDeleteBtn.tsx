import handleBtn from './handleBtn'
import { h, defineComponent, resolveComponent } from 'vue'
import { Delete, Edit } from '@element-plus/icons'
export default defineComponent({
  emits: ['click'],
  components: { handleBtn },
  setup(props, { emit }) {
    const slots = {
      icon: () => <Delete />
    }
    return () => (
      <handleBtn
        title="删除"
        v-slots={slots}
        onClick={() => emit('click')}
        type="danger"
      ></handleBtn>
    )
  }
})
