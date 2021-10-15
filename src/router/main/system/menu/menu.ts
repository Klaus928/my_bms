const menu = () => import('@/views/main/system/menu/menu.vue')
export default {
  path: '/main/system/menu',
  name: 'menu',
  component: menu,
  children: [],
  meta: { title: '系统管理 / 菜单管理' }
}
