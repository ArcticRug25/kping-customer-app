<template>
  <view class="k-w-100vw k-h-100vh k-relative k-overflow-hidden k-bg-black">
    <video
      :controls="false"
      :show-fullscreen-btn="false"
      :show-playfullscreen-btn="false"
      :show-play-btn="false"
      :show-center-play-btn="false"
      :show-progress="false"
      :vslide-gesture-in-fullscreen="false"
      @timeupdate="videoTimeUpdateEvent"
      ref="videoRef"
      playsinlin
      class="k-full k-absolute k-z1"
      src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/consumer/ad.mov"
      autoplay
      object-fit="fill">
      <cover-view
        class="k-absolute k-top-0 k-rounded-12 k-center k-py-14rpx k-px-1 k-bg-black k-text-#CBCBCB k-bg-opacity-25 k-border-1 k-border-#f5f5f5 k-right-0 k-m-4 k-z99"
        :style="{ top: statusBarHeight + 'px' }">
        <cover-view class="k-w-90 k-flex k-text-center k-text-sm">{{
          videoCountdown <= 0 ? 0 + 's' : videoCountdown + 's'
        }}</cover-view>
        <cover-view class="k-h-30 k-w-1 k-bg-#CBCBCB"></cover-view>
        <cover-view
          class="k-w-90 k-flex k-text-center k-text-sm k-relative k-z99"
          @tap="navigateToOtherPage('/pages/index/index')"
          >Skip</cover-view
        >
      </cover-view>
    </video>
  </view>
</template>

<script setup lang="ts">
const { statusBarHeight } = uni.$tm.u.getWindow()

const videoRef = ref(null) as any
const videoCountdown = ref(0) as any

const videoTimeUpdateEvent = (e: any) => {
  const { currentTime, duration } = e.detail

  videoCountdown.value = (duration - currentTime).toFixed(0)
}
const navigateToOtherPage = (path: string) => {
  uni.navigateBack()
}
</script>

<style scoped></style>
