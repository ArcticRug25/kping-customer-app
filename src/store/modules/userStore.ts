import { defineStore } from 'pinia'

interface UserStore {
  authTime: number
  areaCode: string
  token: string
}

export default defineStore('user', {
  state: (): UserStore => ({
    authTime: 0,
    areaCode: '65',
    token: '',
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        key: 'authTime',
        paths: ['authTime'],
      },
      {
        storage: localStorage,
        key: 'token',
        paths: ['token'],
      },
    ],
  },
})
