<script setup>
import { ref } from 'vue'
import tabbar from "@/compmnets/tabbar/tabbar.vue"

const title = ref('Hello')

</script>

<template>
  <div class="flex flex-col">
    <div class="m-2 md:m-2 font-black">田皮鸭的家</div>
    <div class="flex flex-row m-1 md:m-2 font-bold">
      <div class="m-1">全屋</div>
      <div class="m-1">客厅</div>
    </div>
    <div class="flex flex-row justify-around">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        <div class="m-1 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="m-2">手机遥控器</div>
          <up-switch v-model="value" @change="change" class="m-2"></up-switch>
        </div>
        <div class="m-1 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="m-2">xiaomi Su7</div>
          <up-switch v-model="value" @change="change" class="m-2"></up-switch>
        </div>
        <div class="m-1 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="m-2">电动牙刷</div>
          <up-switch v-model="value" @change="change" class="m-2"></up-switch>
        </div>
        <div class="m-1 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="m-2">空调</div>
          <up-switch v-model="value" @change="change" class="m-2"></up-switch>
        </div>
        <div class="m-1 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="m-2">温湿度计</div>
          <div>温度：20摄氏度</div>
          <div>湿度：50%</div>
        </div>
      </div>
    </div>
    <div class="m-10">
      <up-button type="primary" :plain="true" :hairline="true" text="编辑"></up-button>
    </div>
  </div>
  <tabbar active-tab-name="index"></tabbar>
</template>

<style></style>
