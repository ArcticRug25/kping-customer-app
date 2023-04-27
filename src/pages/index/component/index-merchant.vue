<template>
  <view>
    <view
      class="k-w-94vw k-rounded-2 k-bg-white k-mx-auto k-overflow-hidden"
      @click="goPage('/pages/merchant/detail/index')">
      <view class="k-relative k-h-200">
        <image
          class="k-w-full k-h-full"
          src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/76b35202211111525519226.jpg" />
        <view
          class="k-absolute k-flex k-items-center k-z-2 k-top-18 k-left-20 k-bg-white k-rounded-10 k-px-18rpx k-py-1">
          <image
            class="k-rounded-50 k-w-38 k-h-38"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/8b747202211111525572176.jpg" />
          <text class="k-text-xs k-ml-10rpx">ManDangDang</text>
          <text class="k-ml-3 k-bg-#1B1919 k-text-white k-rounded-10 k-h-38rpx k-leading-40rpx k-text-20rpx k-px-10rpx"
            >FOOD</text
          >
        </view>
      </view>
      <view class="k-p20rpx k-flex k-gap-2">
        <view class="k-flex-1 k-center k-flex-col">
          <image
            class="k-h-214rpx k-w-full"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
          <text class="k-truncate k-w-24vw k-text-sm k-p-1 k-text-#333"
            >Beaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaer</text
          >
          <text class="k-text-sm k-font-semibold">$10.00</text>
        </view>
        <view class="k-flex-1 k-center k-flex-col">
          <image
            class="k-h-214rpx k-w-full"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
          <text class="k-truncate k-w-24vw k-text-sm k-p-1 k-text-#333"
            >Beaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaer</text
          >
          <text class="k-text-sm k-font-semibold">$10.00</text>
        </view>
        <view class="k-flex-1 k-center k-flex-col">
          <image
            class="k-h-214rpx k-w-full"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
          <text class="k-truncate k-w-24vw k-text-sm k-p-1 k-text-#333"
            >Beaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaer</text
          >
          <text class="k-text-sm k-font-semibold">$10.00</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'IndexMerchant',
})

const goPage = (url: string) => {
  uni.navigateTo({
    url,
  })
}
</script>
