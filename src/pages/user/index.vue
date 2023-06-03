<template>
  <tm-app>
    <!-- 个人中心头部 -->
    <view class="k-w-full k-flex k-justify-center k-h-500 k-relative k-pt-safe">
      <image class="k-w-full k-h-500 k-absolute k-top-0 k-left-0 k-z-0" src="@/static/images/user-bg.png" />
      <!-- 个人信息 -->
      <view class="k-w-full k-relative k-flex k-z-1 k-mt-82rpx k-h-160rpx">
        <view class="k-w-160 k-h-160 k-rounded-50 k-bg-white k-mx-32rpx k-overflow-hidden">
          <tm-image :height="150" :width="150" src="../../static/images/user.png" />
        </view>
        <view v-if="isLogin" class="k-flex k-flex-col k-justify-center">
          <tm-text class="k-mb-2" :fontSize="36" color="#fff">ArcticRug25</tm-text>
          <tm-text :fontSize="28" color="#fff">18971330757</tm-text>
        </view>
        <view v-else class="k-flex k-flex-col k-justify-center" @click="toLogin">
          <tm-text class="k-mb-2" :fontSize="36" color="#fff">Login/Register</tm-text>
        </view>
      </view>
      <!-- 导航栏 -->
      <view
        class="k-flex k-justify-around k k-absolute -k-bottom-61rpx k-w-686 k-h-228 k-mx-auto k-bg-white k-flex k-rounded-5 k-shadow-[0_6rpx_20rpx_rgba(64,128,255,0.1)]">
        <view class="k-col-center">
          <view class="nav-item k-center k-w-80 k-h-80 k-rounded-30rpx k-bg-#F7D3B7 k-mb-3">
            <image class="k-w-30rpx k-h-37rpx" src="@/static/images/notice.png" />
          </view>
          <tm-text :fontSize="26" color="#78828e">Message</tm-text>
        </view>
        <view class="k-col-center">
          <view class="nav-item k-center k-w-80 k-h-80 k-rounded-30rpx k-bg-#BCDDFC k-mb-3">
            <image class="k-w-30rpx k-h-37rpx" src="@/static/images/safety.png" />
          </view>
          <tm-text :fontSize="26" color="#78828e">Security</tm-text>
        </view>

        <view class="k-col-center">
          <tm-badge dot color="red">
            <view
              class="nav-item k-center k-w-80 k-h-80 k-rounded-30rpx k-bg-gradient-to-b k-from-#B1C5FA k-to-#7288F7 k-mb-3">
              <text class="i-bi-ticket-detailed-fill k-text-white k-text-xl"></text>
            </view>
          </tm-badge>
          <tm-text :fontSize="26" color="#78828e">Voucher</tm-text>
        </view>
      </view>
    </view>
    <!-- 选项设置 -->
    <view class="k-w-686rpx k-mx-auto k-rounded-5 k-mt-110rpx k-shadow-[0_0_20rpx_rgba(64,128,255,0.2)]">
      <view class="option-item">
        <text class="i-bi-gear"></text>
        <tm-text color="#78828E" :fontSize="28">System setting</tm-text>
      </view>
      <view class="option-item">
        <text class="i-bi-send"></text>
        <tm-text color="#78828E" :fontSize="28">Push setting</tm-text>
      </view>
      <view class="option-item">
        <text class="i-bi-telephone-forward"></text>
        <tm-text color="#78828E" :fontSize="28">Contact us</tm-text>
      </view>
      <view class="option-item">
        <text class="i-bi-exclamation-circle"></text>
        <tm-text color="#78828E" :fontSize="28">About us</tm-text>
      </view>
      <view class="option-item" @click="logOut">
        <text class="i-bi-power"></text>
        <tm-text color="#78828E" :fontSize="28">Log out</tm-text>
      </view>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'UserPage',
})

// 登录状态
const isLogin = ref(false)

const authTo = (url: string) => {
  uni.navigateTo({
    url: '/pages/mask/authModal',
  })
}

const toLogin = () => {
  uni.navigateTo({
    url: '/pages/login/index',
  })
}

const logOut = () => {
  uni.showModal({
    title: 'Log out',
    content: 'Are you sure you want to log out?',
    success: (res) => {
      if (res.confirm) {
        uni.showToast({
          title: 'Log out successfully',
          icon: 'none',
        })
      }
    },
  })
}
</script>

<style lang="scss" scoped>
.avatar-img {
  filter: drop-shadow(0 4rpx 10rpx rgba(0, 0, 0, 0.2));
}

.nav-item {
  filter: drop-shadow(0 3rpx 8rpx rgba(0, 0, 0, 0.15));
}

.option-item {
  width: 100%;
  height: 90rpx;
  display: flex;
  box-sizing: border-box;
  padding: 0 36rpx;
  align-items: center;

  text {
    margin-right: 20rpx;
    color: #78828e;
    font-size: 38rpx;
  }
}
</style>
