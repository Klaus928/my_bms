/* eslint-disable @typescript-eslint/no-unused-vars */
export interface userInfo extends Object {
  name: string
  password: string
}
export interface phoneInfo extends Object {
  phone: number | undefined
  verifyCode: number | undefined
}
export interface IUserInfo {
  count: number
  userInfo: {
    name: string
  }
  token: string
  userMenus: any[]
}
