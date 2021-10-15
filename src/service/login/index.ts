import Request from '@/service'
import { IAccount, IDataType, ILoginResult } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}
/**
 * 登录
 * @param account 用户信息
 */
export function accountLogin(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
/**
 * 获取用户信息
 * @param id 用户id
 */
export function requestUserInfoById(id) {
  return Request.get<IDataType>({
    url: LoginAPI.UserInfo + id
  })
}
/**
 * 根据用户id获取菜单
 * @param id 用户id
 * @returns 菜单
 */
export function requestUserMenusByRoleId(id: number) {
  return Request.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
