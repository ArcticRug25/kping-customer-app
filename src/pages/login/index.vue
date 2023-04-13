<template>
  <tm-app class="k-w-100vw k-h-100vh">
    <image
      class="k-full k-absolute k-z1"
      src="https://cdn.tmui.design/tmui3/loginbase/assets/loginbg-white.9e842cd7.jpg" />
    <view class="k-full k-z2 k-flex k-flex-col k-items-center">
      <tm-icon
        @tap="closeLoginPage"
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
        class="login-input k-w-600rpx"
        placeholder="Please enter your phone number"
        prefix="tmicon-mobile-alt"
        prefix-color="#FEA600"
        focusColor="white"
        showClear></tm-input>
      <view class="k-py-10rpx"></view>
      <tm-input
        v-if="isPassword"
        :margin="[0, 24]"
        :height="100"
        :round="25"
        :shadow="2"
        class="login-input k-w-600rpx"
        password
        prefix-color="#FEA600"
        placeholder="Please enter your passport"
        showClear
        focusColor="white"
        prefix="tmicon-lock-fill"></tm-input>
      <view v-else class="k-flex k-items-center k-justify-between k-w-600rpx">
        <tm-input
          :margin="[0, 24]"
          :height="100"
          :round="25"
          :shadow="2"
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
          @tap="sendCode"
          :disabled="codeStatus"
          :style="{ opacity: codeStatus ? 0.5 : 1 }"
          :label="codeStatus ? code + 's' : 'Send'"></tm-button>
      </view>
      <view class="k-flex k-w-580rpx k-justify-end k-mb-2">
        <tm-text color="#9E9E9E" :font-size="24" @tap="isPassword = !isPassword">{{
          isPassword ? 'Authentication Code' : 'Password'
        }}</tm-text>
      </view>
      <tm-button
        class="login-btn k-shadow-md"
        :round="20"
        :width="600"
        :height="100"
        color="#F3AA3C"
        @tap="sendCode"
        label="Login"></tm-button>
      <view class="k-flex k-w-600 k-items-center k-py20rpx">
        <tm-checkbox :size="30" :round="10" color="orange" value="banner" label="I have read and agreed"></tm-checkbox>
        <tm-text class="k-ml-2" color="#FEA600">Privacy Policy</tm-text>
      </view>
    </view>
  </tm-app>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LoginPage',
})

const phone = ref('aaaaaaaaaaa')
// 密码登录还是验证码登录
const isPassword = ref(false)

const { code, codeStatus, countDown } = useCode()

// 关闭登录页面
const closeLoginPage = () => {
  uni.navigateBack()
}

const sendCode = () => {
  countDown()
}
</script>

<style lang="scss" scoped>
.login-input {
  ::v-deep & > view > view {
    background-color: white !important;
  }
}

.login-btn {
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.2) !important;
}

.send-btn {
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.2) !important;
}
</style>
