import { UserInfo } from '@/store/modules/userStore'

export interface LoginParams {
  phone: string
  code?: string
  password?: string
}

export const Member = '1'

export interface SmsParams {
  phone: string
  areaCode: number
  type: typeof Member
}

export interface GetAccountInfoModel {
  user: UserInfo
  access_token: string
}
