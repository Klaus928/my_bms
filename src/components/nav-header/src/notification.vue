<template>
  <el-popover placement="bottom" title="通知" :width="200" trigger="click">
    <template #reference>
      <el-badge is-dot class="badge">
        <el-icon :size="20">
          <bell />
        </el-icon>
      </el-badge>
    </template>
    <template #default>
      <div v-if="content.length">
        <template v-for="item in content" :key="item">
          <p>
            <el-icon class="my-icon">
              <component :is="item.icon || 'chat-dot-round'" />
            </el-icon>
            <el-link :underline="false" style="color: #005980; display: inline">
              {{ item.label || item }}</el-link
            >
          </p>
        </template>
      </div>
      <div v-else>暂时没有消息通知</div>
    </template>
  </el-popover>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  Setting,
  SwitchButton,
  InfoFilled,
  Bell,
  ChatDotRound,
  Comment,
  Tools,
  Warning
} from '@element-plus/icons'

export default defineComponent({
  components: {
    Setting,
    SwitchButton,
    InfoFilled,
    Bell,
    ChatDotRound,
    Comment,
    Tools,
    Warning
  },
  props: {
    content: {
      type: Array,
      default: () => [
        {
          label:
            'coderwhy 在缺陷 #I3RKKG 下拉列表中选择不了以前列表中的数据 中 @ 你',
          icon: 'chat-dot-round'
        },
        { icon: 'warning', label: '您已经 30 天没修改过密码了' }
      ]
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped></style>
