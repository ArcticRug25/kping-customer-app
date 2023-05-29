<template>
  <tm-app class="k-pt-2">
    <tm-navbar
      title="标题导航栏"
      :leftWidth="100"
      :rightWidth="100"
      color="#B92828"
      :shadow="10"
      linear="right"
      linearDeep="accent">
      <template #default>
        <tm-input @search="search" placeholder="search" :round="25" class="k-w-full"></tm-input>
      </template>
      <template #right>
        <tm-icon _class="px-32" name="tmicon-search"></tm-icon>
      </template>
    </tm-navbar>
    <VoucherSwiper />
    <DropFilterNav />
    <MerchantList />
  </tm-app>
</template>

<script setup lang="ts">
import DropFilterNav from './components/dropFilterNav.vue'
import VoucherSwiper from './components/voucherSwiper.vue'
import MerchantList from './components/merchantList.vue'

defineOptions({
  name: 'fbPage',
})

const search = (val: string) => {
  console.log(val)
}
</script>

<style scoped></style>
