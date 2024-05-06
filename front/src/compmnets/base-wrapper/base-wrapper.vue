<template>
  <view class="flex-column h-full w-full">
    <slot></slot>
    <gTabBar :activeTabName="activeTabName"/>
  </view>
</template>
<script setup>
import gTabBar from '../g-tab-bar/g-tab-bar.vue';
const props = defineProps({
  // 激活的菜单索引
  activeTabName: {type: String, required: true},
});
</script>
<style lang="scss" scoped></style>