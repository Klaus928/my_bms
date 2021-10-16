<template>
  <div>
    <el-dialog
      :title="dialogOption.title"
      v-model="dialogOption.visible"
      destroy-on-close
    >
      <slot name="content">
        <base-form v-bind="dialogConfig" ref="baseFormRef"></base-form>
      </slot>
      <slot name="bottomContent"></slot>
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
import { defineComponent, PropType, ref, reactive, inject } from 'vue'
import { IDialogConfig } from '@/types/logic'
import requestStore from '@/store/modules/requestStore'
import { message } from '@/utils/messagebox'
import _ from 'lodash'
import BaseForm from '@/base-ui/form'
export default defineComponent({
  name: 'PageModal',
  props: {
    dialogConfig: {
      type: Object as PropType<IDialogConfig>,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const refreshTableData = inject<any>('refreshTableData')
    const baseFormRef = ref<InstanceType<typeof BaseForm>>()
    let dialogOption = reactive({
      title: '新建',
      visible: false
    })
    const handleClose = () => {
      dialogOption.visible = false
    }
    const handleSubmit = async () => {
      const valid = await baseFormRef.value?.validate()
      if (valid) {
        const apiModule = props.dialogConfig.apiModule
        const apiName = props.dialogConfig.apiName
        const formObject = _.cloneDeep(props.dialogConfig.formObject)
        if (apiModule && apiName) {
          const store = requestStore[apiModule]()
          // 编辑
          store[apiName](formObject)
            .then(() => {
              message.success(`${dialogOption.title}成功`)
              dialogOption.visible = false
              if (refreshTableData instanceof Function) {
                refreshTableData()
              }
            })
            .catch(() => {
              message.error(`${dialogOption.title}失败`)
              dialogOption.visible = false
            })
        }
        emit('submit')
      }
    }

    return { baseFormRef, dialogOption, handleClose, handleSubmit }
  }
})
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: center;
}
</style>
