<template>
  <view
    :class="{ 'is-dark': isDark }"
    class="k-h-200 k-w-full k-ease-in k-duration-300 k-bg-transparent k-fixed k-z-999">
    <!-- 头部功能栏 -->
    <view class="k-my-2 k-flex k-items-center">
      <view class="kping-logo k-pt-1">
        <image class="k-w-144rpx k-h-60rpx" src="/static/images/kping-logo.png"></image>
      </view>
      <tm-button
        :margin="[10, 0]"
        :round="4"
        :shadow="1"
        :width="146"
        :height="60"
        :font-size="25"
        color="#1078ff"
        size="normal"
        @tap="navigateToOtherPage('/pages/street/charge/index')"
        label="Charging"></tm-button>
      <tm-button
        :margin="[30, 0]"
        :round="4"
        :shadow="1"
        :width="146"
        :height="60"
        color="#1078ff"
        :font-size="25"
        size="normal"
        @tap="navigateToOtherPage('/pages/street/street-view/index')"
        label="Street View"></tm-button>
    </view>
    <!-- 头部搜索框 -->
    <view class="header-middle k-w-full k-flex k-items-center">
      <view
        class="header-search k-z-999 k-flex k-items-center k-ease-in k-duration-300 k-rounded-50 k-box-border k-justify-between k-flex-1 k-ml-5"
        k-p="x4 y2"
        :style="{ backgroundColor: isDark ? '#eee' : '#fff' }">
        <text class="k-text-xs k-text-c3">Noodles</text>
        <view class="i-bi-search k-text-c3 k-text-xs"></view>
      </view>
      <view
        class="i-bi-qr-code-scan k-w-70 k-mx2 k-ease-in k-duration-300"
        @tap="handleScanCode"
        :style="{ color: isDark ? '#000' : '#fff' }" />
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'IndexHeader',
})

defineProps<{
  isDark: boolean
}>()

const navigateToOtherPage = (path: string) => {
  uni.navigateTo({
    url: path,
  })
}

// 扫码
const handleScanCode = async () => {
  const { result } = (await uni.$tm.u.scanCode(false, ['qrCode'])) as UniApp.ScanCodeSuccessRes
  if (!result) {
    uni.showToast({
      title: 'Scan failed',
      icon: 'error',
    })
    return
  }

  const params = result.split('?')[1]

  uni.navigateTo({
    url: `/pages/scan-result/index?${params}`,
  })
}
</script>

<style lang="scss" scoped>
.is-dark {
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
