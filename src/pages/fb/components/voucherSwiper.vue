<template>
  <view class="k-mb-2">
    <swiper
      class="k-w-full k-box-border k-h-260 k-px-2"
      indicator-dots
      indicator-active-color="#DF3D30"
      circular
      :duration="500">
      <swiper-item class="k-full">
        <view class="k-rounded-2 k-flex k-full k-items-center k-bg-white">
          <view class="voucher-img k-h-260 k-w-260">
            <image
              class="k-full k-rounded-2"
              src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
              mode="aspectFill" />
          </view>
          <view class="voucher-infos k-ml-2 k-flex-1 k-flex k-flex-col k-box-border k-h-full k-py-2 k-relative">
            <tm-text class="k-font-600" :font-size="32">Coconut Chicken</tm-text>
            <tm-text color="#666" :font-size="26">Chinese · Asian</tm-text>
            <tm-text color="#666" :font-size="26">Waiting Time 5 Mins</tm-text>
            <view
              class="k-bg-#DF3D30 k-inline-flex k-flex-col k-justify-end k-px-2 k-py-1 k-rounded-1 k-w-200 k-h-60 k-absolute k-bottom-16">
              <tm-text color="#fff" :font-size="20" class="k-scale-[0.9] k-pr-2 k-origin-top-left">Promo code</tm-text>
              <tm-text color="#fff" :font-size="28" class="">CC1088</tm-text>
            </view>
          </view>
        </view>
      </swiper-item>
      <swiper-item class="k-full k-box-border k-px-2">
        <view class="k-rounded-2 k-flex k-full k-items-center k-bg-white">
          <view class="voucher-img k-h-260 k-w-260">
            <image
              class="k-full k-rounded-2"
              src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
              mode="aspectFill" />
          </view>
          <view class="voucher-infos k-ml-2 k-flex-1 k-flex k-flex-col k-box-border k-h-full k-py-2 k-relative">
            <tm-text class="k-font-600" :font-size="32">Coconut Chicken</tm-text>
            <tm-text color="#666" :font-size="26">Chinese · Asian</tm-text>
            <tm-text color="#666" :font-size="26">Waiting Time 5 Mins</tm-text>
            <view
              class="k-bg-#DF3D30 k-inline-flex k-flex-col k-justify-end k-px-2 k-py-1 k-rounded-1 k-w-200 k-h-60 k-absolute k-bottom-16">
              <tm-text color="#fff" :font-size="20" class="k-scale-[0.9] k-pr-2 k-origin-top-left">Promo code</tm-text>
              <tm-text color="#fff" :font-size="28" class="">CC1088</tm-text>
            </view>
          </view>
        </view>
      </swiper-item>
      <swiper-item class="k-full">
        <view class="k-rounded-2 k-flex k-full k-items-center k-bg-white">
          <view class="voucher-img k-h-260 k-w-260">
            <image
              class="k-full k-rounded-2"
              src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg"
              mode="aspectFill" />
          </view>
          <view class="voucher-infos k-ml-2 k-flex-1 k-flex k-flex-col k-box-border k-h-full k-py-2 k-relative">
            <tm-text class="k-font-600" :font-size="32">Coconut Chicken</tm-text>
            <tm-text color="#666" :font-size="26">Chinese · Asian</tm-text>
            <tm-text color="#666" :font-size="26">Waiting Time 5 Mins</tm-text>
            <view
              class="k-bg-#DF3D30 k-inline-flex k-flex-col k-justify-end k-px-2 k-py-1 k-rounded-1 k-w-200 k-h-60 k-absolute k-bottom-16">
              <tm-text color="#fff" :font-size="20" class="k-scale-[0.9] k-pr-2 k-origin-top-left">Promo code</tm-text>
              <tm-text color="#fff" :font-size="28" class="">CC1088</tm-text>
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'voucherSwiper',
})
</script>

<style lang="scss" scoped>
::v-deep .uni-swiper-dots {
  bottom: 10px !important;
  right: 0 !important;
  left: unset;
}
</style>
