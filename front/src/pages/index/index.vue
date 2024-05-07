<script setup>
import {ref} from 'vue'
import tabbar from "@/compmnets/tabbar/tabbar.vue"

const title = ref('Hello')

</script>

<template>
  <div class="flex flex-col">
    <div>田皮鸭的家</div>
    <div class="flex flex-row">
      <div>全屋</div>
      <div>客厅</div>
    </div>
    <div class="flex flex-row">
      <div class=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 ">
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-col ">
            <div class="m-2">手机遥控器</div>
            <up-switch v-model="value" @change="change" class="m-2"></up-switch>
          </div>
          <div class="flex flex-col">
            <div class="m-2">手机遥控器</div>
            <up-switch v-model="value" @change="change" class="m-2"></up-switch>
          </div>
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
