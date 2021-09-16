const chat = () => import('@/views/main/story/chat/chat.vue')
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: chat,
  children: [],
  meta: {
    title: '随便聊聊 / 你的故事'
  }
}
