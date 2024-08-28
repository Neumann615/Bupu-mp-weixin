<script setup lang="ts">

const props = defineProps({
    typeList: {
        default: []
    }
})
</script>
<template>
    <view class="grid-container">
        <view class="grid-item" v-for="(item, index) in props.typeList" :key="index">
            <view class="cover">
                {{ item.title }}
            </view>
            <image mode="widthFix" lazy-load :src="item.cover" style="width: 100%;"></image>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.grid-container {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    box-sizing: border-box;
    gap: 4px;
    padding: 4px;
}

.grid-item {
    box-sizing: border-box;
    position: relative;
    height: auto;
}

.cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, .9);
}
</style>