<template>
  <tm-app class="shop-page">
    <tm-navbar :leftWidth="90" :height="60" :right-width="50" class="shopping-header" title="Form" hideHome>
      <template #default>
        <tm-input class="k-w-full" focus-color="#fff" :round="25" placeholder="Search" />
      </template>
    </tm-navbar>
    <view class="shopping-container">
      <DropFilterNav class="shopping-drop-filter k-rounded-tl-2xl k-rounded-tr-2xl k-overflow-hidden k-z-99999" />
      <scroll-view
        scroll-y
        class="k-w-full k-box-border k-bg-white"
        :style="{ height: height - statusBarHeight + 'px' }">
        <tm-waterfall
          class="product-list -k-translate-y-20rpx k-flex k-justify-center"
          :width="(width - 30) * 2"
          :gutter="20"
          ref="wall">
          <tm-waterfall-item @click="itemClick" :img="item.img" v-for="(item, index) in imglist" :key="index">
            <view class="pt-12 pb-12 px-12">
              <tm-text :label="item.text" _class="text-overflow-2"></tm-text>
              <view class="flex flex-row flex-row-bottom-start mt-24">
                <tm-text color="orange" :font-size="24" label="¥"></tm-text>
                <tm-text color="orange" _class="px-10" :font-size="36" :label="item.price"></tm-text>
                <tm-text color="grey" :font-size="24" :label="item.num"></tm-text>
              </view>
            </view>
          </tm-waterfall-item>
        </tm-waterfall>
      </scroll-view>
    </view>
  </tm-app>
</template>

<script setup lang="ts">
import DropFilterNav from './components/dropFilterNav.vue'
import tmWaterfall from '@/tmui/components/tm-waterfall/tm-waterfall.vue'

const wall = ref<InstanceType<typeof tmWaterfall> | null>(null)
const imglist = ref([
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/1848622920/O1CN018zBHJ91XRPJ4bHW78_!!0-item_pic.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '49',
    num: '3000+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/6000000001207/O1CN016TztFg1Kmqqrtarb0_!!6000000001207-0-picassoopen.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '200',
    num: '3000+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/1848622920/O1CN018zBHJ91XRPJ4bHW78_!!0-item_pic.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '49',
    num: '3000+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/6000000001207/O1CN016TztFg1Kmqqrtarb0_!!6000000001207-0-picassoopen.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '12.8',
    num: '1500+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/1848622920/O1CN018zBHJ91XRPJ4bHW78_!!0-item_pic.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '49',
    num: '3000+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/6000000001207/O1CN016TztFg1Kmqqrtarb0_!!6000000001207-0-picassoopen.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '200',
    num: '3000+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/1848622920/O1CN018zBHJ91XRPJ4bHW78_!!0-item_pic.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '49',
    num: '3000+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/6000000001207/O1CN016TztFg1Kmqqrtarb0_!!6000000001207-0-picassoopen.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '12.8',
    num: '1500+',
  },
  {
    img: 'https://gw.alicdn.com/bao/uploaded/i2/1848622920/O1CN018zBHJ91XRPJ4bHW78_!!0-item_pic.jpg_320x320q90.jpg',
    text: 'Test test test test test test test test test test test test test test test test test',
    price: '49',
    num: '3000+',
  },
])

const { width, height, statusBarHeight } = uni.$tm.u.getWindow()

function itemClick() {
  uni.navigateTo({
    url: '/pages/product/index',
  })
}
</script>

<style lang="scss" scoped>
.shop-page {
  background-image: linear-gradient(to right, #f1e8df 0%, #e7e1e3 100%) !important;
  .shopping-container {
    background-image: linear-gradient(to right, #f1e8df 0%, #e7e1e3 100%) !important;

    .shopping-drop-filter {
      background-image: linear-gradient(to right, #f1e8df 0%, #e7e1e3 100%) !important;
    }
  }
  ::v-deep .shopping-header {
    box-shadow: none !important;
    & > uni-view:last-child > uni-view {
      background-image: linear-gradient(to right, #f1e8df 0%, #e7e1e3 100%) !important;
      box-shadow: none !important;
    }
  }

  ::v-deep .product-list {
    background-image: linear-gradient(to bottom, #ffffff 0%, #f0f0f0 10%) !important;
  }
}
</style>
