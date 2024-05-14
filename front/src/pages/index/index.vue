<script setup>
import { ref } from 'vue'
import {tooggleLed} from '@/api/main'
import tabbar from "@/compmnets/tabbar/tabbar.vue"

const title = ref('Hello')
const switchFlag = ref(false)
const ledFlag = ref(0)

const asyncChange = async()=>{
  const res = await tooggleLed(ledFlag.value)
  if(res.code == 200){
    ledFlag.value = !ledFlag.value
    switchFlag.value = !switchFlag.value
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="m-2 md:m-2 font-black">田皮鸭的家</div>
    <div class="flex flex-row m-1 md:m-2 font-bold">
      <div class="m-1">全屋</div>
      <div class="m-1">客厅</div>
    </div>
    <div class="flex flex-row justify-around">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 w-full m-2">
        <div class="m-1 p-2 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="w-20 h-20">
            <img src="../../static/img/remoteControl.png" class="bg-auto w-full h-full">
          </div>
          <div class="font-bold">手机遥控器</div>
          <up-switch v-model="value" @change="change" class="m-2"></up-switch>
        </div>
        <div class="m-1 p-2 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="w-20 h-20">
            <img src="../../static/img/temprture.png" class="bg-auto w-full h-full">
          </div>
          <div class="font-bold">温湿度计</div>
          <div>温度：20摄氏度</div>
          <div>湿度：50%</div>
        </div>
        <div class="m-1 p-2 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="w-20 h-20">
            <img src="../../static/img/light.png" class="bg-auto w-full h-full">
          </div>
          <div class="font-bold">智能灯泡</div>
          <up-switch v-model="switchFlag" asyncChange @change="asyncChange" class="m-2"></up-switch>
        </div>
        <div class="m-1 p-2 flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:shadow-2xl">
          <div class="w-20 h-20">
            <img src="../../static/img/spaker.png" class="bg-auto w-full h-full">
          </div>
          <div class="font-bold">蓝牙音箱</div>
          <div>正在播放：self love</div>
          <div class="flex flex-row m-2">
            <up-icon name="rewind-left" size="38"></up-icon>
            <up-icon name="pause" size="38" class="mx-2"></up-icon>
            <up-icon name="rewind-right" size="38"></up-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-5">
    <up-button type="primary" :plain="true" :hairline="true" text="编辑"></up-button>
  </div>
  <tabbar active-tab-name="index"></tabbar>
</template>

<style></style>
