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
        class="k-w-full k-h-100 k-bg-transparent k-pt-safe k-bg-white"
        :style="{ backgroundColor: `rgba(255,255,255,${opacity})`, paddingTop: statusBarHeight + 'px' }"
        @click="goBack">
        <!-- 左 -->
        <view class="k-h-full k-w-100rpx k-flex k-box-border k-px-3 k-items-center k-relative">
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
      <scroll-view
        :scroll-top="rootScrollTop"
        scroll-y="true"
        scroll-with-animation
        class="merchant-container k-w-full"
        @scroll="handleScroll">
        <view>
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
          <view class="k-w-full k-bg-#FEFFFE k-box-border k-px-2 k-pb-2">
            <view>
              <tm-text :font-size="36">ManDangDang</tm-text>
            </view>
            <!-- 评分 -->
            <view class="k-flex k-w-full k-items-center k-mt-1">
              <Rate :rate="4.7" class="" />
              <tm-text color="#ed6f43" class="k-ml-10rpx">4.7</tm-text>
              <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
              <view class="k-flex-1 k-flex k-justify-end">
                <tm-text color="#2a2a2a" :font-size="20" class="k-justify-self-end">Hot pot</tm-text>
              </view>
            </view>
            <view class="k-bg-#F7F8F7 k-h-1px k-w-full k-my-2"></view>
            <!-- 营业信息 -->
            <view>
              <view class="k-flex k-items-center">
                <tm-text color="#2a2a2a" class="k-font-600" :font-size="22">Open</tm-text>
                <tm-text color="#2a2a2a" class="k-ml-2" :font-size="20">11:30-21:00</tm-text>
              </view>
              <tm-text color="#2a2a2a" class="k-font-600 k-mt-10rpx" :font-size="22"
                >15 North Bridge Road #07-01, Singapore 179098</tm-text
              >
              <tm-text color="#807F7F" :font-size="20" class="k-mt-10rpx">600m from your location</tm-text>
            </view>
          </view></view
        >
        <view class="k-bg-#F6F6F6 k-w-100vw k-h-10rpx"></view>
        <!-- 店铺优惠、商品信息 -->
        <view class="k-bg-#fefffe k-w-100vw k-relative">
          <!-- 导航 -->
          <view
            class="k-w-full k-h-80rpx k-flex k-justify-evenly k-items-center k-sticky k-top-0 k-left-0 k-bg-white k-z10">
            <view class="k-relative" v-for="(navItem, index) in navItems" :key="index" @tap="handleNavTo(navItem)">
              <tm-text class="k-font-600 k-transition" :font-size="activeNavItem === index ? 33 : 30">{{
                navItem.title
              }}</tm-text>
              <view
                v-if="activeNavItem === index"
                class="k-w-full k-h-9 k-bg-orange k-absolute k-bottom-6 -k-z1 k-bg-gradient-to-r k-from-#EA3300 k-to-#F3B368"></view
            ></view>
          </view>
          <!-- 已领券 -->
          <view id="voucher" class="k-w-full k-box-border k-pt-1 k-pb-2">
            <!-- 标题 -->
            <view class="k-w-full k-box-border k-px-2">
              <view class="k-flex k-items-center">
                <view class="k-bg-#F1AD4E k-w-36rpx k-h-36rpx k-center k-rounded-5rpx">
                  <tm-text class="i-bi-wallet-fill k-text-white k-text-26"></tm-text>
                </view>
                <tm-text :font-size="26" class="k-ml-10rpx k-font-600">Claimed Coupons</tm-text>
              </view>
            </view>
            <!-- 票券列表 -->
            <view class="k-w-full k-box-border">
              <VoucherItem bg-color="#FBEEE8" />
              <VoucherItem bg-color="#FBEEE8" />
              <VoucherItem bg-color="#FBEEE8" />
            </view>
          </view>
          <view class="k-bg-#F6F6F6 k-w-100vw k-h-10rpx"></view>
          <!-- 商品 -->
          <view id="product" class="k-w-full k-box-border k-py-2">
            <!-- 商家推荐 -->
            <view>
              <!-- 标题 -->
              <view class="k-w-full k-box-border k-px-2">
                <view class="k-flex k-items-center">
                  <view class="k-bg-#EC6F44 k-w-36rpx k-h-36rpx k-center k-rounded-5rpx">
                    <tm-text class="i-bi-cart-fill k-text-white k-text-26"></tm-text>
                  </view>
                  <tm-text :font-size="26" class="k-ml-10rpx k-font-600">Merchant's recommendations</tm-text>
                </view>
              </view>
              <!-- 菜品 -->
              <scroll-view
                class="k-whitespace-nowrap k-w-full k-h-255 k-pl-2 k-py-2 k-box-border k-bg-#FEFFFE"
                scroll-x="true">
                <view class="k-inline-block k-mr-1 k-w-270rpx k-text-center">
                  <view class="k-rounded-1 k-overflow-hidden">
                    <tm-image
                      :width="270"
                      :height="180"
                      model="scaleToFill"
                      class="k-rounded-1"
                      src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
                    <view class="k-bg-black k-absolute k-top-0 k-rounded-tl-1 k-py-4rpx k-px-1">
                      <tm-text :font-size="24" color="#DFBF8D" class="k-items-center k-justify-center"
                        >Top Pick</tm-text
                      >
                    </view>
                  </view>
                  <tm-text class="k-font-600 k-mt-1 k-items-center k-justify-center">Pot hot</tm-text>
                </view>
                <view class="k-inline-block k-mr-1 k-w-270rpx k-text-center">
                  <view class="k-rounded-1 k-overflow-hidden">
                    <tm-image
                      :width="270"
                      :height="180"
                      model="scaleToFill"
                      class="k-rounded-1"
                      src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
                    <view class="k-bg-black k-absolute k-top-0 k-rounded-tl-1 k-py-4rpx k-px-1">
                      <tm-text :font-size="24" color="#DFBF8D" class="k-items-center k-justify-center"
                        >Top Pick</tm-text
                      >
                    </view>
                  </view>
                  <tm-text class="k-font-600 k-mt-1 k-items-center k-justify-center">Pot hot</tm-text>
                </view>
                <view class="k-inline-block k-mr-1 k-w-270rpx k-text-center">
                  <view class="k-rounded-1 k-overflow-hidden">
                    <tm-image
                      :width="270"
                      :height="180"
                      model="scaleToFill"
                      class="k-rounded-1"
                      src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
                    <view class="k-bg-black k-absolute k-top-0 k-rounded-tl-1 k-py-4rpx k-px-1">
                      <tm-text :font-size="24" color="#DFBF8D" class="k-items-center k-justify-center"
                        >Top Pick</tm-text
                      >
                    </view>
                  </view>
                  <tm-text class="k-font-600 k-mt-1 k-items-center k-justify-center">Pot hot</tm-text>
                </view>
              </scroll-view>
            </view>
            <view class="k-bg-#F6F6F6 k-w-100vw k-h-10rpx"></view>
            <!-- 网友推荐 -->
            <view class="k-w-full k-box-border k-py2">
              <!-- 标题 -->
              <view class="k-w-full k-box-border k-px-2">
                <view class="k-flex k-items-center">
                  <view class="k-bg-#CF3822 k-w-36rpx k-h-36rpx k-center k-rounded-5rpx">
                    <tm-text class="i-bi-balloon-heart-fill k-text-white k-text-26"></tm-text>
                  </view>
                  <tm-text :font-size="26" class="k-ml-10rpx k-font-600">Net friend's recommendations</tm-text>
                </view>
              </view>
              <!-- 菜品 -->
              <view class="k-w-full k-box-border k-px-2 k-mt-2">
                <view class="k-flex k-items-center k-w-full">
                  <!-- 商品图片 -->
                  <view class="k-inline-block k-mr-1 k-w-270rpx k-text-center">
                    <view class="k-rounded-1 k-overflow-hidden k-relative">
                      <tm-image
                        :width="270"
                        :height="180"
                        model="scaleToFill"
                        class="k-rounded-1"
                        src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
                      <view class="k-bg-#C14529 k-absolute k-top-0 k-rounded-tl-1 k-py-4rpx k-px-1">
                        <tm-text :font-size="26" color="#FEFDFD" class="k-font-600 k-items-center k-justify-center"
                          >Top 1</tm-text
                        >
                      </view>
                    </view>
                  </view>
                  <!-- 商品信息 -->
                  <view class="k-flex-1 k-relative k-flex k-ml-1 k-flex-col k-h-180">
                    <!-- 商品名 -->
                    <view>
                      <tm-text color="#2a2a2a" :font-size="25" class="">Hot Pot</tm-text>
                    </view>
                    <!-- 商品价格 -->
                    <view class="k-mt-4rpx">
                      <tm-text color="#2a2a2a" :font-size="25" class="">$78</tm-text>
                    </view>
                    <!-- 商品标签 -->
                    <view class="k-mt-2 k-flex k-gap-1">
                      <view class="k-bg-#F6F6F6 k-inline-block k-rounded-4rpx k-px-1 k-py-2rpx">
                        <tm-text color="#2a2a2a" :font-size="25" class="">recommend</tm-text></view
                      >
                      <view class="k-bg-#F6F6F6 k-inline-block k-rounded-4rpx k-px-1 k-py-2rpx">
                        <tm-text color="#2a2a2a" :font-size="25" class="">hot</tm-text></view
                      >
                    </view>
                    <!-- 点赞推荐 -->
                    <view
                      class="k-absolute k-right-0 k-top-0 k-border-1 k-border-#B7B7B7 k-rounded-12 k-w-120 k-h-50 k-center">
                      <view class="i-bi-hand-thumbs-up k-mr-10rpx"></view>
                      <tm-text color="#B7B7B7" :font-size="24">30</tm-text>
                    </view>
                  </view>
                </view>
                <view class="k-bg-#F7F8F7 k-h-1px k-w-full k-my-3"></view>
                <view class="k-flex k-items-center k-w-full">
                  <!-- 商品图片 -->
                  <view class="k-inline-block k-mr-1 k-w-270rpx k-text-center">
                    <view class="k-rounded-1 k-overflow-hidden k-relative">
                      <tm-image
                        :width="270"
                        :height="180"
                        model="scaleToFill"
                        class="k-rounded-1"
                        src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
                      <view class="k-bg-#C14529 k-absolute k-top-0 k-rounded-tl-1 k-py-4rpx k-px-1">
                        <tm-text :font-size="26" color="#FEFDFD" class="k-font-600 k-items-center k-justify-center"
                          >Top 1</tm-text
                        >
                      </view>
                    </view>
                  </view>
                  <!-- 商品信息 -->
                  <view class="k-flex-1 k-relative k-flex k-ml-1 k-flex-col k-h-180">
                    <!-- 商品名 -->
                    <view>
                      <tm-text color="#2a2a2a" :font-size="25" class="">Hot Pot</tm-text>
                    </view>
                    <!-- 商品价格 -->
                    <view class="k-mt-4rpx">
                      <tm-text color="#2a2a2a" :font-size="25" class="">$78</tm-text>
                    </view>
                    <!-- 商品标签 -->
                    <view class="k-mt-2 k-flex k-gap-1">
                      <view class="k-bg-#F6F6F6 k-inline-block k-rounded-4rpx k-px-1 k-py-2rpx">
                        <tm-text color="#2a2a2a" :font-size="25" class="">recommend</tm-text></view
                      >
                      <view class="k-bg-#F6F6F6 k-inline-block k-rounded-4rpx k-px-1 k-py-2rpx">
                        <tm-text color="#2a2a2a" :font-size="25" class="">hot</tm-text></view
                      >
                    </view>
                    <!-- 点赞推荐 -->
                    <view
                      class="k-absolute k-right-0 k-top-0 k-border-1 k-border-#B7B7B7 k-rounded-12 k-w-120 k-h-50 k-center">
                      <view class="i-bi-hand-thumbs-up k-mr-10rpx"></view>
                      <tm-text color="#B7B7B7" :font-size="24">30</tm-text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
