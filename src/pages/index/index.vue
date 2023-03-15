<template>
  <tm-app ref="appRef">
    <view class="index-page">
      <Hello />
      <UnoCss />
      <text class="h2"> 查看其它页面示例↓ </text>
      <view k-w-50 k-h-50 class="i-bi-basket k-animate-swing"></view>
      <view>
        <navigator v-for="(v, idx) in pages" :key="idx" :url="v.url">{{ v.title }}</navigator>
      </view>
    </view>
  </tm-app>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import Hello from '@/components/hello/index.vue'
import UnoCss from '@/components/unocss/index.vue'

const pages = reactive([
  {
    title: 'Pinia Demo',
    url: '/pages/pinia/index',
  },
  {
    title: 'Axios Demo',
    url: '/pages/axios/index',
  },
  {
    title: 'uView Demo',
    url: '/pages/uview/index',
  },
  {
    title: 'UnoCSS Demo',
    url: '/pages/unocss/index',
  },
])
</script>

<style scoped>
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
