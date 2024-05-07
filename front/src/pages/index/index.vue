<script setup>
import {ref} from 'vue'
import tabbar from "@/compmnets/tabbar/tabbar.vue"

const title = ref('Hello')

</script>

<template>
  <div class="flex flex-col">
    <div class="">区域1</div>
    <div class="">区域2</div>
  </div>
  <tabbar active-tab-name="index"></tabbar>
</template>

<style></style>
