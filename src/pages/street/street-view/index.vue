<template>
  <tm-app color="#fff">
    <tm-sheet _class="k-center k-w-full" color="#FFE2E3" class="k-center k-rounded-b-xl k-shadow-md">
      <tm-image :width="370" :height="370" src="/static/images/view-street-bg.png"></tm-image>
      <tm-text class="k-my-20rpx k-font-800" color="#333" :font-size="48">{{
        isViewing ? 'Watching' : 'Watch'
      }}</tm-text>
      <tm-button v-if="!isViewing" color="#E51C24" :font-size="28" label="To use"></tm-button>
      <tm-button v-else color="#999999" label="Stop"></tm-button>
      <view class="charging-times k-w-full k-center k-flex-col k-mt-2" v-if="isViewing">
        <view class="k-center k-flex-col">
          <tm-text color="#333">0</tm-text>
          <tm-text color="#333">Current charged minutes</tm-text>
        </view>
        <view class="k-flex k-justify-between k-w-full k-mt-4 k-mb-2">
          <view class="k-col-center">
            <tm-text color="#333">0s</tm-text>
            <tm-text color="#999">Total charged minutes</tm-text>
          </view>
          <view class="k-col-center">
            <tm-text color="#333">0s</tm-text>
            <tm-text color="#999">Balance charged minutes</tm-text>
          </view>
        </view>
      </view>
    </tm-sheet>
    <tm-sheet _class="k-center k-w-full" :margin="[10]">
      <view class="k-w-128 k-h-128">
        <tm-image class="avatar-img" :width="128" :height="128" :round="25" src="/static/images/f.png"></tm-image>
      </view>
      <view class="k-w-full k-flex k-justify-evenly k-mt-4">
        <tm-text color="#666">K.Point: 0</tm-text>
        <tm-text color="#666">K.Dollar: $0</tm-text>
      </view>
      <tm-text color="#333" :font-size="32" class="k-mt-6 k-font-600">You can charge 0 minutes</tm-text>
      <tm-text color="#999" :font-size="28" class="k-mt3">You have charged for 0 mins</tm-text>
      <view class="k-flex k-justify-evenly k-w-full" mt3>
        <tm-button color="#E6E6E6" :width="290" label="Top up K.Dollar"></tm-button>
        <tm-button color="#E51C24" :width="290" label="Watch Past View"></tm-button>
      </view>
    </tm-sheet>
  </tm-app>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StreetViewPage',
})
const isViewing = ref(false)
</script>

<style lang="scss" scoped>
.avatar-img {
  filter: drop-shadow(0 4rpx 10rpx rgba(0, 0, 0, 0.2));
}
</style>
