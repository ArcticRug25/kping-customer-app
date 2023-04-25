<template>
  <tm-modal title="信息框" content="主体内容哦" v-model:show="showWin"></tm-modal>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Modal',
})

const showWin = ref(false)
</script>

<style lang="scss" scoped></style>
