export const useCode = () => {
  const userStore = useUserStore()
  const code = ref(60)
  const codeStatus = ref(false)
  let countDownTimer: any = null

  const countDown = () => {
    codeStatus.value = true
    countDownTimer = setInterval(() => {
      code.value -= 1
      if (code.value <= 0) {
        clearInterval(countDownTimer)
        codeStatus.value = false
        code.value = 60
        userStore.authTime = 0
      }
    }, 1000)
  }

  onMounted(() => {
    // 计算验证码倒计时
    const codeTime = Math.floor((60000 - (Date.now() - userStore.authTime)) / 1000)
    if (userStore.authTime && codeTime > 0) {
      codeStatus.value = true
      code.value = codeTime
      countDown()
    }
  })

  onUnmounted(() => {
    if (userStore.authTime === 0) {
      userStore.authTime = Date.now()
    }
    clearInterval(countDownTimer)
  })

  return {
    code,
    codeStatus,
    countDown,
  }
}
