<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ElMessage } from 'element-plus'
type messageType = '' | 'success' | 'warning' | 'info' | 'error'
export default defineComponent({
  props: {
    messsage: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<messageType>,
      default: 'success'
    }
  },
  setup(props) {
    ElMessage({ message: props.messsage, type: props.type })
    return {}
  }
})
</script>
<style scoped></style>
