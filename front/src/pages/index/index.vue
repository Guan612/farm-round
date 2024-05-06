<template>
  <base :activeTabName="index">
    <view class="content">
      <image class="logo" src="/static/logo.png"></image>
      <view class="text-area">
        <text class="title">{{ title }}</text>
      </view>
      <up-button text="月落"></up-button>
      <up-button type="primary" shape="circle" text="按钮形状"></up-button>
    </view>
  </base>

</template>

<script setup>
import { ref } from 'vue'
import base from '@/compmnets/base-wrapper/base-wrapper.vue'

const title = ref('Hello')

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
