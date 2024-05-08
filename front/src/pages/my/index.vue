<script setup>
import gTabBar from '../../compmnets/tabbar/tabbar.vue';
import { ref } from 'vue';
const imgsrc = ref('https://img2.imgtp.com/2024/04/09/OmWWam4c.jpg');
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-row m-2 p-3 justify-between items-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
            <div class="pl-3">
                <div class="font-extrabold">田皮鸭</div>
                <div>uid：123456789</div>
                <div class="flex flex-row">
                    <div>2个家庭</div>
                    <div class="ml-1">10个智能设备</div>
                </div>
            </div>
            <div class="pr-3">
                <up-avatar :src="imgsrc" size="60"></up-avatar>
            </div>
        </div>
        <div>
            信息区
        </div>
    </div>

    <gTabBar activeTabName="my"></gTabBar>
</template>

<style scoped></style>