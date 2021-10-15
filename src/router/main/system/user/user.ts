const user = () => import('@/views/main/system/user/user.vue')
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: [],
  meta: { title: '系统管理 / 用户管理' }
}
