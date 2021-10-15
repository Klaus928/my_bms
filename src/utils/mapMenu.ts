import { RouteRecordRaw } from 'vue-router'
import localCache from './cache'
export function mapMenuToRoute(userMenus?: any): RouteRecordRaw[] {
  if (!localCache.getCache('userMenus')) return []
  if (!userMenus) {
    userMenus = localCache.getCache('userMenus')
  }
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  // 1 加载所有的routes
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // const route = require('../router/main/' + key.replace(/.\//, ''))
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取
  /**
   * type=1 有children 2 无
   * @param menus 用户菜单
   * @returns 路由
   */
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
