<template>
  <div>
    <el-dialog :title="dialogOption.title" v-model="dialogOption.visible">
      <slot name="content"></slot>
      <slot name="footer">
        <div class="btn">
          <el-button size="small" @click="handleClose">取消</el-button>
          <el-button size="small" type="primary">确定</el-button>
        </div>
      </slot>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { IDialogConfig } from '../types'
export default defineComponent({
  name: 'BaseDialog',
  props: {
    dialogConfig: {
      type: Object as PropType<IDialogConfig>,
      required: true
    }
  },
  setup(props) {
    const dialogOption = reactive<IDialogConfig>(props.dialogConfig)
    const handleClose = () => {
      dialogOption.visible = false
    }
    return { dialogOption, handleClose }
  }
})
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: center;
}
</style>