import Rate from '@/components/rate/index.vue'
import VoucherItem from '@/components/voucher/voucherItem.vue'

defineOptions({
  name: 'MerchantDetailPage',
})

interface MerchantNavItem {
  title: string
  id: string
}

const { statusBarHeight } = uni.$tm.u.getWindow()

const navItems = reactive<MerchantNavItem[]>([
  {
    title: 'Available',
    id: '#voucher',
  },
  {
    title: 'Product',
    id: '#product',
  },
])

const activeNavItem = ref(0)

const rootScrollTop = ref(0)

// 透明度
const opacity = ref(0)
const red = ref('red')
// 滚动事件
const handleScroll = ({ detail }: any) => {
  const { scrollTop } = detail
  if (scrollTop < 0 && opacity.value !== 0) {
    opacity.value = 0
  } else if (scrollTop > 100 && opacity.value !== 1) {
    opacity.value = 1
  } else if (scrollTop >= 0 && scrollTop <= 100) {
    opacity.value = scrollTop / 100
  }
}

// 滚动指定位置
const handleNavTo = (navItem: MerchantNavItem) => {
  rootScrollTop.value = 100
}

// 返回
const goBack = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.merchant-container {
  height: calc(100vh - 100rpx - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  /* overscroll-behavior-y: contain; */
}

.merchant-bg-img {
  filter: blur(0);
  img {
    filter: blur(30rpx);
  }
}
</style>
