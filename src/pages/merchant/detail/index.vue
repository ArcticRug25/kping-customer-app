<template>
  <tm-app class="k-overflow-hidden">
    <view class="k-w-100vw k-relative">
      <!-- 商家图片 -->
      <view class="merchant-bg-img k-absolute k-top-0 k-left-0 k-w-full -k-z1">
        <img
          class="k-w-100vw k-object-cover k-h-500"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
      </view>
      <!-- 头部导航栏 -->
      <view
        class="k-w-full k-h-100 k-bg-transparent k-pt-safe k-px-3 k-bg-white"
        :style="{ backgroundColor: `rgba(255,255,255,${opacity})` }"
        @click="goBack">
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
      <scroll-view scroll-y="true" class="merchant-container k-w-full" @scroll="handleScroll">
        <!-- 商家相册 -->
        <scroll-view
          class="k-whitespace-nowrap k-w-full k-h-228 k-pl-2 k-py-2 k-box-border k-bg-#FEFFFE"
          scroll-x="true">
          <tm-image
            id="demo1"
            :width="280"
            :height="196"
            model="scaleToFill"
            class="k-inline-block k-mr-1 k-rounded-1"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
          <tm-image
            id="demo1"
            :width="280"
            :height="196"
            model="scaleToFill"
            class="k-inline-block k-mr-1 k-rounded-1"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
          <tm-image
            id="demo1"
            :width="280"
            :height="196"
            model="scaleToFill"
            class="k-inline-block k-mr-1 k-rounded-1"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
        </scroll-view>
        <!-- 商家信息 -->
        <view class="k-w-full k-bg-#FEFFFE k-box-border k-px-2">
          <view>
            <tm-text :font-size="36">ManDangDang</tm-text>
          </view>
          <!-- 评分 -->
          <Rate />
        </view>
        <view class="k-w-full k-h-1200 k-bg-#FEFFFE"> </view>
      </scroll-view>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
import Rate from '@/components/rate/index.vue'

defineOptions({
  name: 'MerchantDetailPage',
})

// 透明度
const opacity = ref(0)
const red = ref('red')
// 滚动事件
const handleScroll = ({ detail }: any) => {
  const { scrollTop } = detail
  if (scrollTop < 0 || scrollTop > 100) return
  opacity.value = Math.min(scrollTop / 100, 1)
}

// 返回
const goBack = () => {
  uni.navigateBack()
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
