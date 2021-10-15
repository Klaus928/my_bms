const department = () => import('@/views/main/system/department/department.vue')
export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  children: [],
  meta: { title: '系统管理 / 部门管理' }
}
