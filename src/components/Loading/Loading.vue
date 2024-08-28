<script lang="ts" setup>
import loadingSvg from "./loading.svg"
import { useConfigStore } from "@/stores";
import { asyncGenerateTestData } from "@/utils/data";
import { onMounted } from "vue";
const configStore = useConfigStore()

onMounted(() => {
    asyncGenerateTestData().then((v: any) => {
        console.log("拿到的测试数据", v)
        if (v.template.name === "lnxnhslfg") {
            uni.showTabBar()
        }
        configStore.setConfig(v)
        configStore.setIsLoading(false)
    })
})
</script>
<template>
    <view class="loading-container">
        <image mode="widthFix" class="loading-logo" src="./loading.svg"></image>
    </view>
</template>
<style lang="scss" scoped>
.loading-container {
    width: 100%;
    height: 100vh;
    background: red;
    position: relative;

    .loading-logo {
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translateX(-50%);
    }

    image {
        width: 88px;
    }
}
</style>