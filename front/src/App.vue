<script setup>
import { onShow } from '@dcloudio/uni-app';
    onShow(() => {
        // #ifndef MP-WEIXIN
        uni.hideTabBar(); // 隐藏原生tabBar
        // #endif
    });
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-plus/index.scss";
</style>