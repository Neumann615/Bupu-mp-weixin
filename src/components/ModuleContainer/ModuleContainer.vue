<script setup lang="ts">

const props = defineProps({
    title: String,
    subTitle: String,
})
</script>

<template>
    <view  class="module-container">
        <view class="header">
            <view class="sub-title">{{ props.subTitle }}</view>
            <view class="title">{{ props.title }}</view>
        </view>
        <view class="main">
            <slot name="default"></slot>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.module-container {
    box-sizing: border-box;
    padding: 28px 0px;
    background-color: #fff;
    box-sizing: border-box;
    margin: 28px 0px;
}

.header {
    margin-bottom: 28px;
    text-align: center;

    .sub-title {
        color: #CFBB90;
        font-size: 12px;
        line-height: 1.6;
        font-style: italic;
        letter-spacing: .5px;
    }

    .title {
        color: #000;
        font-size: 18px;
        letter-spacing: 1px;
        margin: 5px 0 0 0;
    }
}

.main {}
</style>