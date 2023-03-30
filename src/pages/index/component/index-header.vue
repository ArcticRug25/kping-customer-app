<template>
  <view
    :style="{ backgroundColor: isDark ? '#fff' : 'transparent' }"
    class="header-container k-pt-safe k-h-200 k-w-full k-box-border k-ease-in k-duration-300 k-bg-transparent k-fixed k-z-999"
    k-p="x3">
    <!-- 头部搜索框 -->
    <view class="header-middle k-mt-2 k-flex k-items-center">
      <view class="kping-logo k-pt-1">
        <image class="k-w-144rpx k-h-60rpx" src="/static/images/kping-logo.png"></image>
      </view>
      <view
        class="header-search k-z-999 k-flex k-items-center k-ease-in k-duration-300 k-rounded-50 k-box-border k-justify-between k-flex-1"
        k-p="x4 y2"
        :style="{ backgroundColor: isDark ? '#eee' : '#fff' }">
        <text class="k-text-xs k-text-c3">Noodles</text>
        <view class="i-bi-search k-text-c3 k-text-xs"></view>
      </view>
      <view
        class="i-bi-qr-code-scan k-w-30px k-ml-2 k-ease-in k-duration-300"
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
</script>

<style lang="scss" scoped>
.index-header {
  .header-bg-img {
    filter: blur(0);

    img {
      filter: blur(30rpx);
    }
  }

  .carousel {
    ::v-deep .uni-swiper-slide-frame {
      div {
        width: 90%;
        border-radius: 10rpx;
        margin: 0 auto;
      }
    }
  }
}
</style>
