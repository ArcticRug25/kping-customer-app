import to from 'await-to-js'
import axios, { AxiosRequestConfig } from 'axios'
import { getFullURL } from '@/utils/http'
import { HTTP_CODE, HTTP_STATUS, RequestEnum, TIP_DURATION } from '@/enum'
import { getErrorMessage } from '@/utils'

interface Result<T = any> {
  code: number
  data: T
  message: string
}

function toastError(msg: string) {
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: TIP_DURATION,
  })
}

export default class Axios {
  private instance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public get<T>(config: AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: RequestEnum.GET,
    })
  }

  public post<T>(config: AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: RequestEnum.POST,
    })
  }

  public put<T>(config: AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: RequestEnum.PUT,
    })
  }

  public delete<T>(config: AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: RequestEnum.DELETE,
    })
  }

  public request<T>(config: AxiosRequestConfig) {
    return to<T>(
      new Promise((resolve, reject) => {
        this.instance
          .request<T>(config)
          .then((res) => resolve(res.data))
          .catch((err) => reject(err))
      }),
    )
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use((config) => {
      const { headers } = config
      if (!headers) throw new Error("Expected 'config' and 'config.headers' not to be undefined")
      const user = useUserStore()
      if (user.token) headers.Authorization = `Bearer ${user.token}`

      return {
        ...config,
        headers,
      }
    })
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        const { code } = response.data as Result
        let { message } = response.data
        if (code === HTTP_STATUS.success) {
          return response.data
        }
        message = getErrorMessage(message)
        toastError(message)
        return Promise.reject(new Error(message || 'Error'))
      },
      (error) => {
        const { code } = error.response?.data || error
        let { message } = error.response?.data || error
        if (code === HTTP_CODE.UNAUTHORIZED) {
          // token 过期
          const user = useUserStore()
          user.token = ''
          window.location.href = '/' // 跳转登录页
          setTimeout(() => {
            // ElMessageBox.alert(t('app.loginExpire'), t('app.tips'), {})
          }, 300)
        } else if (code === HTTP_CODE.UNPROCESSABLE_ENTITY) {
          toastError(message)
        } else {
          message = getErrorMessage(message)
          toastError(message)
        }
        return Promise.reject(new Error(message || 'Error'))
      },
    )
  }
}

const http = new Axios({
  // Web 侧可以通过 vite.config.js 中的 proxy 配置，指定代理
  // 小程序APP里需写完整路径，如 https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release
  // 可使用条件编译,详见 https://uniapp.dcloud.io/tutorial/platform.html#preprocessor
  // #ifdef H5
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  // #endif
  // #ifndef H5
  // @ts-ignore
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  // #endif
  adapter(config) {
    const { url, method, data, params, headers, baseURL, paramsSerializer } = config
    return new Promise((resolve, reject) => {
      uni.request({
        method: method!.toUpperCase() as any,
        url: getFullURL(baseURL || '', url!, params, paramsSerializer),
        header: headers,
        data,
        dataType: 'json',
        responseType: config.responseType,
        success: (res: any) => resolve(res),
        fail: (err: any) => reject(err),
      })
    })
  },
})

export { http }
