import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    authTime: 0,
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
  },
})
