<template>
  <tm-app class="k-relative">
    <page-meta :page-style="'overflow:' + (show ? 'hidden' : 'visible')"></page-meta>
    <!-- 头部导航栏 -->
    <view
      class="k-w-full k-h-100 k-bg-transparent k-fixed k-top-0 k-left-0 k-z-10"
      :style="{ backgroundColor: `rgba(255,255,255,${opacity})`, paddingTop: statusBarHeight + 'px' }"
      @click="goBack">
      <!-- 左 -->
      <view class="k-h-full k-w-100rpx k-flex k-box-border k-pl-3 k-items-center k-relative">
        <view
          class="k-w-60 k-h-60 k-center k-rounded-50 k-absolute"
          :style="{ backgroundColor: `rgba(0,0,0, ${0.4 - opacity})` }">
          <view
            class="i-bi-chevron-left k-mr-3rpx k-text-lg"
            :style="{ color: `rgba(255,255,255, ${1 - opacity})` }"></view>
        </view>
        <view class="k-w-60 k-h-60 k-center k-absolute k-rounded-50" :style="{ opacity: opacity }">
          <view class="i-bi-chevron-left k-text-black k-mr-3rpx k-text-lg"></view>
        </view>
      </view>
      <!-- 右 -->
      <view></view>
    </view>
    <!-- 商品轮播图 -->
    <tm-carousel
      autoplay
      :width="width * 2"
      :height="height - 100"
      :list="listimg"
      color="#E98232"
      model="dot"
      class="product-carousel"></tm-carousel>
    <!-- 商品详情 -->
    <view
      class="k-relative k-w-full k-bg-white k-p-4 k-box-border k-rounded-tl-2xl k-rounded-tr-2xl -k-top-40 k-shadow-[0_-8rpx_8rpx_rgba(0,0,0,0.1)]"
      :style="{ paddingBottom: bottom + bottomNavHeight / 2 + 'px' }">
      <!-- 商品价格 -->
      <view class="k-flex k-items-center k-justify-between">
        <view class="k-flex k-items-center">
          <tm-text color="#FC371F" :font-size="32" class="product-dollar k-font-600 k-align-sub">$</tm-text>
          <tm-text color="#FC371F" :font-size="50" class="k-font-700">1.99</tm-text>
        </view>
      </view>
      <!-- 商品名 -->
      <view class="">
        <tm-text :font-size="32" _class="text-overflow-2 k-font-500 k-mt-2"
          >Product test Product test Product test Product test Product test Product test Product test Product test
          Product test</tm-text
        >
      </view>
      <!-- 商品描述 -->
      <!-- <tm-sheet color="#F9F9F9" :round="4" :margin="[0, 20]" :padding="[0]">2</tm-sheet> -->
      <tm-divider class="k-my-3" align="center" label="Product detail"></tm-divider>
      <tm-html :content="rx"></tm-html>
    </view>

    <!-- 底部导航 -->
    <view
      class="k-w-full k-bg-#FFFFFF k-fixed k-bottom-0 k-left-0 k-z-10 k-flex"
      :style="{ paddingBottom: bottom + 'px', height: bottomNavHeight + 'rpx' }">
      <view class="k-h-full k-w-100 k-ml-3 k-col-center">
        <text class="i-bi-shop-window k-text-#FC371F k-text-xl k-mb-4rpx"></text>
        <tm-text color="#666" :font-size="24">store</tm-text>
      </view>
      <tm-badge color="red" count="2" :right="10">
        <view class="k-h-full k-w-100 k-ml-3 k-col-center">
          <text class="i-bi-cart k-text-#2a2a2a k-text-xl k-mb-4rpx"></text>
          <tm-text color="#666" :font-size="24">cart</tm-text>
        </view>
      </tm-badge>
      <view class="k-flex k-flex-1 k-items-center k-box-border k-px-3">
        <tm-button
          class="reserve-btn k-flex-1"
          outlined
          color="#FC371F"
          :height="76"
          :margin="[0, 0, 20, 0]"
          :round="25"
          >Reserve</tm-button
        >
        <tm-button class="buy-btn k-flex-1" @tap="openSkuModal" :height="76" :round="25">Buy</tm-button>
      </view>
    </view>
    <!-- 商品属性 -->
    <tm-sku
      @buy="buy"
      :num="num"
      :height="900"
      :sku-map="[
        { key: 'size', value: 'Size' },
        { key: 'color', value: 'Color' },
        { key: 'model', value: 'Model' },
      ]"
      :list="list"
      v-model:show="show"></tm-sku>
  </tm-app>
</template>

<script setup lang="ts">
import { onLoad, onPageScroll } from '@dcloudio/uni-app'

defineOptions({
  name: 'ProductPage',
})

