<template>
  <Auth class="auth-modal" @onLoginBack="onLoginBack" @onCanceled="onCanceled" :show="show" />
</template>
<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app'
import Auth from '@/components/auth/index.vue'

const show = ref(true)

onShow(() => {
  if (show.value) return
  uni.navigateBack()
})

const onCanceled = () => {
  uni.navigateBack()
}

const onLoginBack = () => {
  show.value = false
}
</script>

<style lang="scss">
page {
  background: transparent;
  .auth-modal {
    height: 100vh !important;
    ::v-deep & > view {
      height: 100vh !important;
    }
  }
}
</style>
