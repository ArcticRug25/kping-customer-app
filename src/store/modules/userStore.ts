import { defineStore } from 'pinia'

export interface UserInfo {
  id?: number
  username?: string
  email?: string
  phonenumber?: string
}

interface UserStore {
  info: UserInfo
  authTime: number
  areaCode: string
  token: string
}

export default defineStore('user', {
  state: (): UserStore => ({
    info: {
      email: '',
      phonenumber: '',
      username: '',
      id: 0,
    },
    authTime: 0,
    areaCode: '65',
    token: '',
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    H5Storage: localStorage,
    strategies: [
      {
        storage: localStorage,
        key: 'userAuth',
        paths: ['authTime', 'token'],
      },
    ],
  },
})
