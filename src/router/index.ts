import { createRouter, createWebHistory } from 'vue-router'
import localCache from '@/utils/cache'
import basicRoute from './modules/basic'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: basicRoute
})

router.beforeEach((to, from, next) => {
  if (to.name != 'login') {
    if (!localCache.getCache('token')) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    // 登录过的用户不能进入登录页面
    if (localCache.getCache('token')) {
      next({ name: 'main' })
    } else {
      next()
    }
  }
})
export default router
