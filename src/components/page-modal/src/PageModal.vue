<template>
  <div>
    <el-dialog
      :title="dialogOption.title"
      v-model="dialogOption.visible"
      destroy-on-close
    >
      <slot name="content"></slot>
      <slot name="footer">
        <div class="btn">
          <el-button size="small" @click="handleClose">取消</el-button>
          <el-button size="small" type="primary" @click="handleSubmit"
            >确定</el-button
          >
        </div>
      </slot>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, reactive } from 'vue'
import { IDialogConfig } from '../types'
export default defineComponent({
  name: 'PageModal',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogConfig: {
      type: Object as PropType<IDialogConfig>,
      required: true
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const dialogOption = reactive<IDialogConfig>(props.dialogConfig)
    const handleClose = () => {
      dialogOption.visible = false
    }
    const handleSubmit = () => {
      emit('submit')
    }
    return { dialogOption, handleClose, handleSubmit }
  }
})
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: center;
}
</style>
