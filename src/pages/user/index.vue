<template>
  <tm-app>
    <tm-sheet _class="k-pt-safe" class="k-bg-gradient-to-r k-from-#E68048 k-to-#DE3925" :margin="[0]">
      <view class="k-flex">
        <tm-image class="avatar-img k-rounded-50" :width="120" :height="120" src="/static/images/f.png" />
        <view class="k-ml-3 k-box-border k-py-2">
          <tm-text color="white" @tap="authTo('')">Login/Register</tm-text>
        </view>
      </view>
    </tm-sheet>
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
    url: '/pages/mask/index',
  })
}
</script>

<style lang="scss" scoped>
.avatar-img {
  filter: drop-shadow(0 4rpx 10rpx rgba(0, 0, 0, 0.2));
}
</style>
