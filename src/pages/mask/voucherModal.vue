<template>
  <view>
    <tm-overlay
      class="voucher-modal"
      @close="handleClose"
      :overlay-click="false"
      v-model:show="showWin"
      contentAnimation>
      <!-- 背景图 -->
      <image
        class="voucher-bg k-w-800rpx k-h-1422rpx k-absolute"
        :style="{ transform: scaleAnimate ? 'scale(1)' : 'scale(0)' }"
        src="@/static/images/voucher-bg2.png" />
      <!-- 内容 -->
      <view
        class="voucher-content k-relative k-w-660rpx k-h-680rpx k-pt-30rpx"
        :style="{ transform: scaleAnimate ? 'scale(1)' : 'scale(0)' }">
        <image class="kping-logo k-absolute k-z2 k-w-162rpx k-h-74rpx" src="@/static/images/kping-logo.png" />
        <view class="k-w-full k-center k-mt-3 k-mb-1">
          <tm-text class="k-text-shadow-lg" :font-size="32" color="#ffffff"
            >Congratulations on receiving the coupon</tm-text
          >
        </view>
        <!-- 票券列表 -->
        <scroll-view scroll-y="true" class="k-w-full k-h-640rpx k-box-border">
          <voucherItem />
          <voucherItem />
          <voucherItem />
          <voucherItem />
        </scroll-view>

        <view
          class="i-bi-x-circle k-absolute k-color-#f0f0f0 k-text-2xl k-left-50% -k-bottom-130rpx -k-translate-x-50% k-z4"
          @tap="handleClose"></view>
      </view>
    </tm-overlay>
  </view>
</template>
<script lang="ts" setup>
import voucherItem from '@/components/voucher/voucherItem.vue'

defineOptions({
  name: 'VoucherModal',
})
const showWin = ref(true)
const pos = ref(false)

const scaleAnimate = ref(false)

onMounted(() => {
  nextTick(() => {
    scaleAnimate.value = true
  })
})

// 关闭弹窗
const handleClose = () => {
  scaleAnimate.value = false
  setTimeout(() => {
    uni.navigateBack()
  }, 300)
}
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

  .voucher-bg {
    transition: all 0.3s ease-in-out;
    transform: scale(0);
  }

  .voucher-content {
    transition: all 0.3s ease-in-out;
    transform: scale(0);
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
}
</style>
