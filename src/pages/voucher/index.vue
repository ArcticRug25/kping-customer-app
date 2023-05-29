<template>
  <tm-app>
    <tm-sticky :offset="stickyOffset">
      <template #sticky>
        <view class="k-flex k-w-full k-box-border k-px-2 k-bg-white k-items-center">
          <view
            class="k-px-3 k-py-12rpx k-my-2 k-mr-2 k-rounded-20"
            :style="{ backgroundColor: active === 0 ? '#FCEFE9' : '#F6F6F6' }">
            <tm-text :color="active === 0 ? '#ED7044' : '#2a2a2a'" :font-size="24">All · 3</tm-text>
          </view>
          <view class="k-bg-#F6F6F6 k-px-3 k-py-12rpx k-my-1 k-mr-2 k-rounded-20">
            <tm-text color="#2a2a2a" :font-size="24">Expiring Soon · 2</tm-text>
          </view>
        </view>
      </template>
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <VoucherItem circle-color="#f5f5f5" />
      <view class="k-center k-h-80">
        <tm-text color="#ccc">No more</tm-text>
      </view>
    </tm-sticky>
  </tm-app>
</template>

<script setup lang="ts">
import VoucherItem from '@/components/voucher/voucherItem.vue'

defineOptions({
  name: 'VoucherPage',
})
const active = ref(0)
let stickyOffset = 0
// #ifdef H5
stickyOffset = 44 * 2
// #endif
</script>

<style lang="scss" scoped></style>
