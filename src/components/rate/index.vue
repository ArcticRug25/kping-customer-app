<template>
  <view class="k-flex k-gap-2rpx">
    <view
      v-for="item in fullStarNum"
      :key="item"
      class="k-w-30 k-h-30 k-rounded-4rpx k-center"
      :style="{
        backgroundColor: props.color,
        width: props.width + 'rpx',
        height: props.width + 'rpx',
      }">
      <view class="i-bi-star-fill k-text-22rpx k-text-#FEFEFE"></view>
    </view>
    <template v-if="isDecimal && rateDecimal > 0">
      <view
        class="k-w-30 k-h-30 k-rounded-4rpx k-center"
        :style="{ background: rateBgColor, width: props.width + 'rpx', height: props.width + 'rpx' }">
        <view class="i-bi-star-fill k-text-22rpx k-text-#FEFEFE"></view> </view
    ></template>
    <template v-if="maxRate !== fullStarNum">
      <view
        v-for="item in maxRate - fullStarNum - (isDecimal ? 1 : 0)"
        :key="item"
        class="k-w-30 k-h-30 k-rounded-4rpx k-center k-bg-#C7C7C7"
        :style="{ width: props.width + 'rpx', height: props.width + 'rpx' }">
        <view class="i-bi-star-fill k-text-22rpx k-text-#FEFEFE"></view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
interface RateProps {
  color?: string
  rate?: number
  maxRate?: number
  width?: number
}
defineOptions({
  name: 'Rate',
})

const props = withDefaults(defineProps<RateProps>(), {
  color: '#ed6f43',
  rate: 4,
  maxRate: 5,
  width: 30,
})

const isDecimal = props.rate % 1 !== 0

const fullStarNum = Math.floor(props.rate)

const rateDecimal = computed(() => {
  const res = props.rate.toString().match(/\.(\d)/)
  return res ? Number(res[1]) : 0
})

const rateBgColor = computed(() => {
  if (rateDecimal.value >= 0 && rateDecimal.value < 5) {
    return '#C7C7C7'
  }
  if (rateDecimal.value >= 5 && rateDecimal.value < 8) {
    return `linear-gradient(to right, ${props.color} 50%, #c7c7c6 50%)`
  }
  return props.color
})
</script>

<style scoped>
.half-background {
  background: linear-gradient(to right, v-bind(props.color) 50%, #c7c7c6 50%);
}
</style>
