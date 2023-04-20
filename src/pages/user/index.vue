<template>
  <tm-app> </tm-app>
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
</script>

<style lang="scss" scoped>
.avatar-img {
  filter: drop-shadow(0 4rpx 10rpx rgba(0, 0, 0, 0.2));
}
</style>
