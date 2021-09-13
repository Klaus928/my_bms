import type { App } from 'vue'
import {
  accountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import { createPinia, defineStore } from 'pinia'
import router from '@/router'
import localCache from '@/utils/cache'
const store = createPinia()
export const loginState = defineStore('login', {
  state() {
    return {
      count: 1,
      userInfo: {},
      token: '',
      userMenus: []
    }
  },
  actions: {
    /**
     * 用户名登录
     * @param userInfo  用户信息
     */
    async loginByAccount(userInfo) {
      // 实现登录逻辑
      const res = await accountLogin(userInfo)
      const { data } = res
      const { id, token } = data
      this.token = token
      localCache.setCache('token', token)
      // 请求用户信息
      const info = await requestUserInfoById(id)
      this.userInfo = info
      localCache.setCache('userInfo', info)
      // 请求用户菜单
      const menu = await requestUserMenusByRoleId(id)
      this.userMenus = menu.data
      localCache.setCache('userMenus', menu.data)
      router.push({ name: 'main' })
    },
    /**
     * 手机登录
     */
    loginByPhone(phoneInfo) {
      console.log('LOGIN....', phoneInfo)
    },
    /**
     * 加载本地缓存
     */
    loadLocalCache() {
      this.token = localCache.getCache('token')
      this.userInfo = localCache.getCache('userInfo')
      this.userMenus = localCache.getCache('userMenus')
    }
  }
})
export function setupStore(app: App<Element>): void {
  app.use(store)
  // 加载本地缓存
  const login = loginState()
  login.loadLocalCache()
}

export { store }
