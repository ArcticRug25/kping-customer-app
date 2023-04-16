<template>
  <view>
    <tm-overlay class="voucher-modal" v-model:show="showWin" contentAnimation>
      <!-- 背景图 -->
      <image class="k-w-800rpx k-h-1422rpx k-absolute" src="@/static/images/voucher-bg2.png" />
      <!-- 内容 -->
      <view class="k-relative k-w-660rpx k-h-680rpx k-pt-30rpx">
        <image class="kping-logo k-absolute k-z2 k-w-162rpx k-h-74rpx" src="@/static/images/kping-logo.png" />
        <view class="k-w-full k-center k-mt-3 k-mb-1">
          <tm-text class="k-text-shadow-lg" :font-size="32" color="#ffffff"
            >Congratulations on receiving the coupon</tm-text
          >
        </view>
        <!-- 票券列表 -->
        <scroll-view scroll-y="true" class="k-w-full k-h-640rpx k-box-border">
          <view
            class="scroll-view-item k-w-94% k-mx-auto k-box-border k-py-16rpx k-mt-2 k-bg-white k-rounded-2 k-h-160rpx k-flex">
            <view class="voucher-left k-basis-68% k-box-border k-flex k-px-14rpx">
              <view class="k-h-128rpx k-w-128rpx k-rounded-1 k-overflow-hidden k-shadow-md">
                <image
                  class="k-full"
                  src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
              </view>
              <view class="k-ml-14rpx k-h-128rpx k-flex k-flex-col k-justify-evenly">
                <tm-text :fontSize="32">ManDangDang</tm-text>
                <view class="k-flex k-items-center">
                  <tm-text class="k-mr-1" color="#aaa" :fontSize="24">Get</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="36">60</tm-text>
                  <tm-text class="k-mr-10rpx" color="#aaa" :fontSize="24">off</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="34">100</tm-text>
                </view>
              </view>
            </view>
            <view class="voucher-right k-basis-32% k-box-border k-flex k-flex-col k-items-center k-justify-center">
              <tm-text color="#aaa" :fontSize="24">Expires in 12h</tm-text>
              <tm-button
                :width="160"
                size="mini"
                :margin="[0, 16, 0, 0]"
                :height="50"
                linear="right"
                :round="25"
                color="red"
                >To Use</tm-button
              >
            </view>
          </view>
          <view
            class="scroll-view-item k-w-94% k-mx-auto k-box-border k-py-16rpx k-mt-2 k-bg-white k-rounded-2 k-h-160rpx k-flex">
            <view class="voucher-left k-basis-68% k-box-border k-flex k-px-14rpx">
              <view class="k-h-128rpx k-w-128rpx k-rounded-1 k-overflow-hidden k-shadow-md">
                <image
                  class="k-full"
                  src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
              </view>
              <view class="k-ml-14rpx k-h-128rpx k-flex k-flex-col k-justify-evenly">
                <tm-text :fontSize="32">ManDangDang</tm-text>
                <view class="k-flex k-items-center">
                  <tm-text class="k-mr-1" color="#aaa" :fontSize="24">Get</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="36">60</tm-text>
                  <tm-text class="k-mr-10rpx" color="#aaa" :fontSize="24">off</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="34">100</tm-text>
                </view>
              </view>
            </view>
            <view class="voucher-right k-basis-32% k-box-border k-flex k-flex-col k-items-center k-justify-center">
              <tm-text color="#aaa" :fontSize="24">Expires in 12h</tm-text>
              <tm-button
                :width="160"
                size="mini"
                :margin="[0, 16, 0, 0]"
                :height="50"
                linear="right"
                :round="25"
                color="red"
                >To Use</tm-button
              >
            </view>
          </view>
          <view
            class="scroll-view-item k-w-94% k-mx-auto k-box-border k-py-16rpx k-mt-2 k-bg-white k-rounded-2 k-h-160rpx k-flex">
            <view class="voucher-left k-basis-68% k-box-border k-flex k-px-14rpx">
              <view class="k-h-128rpx k-w-128rpx k-rounded-1 k-overflow-hidden k-shadow-md">
                <image
                  class="k-full"
                  src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
              </view>
              <view class="k-ml-14rpx k-h-128rpx k-flex k-flex-col k-justify-evenly">
                <tm-text :fontSize="32">ManDangDang</tm-text>
                <view class="k-flex k-items-center">
                  <tm-text class="k-mr-1" color="#aaa" :fontSize="24">Get</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="36">60</tm-text>
                  <tm-text class="k-mr-10rpx" color="#aaa" :fontSize="24">off</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="34">100</tm-text>
                </view>
              </view>
            </view>
            <view class="voucher-right k-basis-32% k-box-border k-flex k-flex-col k-items-center k-justify-center">
              <tm-text color="#aaa" :fontSize="24">Expires in 12h</tm-text>
              <tm-button
                :width="160"
                size="mini"
                :margin="[0, 16, 0, 0]"
                :height="50"
                linear="right"
                :round="25"
                color="red"
                >To Use</tm-button
              >
            </view>
          </view>
          <view
            class="scroll-view-item k-w-94% k-mx-auto k-box-border k-py-16rpx k-mt-2 k-bg-white k-rounded-2 k-h-160rpx k-flex">
            <view class="voucher-left k-basis-68% k-box-border k-flex k-px-14rpx">
              <view class="k-h-128rpx k-w-128rpx k-rounded-1 k-overflow-hidden k-shadow-md">
                <image
                  class="k-full"
                  src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/6cd28202211111537271692.jpg" />
              </view>
              <view class="k-ml-14rpx k-h-128rpx k-flex k-flex-col k-justify-evenly">
                <tm-text :fontSize="32">ManDangDang</tm-text>
                <view class="k-flex k-items-center">
                  <tm-text class="k-mr-1" color="#aaa" :fontSize="24">Get</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="36">60</tm-text>
                  <tm-text class="k-mr-10rpx" color="#aaa" :fontSize="24">off</tm-text>
                  <tm-text class="k-mr-2rpx" color="red" :fontSize="24">$</tm-text>
                  <tm-text class="k-mr-1" color="red" :fontSize="34">100</tm-text>
                </view>
              </view>
            </view>
            <view class="voucher-right k-basis-32% k-box-border k-flex k-flex-col k-items-center k-justify-center">
              <tm-text color="#aaa" :fontSize="24">Expires in 12h</tm-text>
              <tm-button
                :width="160"
                size="mini"
                :margin="[0, 16, 0, 0]"
                :height="50"
                linear="right"
                :round="25"
                color="red"
                >To Use</tm-button
              >
            </view>
          </view>
        </scroll-view>
      </view>
    </tm-overlay>
  </view>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'VoucherModal',
})
const showWin = ref(true)
const pos = ref(false)
</script>

<style lang="scss">
page {
  background: transparent;
  .voucher-modal {
    height: 100vh !important;
    background-color: rgba($color: #000000, $alpha: 0.35);
    ::v-deep & > view {
      height: 100vh !important;
    }
  }

  .kping-logo {
    left: 50%;
    transform: translate(-50%, -110%);
  }

  .scroll-view-item {
    .voucher-right {
      border-left: 1px dashed #ccc;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 24rpx;
        height: 24rpx;
        background: #eb4953;
        border-radius: 45%;
        left: -12rpx;
        z-index: 1;
      }

      &::before {
        top: -32rpx;
      }

      &::after {
        bottom: -32rpx;
      }
    }
  }
}
</style>
