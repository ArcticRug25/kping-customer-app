<template>
  <tm-sticky :offset="stickyOffset" class="k-sticky k-bg-white k-z9999" :style="{ top: stickyOffset }" :z-index="999">
    <template v-slot:sticky>
      <tm-filterMenu fixed class="filter-menu" @click="handleClickMenu">
        <tm-filterMenu-item icon="tmicon-filter-fill" un-icon="tmicon-filter" :height="450" title="Filter">
          <tm-text :font-size="24" _class="font-weight-b" label="aaaaaa">
            {{ stickyOffset }}
          </tm-text>
        </tm-filterMenu-item>
        <tm-filterMenu-item title="Sort">
          <tm-text :font-size="24" _class="font-weight-b" label="test"></tm-text>
        </tm-filterMenu-item>
        <tm-filterMenu-item :height="650" title="More" un-icon="tmicon-stepmode" icon="tmicon-menu">
          <tm-text :font-size="24" _class="font-weight-b" label="test"></tm-text>
        </tm-filterMenu-item>
        <tm-filterMenu-item isButton title="Price" un-icon="tmicon-sort" icon="tmicon-sort"> </tm-filterMenu-item>
      </tm-filterMenu>
    </template>
  </tm-sticky>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DropFilterNav',
})
const { statusBarHeight } = uni.$tm.u.getWindow()
const stickyOffset = ref('0')
// #ifdef H5
stickyOffset.value = '44px'
// #endif
// #ifdef APP-PLUS
stickyOffset.value = `${statusBarHeight + 44}px`
// #endif

const handleClickMenu = (e: any) => {
  uni.pageScrollTo({
    scrollTop: 150, // 指定滚动的位置，这里是滚动到距离顶部500px的位置
    duration: 100, // 滚动动画持续时间，单位为毫秒
  })
}
</script>

<style scoped>
::v-deep .filter-menu > :nth-child(4) {
  top: v-bind(stickyOffset) !important;
}
</style>
