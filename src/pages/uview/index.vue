<template>
  <tm-app>
    <tm-sheet>
      <tm-text :fontSize="24" _class="font-weight-b" label="基础属性,更多玩法请前往文档。"></tm-text>
      <tm-divider></tm-divider>
      <tm-skeleton></tm-skeleton>
    </tm-sheet>
    <tm-sheet>
      <tm-text :fontSize="24" _class="font-weight-b" label="类型分为：line ,rect,card,chat,"></tm-text>
      <tm-divider></tm-divider>
      <tm-skeleton model="chat"></tm-skeleton>
    </tm-sheet>
    <tm-sheet>
      <tm-text :fontSize="24" _class="font-weight-b" label="也可以自定义骨架布局"></tm-text>
      <tm-divider></tm-divider>
      <tm-skeleton-line :height="50"></tm-skeleton-line>
      <tm-skeleton-line :height="50"></tm-skeleton-line>
      <view style="width: 300rpx">
        <tm-skeleton-line :height="50"></tm-skeleton-line>
      </view>
    </tm-sheet>
  </tm-app>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import tmDivider from '@/tmui/components/tm-divider/tm-divider.vue'
import tmSheet from '@/tmui/components/tm-sheet/tm-sheet.vue'
import tmSkeletonLine from '@/tmui/components/tm-skeleton-line/tm-skeleton-line.vue'
import tmSkeleton from '@/tmui/components/tm-skeleton/tm-skeleton.vue'
import tmText from '@/tmui/components/tm-text/tm-text.vue'

// const { proxy } = getCurrentInstance()
const load = ref(true)
</script>
