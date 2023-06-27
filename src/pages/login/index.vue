<template>
  <tm-app class="k-w-100vw k-h-100vh">
    <image
      class="k-full k-absolute k-z1"
      src="https://cdn.tmui.design/tmui3/loginbase/assets/loginbg-white.9e842cd7.jpg" />
    <view class="k-full k-z2 k-flex k-flex-col k-items-center">
      <tm-icon
        @click="closeLoginPage"
        color="#9e9e9e"
        class="k-absolute k-left-40 k-pt-safe k-top-20 k-z3"
        name="tmicon-times"></tm-icon>
      <view class="k-h-200rpx"></view>
      <view class="k-rounded-50 k-w-156rpx k-h-156rpx k-center k-bg-white k-border-base">
        <tm-image :width="100" model="center" :height="100" src="/static/images/kping-logo.png" />
      </view>
      <view class="k-py-10rpx"></view>
      <tm-text class="k-font-700" color="#202022" :fontSize="46">K-Ping</tm-text>
      <tm-text class="k-font-700" color="#9E9E9E" :fontSize="30">Welcome to log in and use our services</tm-text>
      <view class="k-py-40rpx"></view>
      <tm-input
        :height="100"
        :round="25"
        v-model="phone"
        :shadow="2"
        class="login-input phone-input k-w-600rpx"
        placeholder="Please enter your phone number"
        prefix="tmicon-mobile-alt"
        prefix-color="#FEA600"
        focusColor="white"
        showClear>
        <template #left>
          <view
            v-show="!isPassword"
            class="k-absolute k-flex k-items-center k-left-45rpx k-z6"
            @click="handleChooseAreaCode">
            <view
              class="k-align-middle k-mr-8rpx k-w-90rpx k-text-28rpx k-text-center"
              :style="{ color: areaCode ? '' : '#ccc' }">
              {{ areaCode ? '+' + areaCode : 'Area' }}
            </view>
            <view class="k-h-40rpx k-w-1px k-border-l k-border-#ccc"></view>
          </view>
        </template>
      </tm-input>
      <view class="k-py-10rpx"></view>
      <view v-show="isPassword">
        <tm-input
          :margin="[0, 24]"
          :height="100"
          :round="25"
          :shadow="2"
          v-model="password"
          class="login-input k-w-600rpx"
          password
          prefix-color="#FEA600"
          placeholder="Please enter your passport"
          showClear
          focusColor="white"
          prefix="tmicon-lock-fill"></tm-input>
      </view>
      <view v-show="!isPassword" class="k-flex k-items-center k-justify-between k-w-600rpx">
        <tm-input
          :margin="[0, 24]"
          :height="100"
          :round="25"
          :shadow="2"
          v-model="authCode"
          class="login-input k-w-360rpx"
          prefix-color="#FEA600"
          placeholder="Authentication code"
          showClear
          focusColor="white"
          prefix="tmicon-lock-fill">
        </tm-input>
        <tm-button
          class="send-btn"
          :width="200"
          :height="75"
          color="#F3AA3C"
          @click="sendCode"
          :disabled="codeStatus"
          :style="{ opacity: codeStatus ? 0.5 : 1 }"
          :label="codeStatus ? code + 's' : 'Send'"></tm-button>
      </view>
      <view class="k-flex k-w-580rpx k-justify-end k-mb-2">
        <tm-text color="#9E9E9E" :font-size="24" @click="isPassword = !isPassword">{{
          isPassword ? 'Authentication Code' : 'Password'
        }}</tm-text>
      </view>
      <tm-button
        class="login-btn k-shadow-md"
        :round="20"
        :width="600"
        :height="100"
        color="#F3AA3C"
        @click="handleLogin"
        label="Login"></tm-button>
      <view class="k-flex k-w-600 k-items-center k-py20rpx">
        <tm-checkbox :size="30" :round="10" color="orange" value="banner" label="I have read and agreed"></tm-checkbox>
        <tm-text class="k-ml-2" color="#FEA600">Privacy Policy</tm-text>
      </view>
    </view>
    <!-- 错误提示 -->
    <tm-notification color="#E04835" class="error-tip" placement="top" ref="msg" :duration="2000"></tm-notification>
  </tm-app>
</template>

<script setup lang="ts">
import { userApi } from '@/api'
import tmNotification from '@/tmui/components/tm-notification/tm-notification.vue'

defineOptions({
  name: 'LoginPage',
})
const userStore = useUserStore()
const phone = ref('18971330757')
// 验证码
const authCode = ref('')
// 密码
const password = ref('wyw123456')
// 密码登录还是验证码登录
const isPassword = ref(true)
const accountInputML = computed(() => {
  return isPassword.value ? 0 : '110rpx'
})

// 手机区域码
const { areaCode } = toRefs(useUserStore())

// 验证码倒计时功能
const { code, codeStatus, countDown } = useCode()

// 关闭登录页面
const closeLoginPage = () => {
  uni.navigateBack()
}

const msg = ref<InstanceType<typeof tmNotification> | null>(null)

// 输入错误提示
function errorTip(error: string) {
  nextTick(() => {
    msg.value?.show({ label: error })
  })
}

// 验证表单
const validateForm = (): boolean => {
  if (!areaCode) {
    errorTip('Please select the area code')
    return false
  }

  if (!uni.$tm.u.isPhone(phone.value)) {
    errorTip('Please enter the correct phone number.')
    return false
  }

  if (!isPassword.value && authCode.value.length < 6) {
    errorTip('Please enter the correct verification code.')
    return false
  }
  return true
}

// 发送验证码
const sendCode = () => {
  const isRight = validateForm()
  if (isRight) {
    countDown()
  }
}

// 选择区域码
const handleChooseAreaCode = () => {
  uni.navigateTo({
    url: '/pages/login/areaCode',
  })
}

// 登录
const handleLogin = async () => {
  const isRight = validateForm()
  if (!isRight) return
  if (isPassword.value) {
    // 密码登录
    const [err, data] = await userApi.login({ username: phone.value, password: password.value })
    if (err) {
      return
    }
    userStore.token = data.access_token
  } else {
    // 验证码登录
  }
}
</script>

<style lang="scss" scoped>
.login-input {
  ::v-deep & > view > view {
    background-color: white !important;
  }

  &.phone-input {
    ::v-deep input {
      position: relative;
      margin-left: v-bind(accountInputML);
    }
  }
}

.login-btn {
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.2) !important;
}

.send-btn {
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.2) !important;
}

.error-tip {
  top: calc(env(safe-area-inset-top) + 24rpx) !important;
}
</style>
