<script setup>
import tabbar from '@/compmnets/tabbar/tabbar.vue'
import { ref } from 'vue';
const list3 = ref([
    {
        image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        title: '百合子我老婆',
    },
    {
        image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        title: '身无彩凤双飞翼，心有灵犀一点通',
    },
    {
        image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
    },
]);

const title = ref('标题');
const list = ref([
    {
        name: '选项一',
        subname: "选项一描述",
        color: '#ffaa7f',
        fontSize: '20'
    },
    {
        name: '选项二禁用',
        disabled: true
    },
    {
        name: '开启load加载', // 开启后文字不显示  
        loading: true
    }
]);
const show = ref(true); 
</script>

<template>
    <up-action-sheet :show="show" @close="show = false" :actions="list" cancelText="取消"></up-action-sheet>
    <div class="flex flex-col">
        <up-swiper :list="list3" previousMargin="30" nextMargin="30" circular :autoplay="false" radius="5" indicator
            keyName="image" showTitle indicatorMode="line" bgColor="#ffffff" class="m-2"></up-swiper>
        <div
            class="flex flex-row m-2 p-3 justify-between items-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
            <div class="pl-3">
                <div class="font-extrabold">智能情景</div>
                <div class="text-sm">智能情景，让生活更智能</div>
            </div>
            <div class="pr-3">
                <up-icon size="35" name="hourglass-half-fill"></up-icon>
            </div>
        </div>
        <div
            class="flex flex-row m-2 p-3 justify-between items-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
            <div class="pl-3" @click="show = true">
                <div class="font-extrabold">添加设备</div>
                <div class="text-sm">添加设备</div>
            </div>
            <div class="pr-3">
                <up-icon size="35" name="plus-circle"></up-icon>
            </div>
        </div>
        <div
            class="flex flex-row m-2 p-3 justify-between items-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
            <div class="pl-3">
                <div class="font-extrabold">智能情景</div>
                <div class="text-sm">智能情景，让生活更智能</div>
            </div>
            <div class="pr-3">
                <div>图标</div>
            </div>
        </div>
        <div>ches</div>
    </div>
    <tabbar active-tab-name="controller"></tabbar>
</template>

<style scoped></style>