<template>
  <tm-app class="k-h-full k-pt-safe">
    <tm-indexes class="area-code-list" :height="800">
      <tm-indexes-item v-for="(item, index) in hot" :title="index ? '' : '#'" :navTitle="index ? '' : '#'" :key="index">
        <view class="k-h-88rpx k-flex k-items-center">
          <tm-image preview :height="30" :width="50" :src="item.flag" errorLabel="" errorIcon="null"></tm-image>
          <tm-text class="k-ml-3" :fontSize="30" color="#46595F">{{ item.name + ' ' + item.en }}</tm-text>
        </view>
      </tm-indexes-item>
      <tm-indexes-item
        v-for="(item, index) in list"
        :title="item.isFirst ? item.en.charAt(0) : ''"
        :navTitle="item.en.charAt(0)"
        :key="index">
        <view class="k-h-88rpx k-flex k-items-center">
          <tm-image preview :height="30" :width="50" :src="item.flag" errorLabel="" errorIcon="null"></tm-image>
          <tm-text class="k-ml-3" :fontSize="30" color="#46595F">{{ item.name + ' ' + item.en }}</tm-text>
        </view>
      </tm-indexes-item>
    </tm-indexes>
  </tm-app>
</template>

<script setup lang="ts">
import areaList from '@/static/data/list.json'

const { list, hot } = areaList
</script>

<style lang="scss" scoped>
.area-code-list {
  height: 100% !important;
  ::v-deep uni-scroll-view {
    height: 100% !important;
    & + view {
      top: 240rpx !important;
    }
  }
}
</style>
