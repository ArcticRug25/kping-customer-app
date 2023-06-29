import { http } from '../http'
import { GetAccountInfoModel, LoginParams, SmsParams } from '../model/userModel'

function login(data: LoginParams) {
  return http.post<GetAccountInfoModel>({ url: '/auth/member/signin', data })
}

/**
 * 获取验证码
 * @param phone 手机号
 */
function getCode(data: SmsParams) {
  return http.post({
    url: '/sms',
    data,
  })
}

export default {
  login,
  getCode,
}
