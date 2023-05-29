<template>
  <view class="k-bg-white k-py-2">
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-w-full k-flex k-box-border k-px-2 k-min-h-210 k-mb-3" @tap="handleGo">
      <view class="merchant-img k-w-180rpx k-h-180rpx">
        <image
          class="k-full k-rounded-1"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
          mode="aspectFill" />
      </view>
      <view class="merchant-infos k-ml-2 k-flex-1 k-border-b k-border-#EDECED">
        <!-- 商铺名 -->
        <view class="k-flex k-items-center k-justify-between">
          <tm-text :font-size="30" class="k-font-600">Man Dang Dang</tm-text>
          <view class="k-bg-#FCEFE9 k-text-#ED7044 k-text-xs k-px-10rpx k-py-4rpx k-rounded-1">take-out</view>
        </view>
        <!-- 评分 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <Rate :rate="4.7" :width="28" />
          <tm-text color="#ed6f43" class="k-ml-10rpx" :font-size="26">4.7</tm-text>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-16rpx">$60/person</tm-text>
          <tm-text color="#D8AD7B" :font-size="20" class="k-absolute k-right-0">11:00 open</tm-text>
        </view>
        <!-- 位置 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <tm-text color="#666566" :font-size="26">BBQ</tm-text>
          <tm-text color="#666566" :font-size="20" class="k-ml-16rpx">15 North Bridge Road</tm-text>
          <tm-text class="k-absolute k-right-0" color="#2a2a2a" :font-size="20">2.2km</tm-text>
        </view>
        <!-- 券 -->
        <view class="k-flex k-w-full k-items-center k-mt-1 k-relative">
          <view class="k-bg-#F1AD4E k-w-32rpx k-h-32rpx k-center k-rounded-5rpx">
            <tm-text class="i-bi-wallet-fill k-text-white k-text-22"></tm-text>
          </view>
          <tm-text color="#2a2a2a" :font-size="20" class="k-ml-10rpx">Get $60 off $100</tm-text>
        </view>
      </view>
    </view>
    <view class="k-center k-h-80">
      <tm-text color="#ccc">No more</tm-text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Rate from '@/components/rate/index.vue'

defineOptions({
  name: 'merchantList',
})

const handleGo = () => {
  uni.navigateTo({
    url: '/pages/merchant/detail/index',
  })
}
</script>

<style lang="scss" scoped></style>
