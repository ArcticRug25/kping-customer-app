<template>
  <tm-modal
    color="white"
    okColor="red"
    cancelColor="red"
    okLinear="left"
    okText="Login"
    cancelText="Cancel"
    title="Authorization Reminder"
    content="Please authorize the avatar and other information to provide you with better service"
    splitBtn
    :round="6"
    :height="380"
    @cancel="onCancel"
    @ok="onOk"
    v-model:show="isShow"></tm-modal>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AuthModal',
})

const props = withDefaults(
  defineProps<{
    show: boolean
  }>(),
  {
    show: true,
  },
)
const emits = defineEmits(['onCanceled', 'onLoginBack'])
// 登录状态
const isShow = ref(props.show)

// 关闭登录弹窗
const onCancel = () => {
  emits('onCanceled')
}

const onOk = () => {
  emits('onLoginBack')
  uni.navigateTo({
    url: '/pages/login/index',
  })
}
</script>

<style lang="scss" scoped></style>
