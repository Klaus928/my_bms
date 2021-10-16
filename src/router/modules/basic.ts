import type { RouteRecordRaw } from 'vue-router'
// import { mapMenuToRoute } from '@/utils/mapMenu'
const basicRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main/analysis/overview'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      name: '登录'
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/analysis/overview',
    meta: {
      title: '首页'
    },
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/sys/NotFound.vue')
  }
]
export default basicRoute
