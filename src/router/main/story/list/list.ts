const list = () => import('@/views/main/story/list/list.vue')
export default {
  path: '/main/story/list',
  name: 'list',
  component: list,
  children: [],
  meta: {
    title: '随便聊聊 / 故事列表'
  }
}
