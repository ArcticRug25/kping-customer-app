<template>
  <tm-app class="k-bg-#F7F6FB">
    <view class="k-w-full k-h-100 k-flex k-justify-between" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="k-w-120 k-center k-justify-end">
        <tm-text class="k-font-600" :font-size="40">Cart</tm-text>
      </view>
      <view class="k-w-100 k-center">
        <text class="i-bi-ui-checks-grid k-text-xl">1</text>
      </view>
    </view>
    <tm-result status="empty" :showBtn="false" subTitle=" " title="Cart is empty"></tm-result>
  </tm-app>
</template>

<script setup lang="ts">
const { statusBarHeight, width, height, bottom } = uni.$tm.u.getWindow()
</script>

<style lang="scss" scoped></style>
