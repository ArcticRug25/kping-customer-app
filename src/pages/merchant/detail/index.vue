<template>
  <tm-app>
    <view class="k-w-100vw k-relative">
      <!-- 商家图片 -->
      <view class="merchant-bg-img k-absolute k-top-0 k-left-0 k-w-full -k-z1">
        <img
          class="k-w-full k-object-cover k-h-500"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
      </view>
      <!-- 头部导航栏 -->
      <view
        class="k-w-full k-h-100 k-bg-transparent k-pt-safe k-px-3 k-bg-white"
        :style="{ backgroundColor: `rgba(255,255,255,${opacity})` }">
        <!-- 左 -->
        <view class="k-h-full k-w-100rpx k-flex k-items-center k-relative">
          <view
            class="k-w-60 k-h-60 k-center k-rounded-50 k-absolute"
            :style="{ backgroundColor: `rgba(0,0,0, ${0.4 - opacity})` }">
            <view
              class="i-bi-chevron-left k-mr-3rpx k-text-lg"
              :style="{ color: `rgba(255,255,255, ${1 - opacity})` }"></view>
          </view>
          <view class="k-w-60 k-h-60 k-center k-absolute k-rounded-50" :style="{ opacity: opacity }">
            <view class="i-bi-chevron-left k-text-black k-mr-3rpx k-text-lg"></view>
          </view>
        </view>
        <!-- 右 -->
        <view></view>
      </view>
      <!-- 商家详情 -->
      <scroll-view scroll-y="true" class="merchant-container k-w-full k-box-border" @scroll="handleScroll">
        <view class="k-h-350rpx k-bg-red">22</view>
        <view class="k-h-350rpx">22</view>
        <view class="k-h-350rpx k-bg-pink">22</view>
        <view class="k-h-350rpx">22</view>
        <view class="k-h-350rpx k-bg-orange">22</view>
      </scroll-view>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'MerchantDetailPage',
})

// 透明度
const opacity = ref(0)

// 滚动事件
const handleScroll = ({ detail }: any) => {
  const { scrollTop } = detail
  if (scrollTop < 0 || scrollTop > 100) return
  opacity.value = Math.min(scrollTop / 100, 1)
}
</script>

<style lang="scss" scoped>
.merchant-container {
  height: calc(100vh - 100rpx - env(safe-area-inset-top) - env(safe-area-inset-bottom));
}

.merchant-bg-img {
  filter: blur(0);
  img {
    filter: blur(30rpx);
  }
}
</style>
