import type { App } from 'vue'
import {
  accountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import { createPinia, defineStore } from 'pinia'
import router from '@/router'
import { mapMenuToRoute } from '@/utils/mapMenu'
import localCache from '@/utils/cache'
import { IUserInfo } from '@/types/user'
const store = createPinia()
export const loginState = defineStore('login', {
  state(): IUserInfo {
    return {
      count: 1,
      userInfo: {
        name: ''
      },
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
      const info: any = await requestUserInfoById(id)
      this.userInfo = info.data
      localCache.setCache('userInfo', info.data)
      // 请求用户菜单
      const menu = await requestUserMenusByRoleId(id)
      this.userMenus = menu.data
      localCache.setCache('userMenus', menu.data)
      // userMenus => routes
      const routes = mapMenuToRoute(menu.data)
      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      router.push({ name: 'overview' })
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
      const routes = mapMenuToRoute(this.userMenus)
      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
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
