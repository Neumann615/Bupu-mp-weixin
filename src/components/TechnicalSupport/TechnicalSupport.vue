<script lang="ts" setup>
const props = defineProps({
    technicalSupport: {
        default: {
            show: true,
            /**技术支持文本显示 */
            text: "技术支持@小诺小诺",
            /**技术支持跳转链接 */
            link: "https://xiaonuo.love/"
        }
    }
})

function introduceOurTeam() {
    console.log("显示我们的技术人员支持列表")
}
</script>
<template>
    <view class="support" v-if="props.technicalSupport.show" @tap="introduceOurTeam">
        {{ props.technicalSupport.text }}
    </view>
</template>
<style lang="scss" scoped>
.support {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0c0c0c;
    width: 100%;
    height: 58px;
    font-size: 14px;
    color: rgba(255, 255, 255, .6);
}
</style>