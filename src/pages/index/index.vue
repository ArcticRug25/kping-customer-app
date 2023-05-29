<template>
  <tm-app ref="appRef">
    <IndexHeader :isDark="isDark" :style="{ 'padding-top': statusBarHeight + 'px' }" />
    <view
      class="index-header k-relative k-overflow-hidden k-w-100vw"
      :style="{ height: listimg.length ? 630 + statusBarHeight * 2 + 'rpx' : 200 + statusBarHeight * 2 + 'rpx' }">
      <!-- 背景图 -->
      <view class="header-bg-img k-absolute k-w-full k-h-full k-top-0 k-overflow-hidden">
        <!-- #ifdef APP-PLUS  -->
        <img
          class="k-w-full k-h-full k-scale-[1.5]"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/18984202211231016453160.jpg" />
        <!-- #endif  -->
        <!-- #ifdef H5 -->
        <img class="k-w-full k-h-full k-scale-[1.5]" src="/static/images/IMG_4434.jpg" />
        <!-- #endif -->
      </view>
      <!-- 轮播图 -->
      <view
        v-if="listimg.length"
        class="header-carousel k-box-border"
        :style="{ marginTop: 200 + statusBarHeight * 2 + 'rpx' }">
        <tm-carousel
          :height="400"
          :duration="1200"
          :autoplay="false"
          model="dot"
          class="carousel"
          :list="listimg"></tm-carousel>
      </view>
    </view>
    <!-- 导航栏 -->
    <view class="k-center k-bg-white k-h-180">
      <view
        v-for="(item, index) in indexNavData"
        :key="index"
        class="k-center k-flex-col k-flex-1"
        @click="navigateToOtherPage(item.path)">
        <view class="k-center k-rounded-50 k-w-90 k-h-90 k-shadow-lg" :style="{ background: item.color }">
          <view :class="item.icon" class="k-text-white k-text-xl"></view>
        </view>
        <tmText :fontSize="24" color="#333333" class="k-mt-2">{{ item.name }}</tmText>
      </view>
    </view>
    <!-- 广告图 -->
    <IndexBanner />
    <!-- 商家列表 -->
    <IndexMerchant />
  </tm-app>
</template>

<script setup lang="ts">
import { onPageScroll, onShow } from '@dcloudio/uni-app'
import IndexBanner from './component/index-banner.vue'
import IndexHeader from './component/index-header.vue'
import IndexMerchant from './component/index-merchant.vue'

const listimg = [
  'https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/18984202211231016453160.jpg',
  'https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/18984202211231016453160.jpg',
  'https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/18984202211231016453160.jpg',
  'https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/18984202211231016453160.jpg',
]

const indexNavData = [
  {
    name: 'Charging',
    icon: 'i-bi-lightning-charge-fill',
    path: '/pages/street/charge/index',
    color: 'linear-gradient(180deg, #f3afad 0%, #ee7571 100%)',
  },
  {
    name: 'Street View',
    icon: 'i-bi-camera-fill',
    path: '/pages/street/street-view/index',
    color: 'linear-gradient(180deg, #F6C89B 0%, #F19A56 100%)',
  },
  {
    name: 'Vouchers',
    icon: 'i-bi-ticket-detailed-fill',
    path: '/pages/voucher/index',
    color: 'linear-gradient(180deg, #B1C5FA 0%, #7288F7 100%)',
  },
  {
    name: 'F&B',
    icon: 'i-bi-handbag-fill',
    path: '/pages/fb/index',
    color: 'linear-gradient(180deg, #FAE19E 0%, #F4BC5D 100%)',
  },
]

const { statusBarHeight } = uni.$tm.u.getWindow()
const isDark = ref(false)

const navigateToOtherPage = (path: string) => {
  uni.navigateTo({
    url: path,
  })
}
const a = ref(0)

onShow(() => {
  uni.$on('skipAd', () => {
    a.value = 1
    uni.navigateTo({
      url: '/pages/mask/voucherModal',
    })
  })
})

uni.navigateTo({
  url: '/pages/ad/index',
})

onPageScroll(({ scrollTop }) => {
  if (scrollTop >= uni.$tm.u.topx(100) + statusBarHeight) {
    isDark.value = true
  } else {
    isDark.value = false
  }
})

// #ifdef APP-PLUS
watch(isDark, (val) => {
  val ? plus.navigator.setStatusBarStyle('dark') : plus.navigator.setStatusBarStyle('light')
})
// #endif
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
