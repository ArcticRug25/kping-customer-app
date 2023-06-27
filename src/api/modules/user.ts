import { http } from '../http'
import { GetAccountInfoModel, LoginParams } from '../model/userModel'

function login(data: LoginParams) {
  return http.post<GetAccountInfoModel>({ url: '/auth/member/signin', data })
}

/**
 * 获取验证码
 * @param phone 手机号
 */
// function getCode(phone: string): Promise<{ num: number }> {
//   return http.get('random/code', {
//     params: {
//       phone,
//     },
//   })
// }
export default {
  login,
  // getCode,
}
