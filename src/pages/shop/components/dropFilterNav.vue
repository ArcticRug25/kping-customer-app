<template>
  <tm-sticky :offset="stickyOffset" class="k-sticky k-bg-white k-z9999" :style="{ top: stickyOffset }" :z-index="999">
    <template v-slot:sticky>
      <tm-filterMenu fixed class="filter-menu" :height="90" @click="handleClickMenu">
        <tm-filterMenu-item
          font-color="#EB5D2B"
          un-font-color="#686868"
          :font-size="26"
          icon="tmicon-filter-fill"
          un-icon="tmicon-filter"
          :height="450"
          title="Filter">
          <tm-text :font-size="24" _class="font-weight-b" label="aaaaaa">
            {{ stickyOffset + 'px' }}
          </tm-text>
        </tm-filterMenu-item>
        <tm-filterMenu-item title="Sort" font-color="#EB5D2B" un-font-color="#686868" :font-size="26">
          <tm-text :font-size="24" _class="font-weight-b" label="test"></tm-text>
        </tm-filterMenu-item>
        <tm-filterMenu-item
          :height="650"
          title="More"
          font-color="#EB5D2B"
          un-font-color="#686868"
          :font-size="26"
          un-icon="tmicon-stepmode"
          icon="tmicon-menu">
          <tm-text :font-size="24" _class="font-weight-b" label="test"></tm-text>
        </tm-filterMenu-item>
        <tm-filterMenu-item
          isButton
          title="Price"
          font-color="#EB5D2B"
          un-font-color="#686868"
          :font-size="26"
          un-icon="tmicon-sort"
          icon="tmicon-sort">
        </tm-filterMenu-item>
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
stickyOffset.value = '60px'
// #endif
// #ifdef APP-PLUS
stickyOffset.value = `${statusBarHeight + 60}px`
// #endif

const handleClickMenu = (e: any) => {
  console.log(e)
}
</script>

<style scoped>
::v-deep .filter-menu > :nth-child(4) {
  top: v-bind(stickyOffset) !important;
}
</style>