const listimg = [
  'https://picsum.photos/200/300?id=43335',
  'https://picsum.photos/200/300?id=433',
  'https://picsum.photos/200/300?id=439',
  'https://picsum.photos/200/300?id=459',
]
const show = ref(false)
const list = ref({
  data: [
    {
      title: 'Color',
      id: 'color',
      children: [
        {
          title: 'white',
          id: 'a',
          num: 5,
        },
        {
          title: 'black',
          id: 'b',
          num: 5,
        },
      ],
    },
    {
      title: 'Size',
      id: 'size',
      children: [
        {
          title: 'XS',
          id: 'a',
          num: 5,
        },
        {
          title: 'S',
          id: 'b',
          num: 5,
        },
      ],
    },
    {
      title: 'Style',
      id: 'style',
      children: [
        {
          title: 'suit', // 套装
          id: 'a',
          num: 0,
        },
        {
          title: 'singleton',
          id: 'b',
          num: 5,
        },
      ],
    },
  ],
  product: [
    {
      id: 'a-a-a',
      title: 'white-XS-suit',
      num: 0,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i1/2328862868/O1CN01b5pglN1X3ahprbU9P_!!2328862868.jpg',
    },
    {
      id: 'a-a-b',
      title: 'white-XS-singleton',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i3/2328862868/O1CN01UBMJfy1X3af4Lc3ME_!!2328862868.jpg',
    },
    {
      id: 'a-b-a',
      title: 'white-S-suit',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i1/TB1fw40oAvoK1RjSZPfSutPKFXa.jpg',
    },
    {
      id: 'a-b-b',
      title: 'white-S-singleton',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i1/398719215/O1CN01zgD6Xi2HwWY8U589Z_!!398719215.jpg',
    },

    {
      id: 'b-a-a',
      title: 'black-XS-suit',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i1/TB1fw40oAvoK1RjSZPfSutPKFXa.jpg',
    },
    {
      id: 'b-a-b',
      title: 'black-XS-singleton',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i3/2328862868/O1CN01UBMJfy1X3af4Lc3ME_!!2328862868.jpg',
    },
    {
      id: 'b-b-a',
      title: 'black-S-suit',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i1/2328862868/O1CN01b5pglN1X3ahprbU9P_!!2328862868.jpg',
    },
    {
      id: 'b-b-b',
      title: 'black-S-singleton',
      num: 5,
      max_buy: 3,
      price: 56.9,
      salePrice: 54,
      tip: 'You can save $10 right now',
      img: 'https://gw.alicdn.com/bao/uploaded/i1/TB1fw40oAvoK1RjSZPfSutPKFXa.jpg',
    },
  ],
})
const openSkuModal = () => {
  show.value = true
}
const num = ref(2)
function buy(e: any) {
  console.log(e)
}
const { statusBarHeight, width, height, bottom } = uni.$tm.u.getWindow()

// 透明度
const opacity = ref(0)

const bottomNavHeight = 100

onPageScroll((e) => {
  opacity.value = e.scrollTop / 100
})

const rx = `<div class="content_area" id="content_area">
             <!--repaste.body.begin--><p><strong>　央视网消息：</strong>在安徽中稻迎来了丰收季。在肥东县相邻的两块地景象大不相同，农机作业的进度和效率也不同。<br></p><p style="text-align: center;" class="photo_img_20190808"><img src="//p4.img.cctvpic.com/photoworkspace/contentimg/2022/10/14/2022101414244666208.jpg" alt=""></p><p style="text-align: center;" class="photo_img_20190808"><img src="//p5.img.cctvpic.com/photoworkspace/contentimg/2022/10/14/2022101414244671910.jpg" alt=""></p><p>　　<strong>总台记者 吴俊：</strong>这里是肥东县古城镇，今天天气晴好，收割机已经进入高标准农田作业。去年秋季，肥东县有7.8万亩田地进行高标准农田改造。改造后的农田，可以说是田成方、林成网、渠相通、路相连。这里一路之隔，一侧是改造过的农田，不仅有了机耕路，农机可以直接到田边，而且修建了标准的灌渠，灌溉和排涝不愁。而路的一侧是还没改造的地块，只有窄窄的杂草丛生的田埂，灌渠也是这种土渠。另外从航拍画面对比来看，改造过的农田，通过小田变大田，打破了田埂，非常适合农机作业。而没有改造过的，田块大小不均、高低不平，农机也没办法下田作业。<br></p><p style="text-align: center;" class="photo_img_20190808"><img src="//p3.img.cctvpic.com/photoworkspace/contentimg/2022/10/14/2022101414250079300.jpg" alt=""></p><p style="text-align: center;" class="photo_img_20190808"><img src="//p3.img.cctvpic.com/photoworkspace/contentimg/2022/10/14/2022101414250072259.jpg" alt=""></p><p>　　改造后的高标准农田，配套了机械深耕、增施有机肥和土壤调理等综合措施，改善了土壤板结度、有机质含量以及酸碱平衡，这为眼前的好收成打下了基础。稻谷颗粒非常饱满，尽管今年水稻在抽穗扬花期遭遇了持续高温，但是高标准农田改造后，能够及时引水灌溉，而且今年当地还种植了抗病新品种，应用了绿色防控等新技术，水稻产量不仅没受太大影响，比去年每亩还高了100斤左右。<br></p><!--repaste.body.end-->
            </div>`
// 返回
const goBack = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
::v-deep .product-carousel > uni-view > uni-view {
  bottom: 60rpx !important;
}

.buy-btn {
  background: linear-gradient(152.06deg, rgba(254, 114, 90, 1) -13.175%, rgba(252, 55, 31, 1) 57.951%);
}

.reserve-btn {
  background: #fef8f7 !important;
}

::v-deep .product-dollar {
  span {
    vertical-align: sub;
  }
}
</style>
