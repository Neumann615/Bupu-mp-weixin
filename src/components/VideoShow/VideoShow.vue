<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
const isPlayVideo = ref(false)
const ctx = getCurrentInstance()
const props = defineProps({
    cover: String,
    url: String
})
const videoHeight = ref(0)


function playVideo() {
    uni.createSelectorQuery().in(ctx).select(".cover").boundingClientRect((data: any) => {
        console.log(data)
        videoHeight.value = data.height
        setTimeout(() => {
            isPlayVideo.value = true
        }, 100)
    }).exec()
}
</script>

<template>
    <view class="video-show">
        <video v-if="isPlayVideo" :style="{ width: '100%', height: videoHeight + 'px' }" autoplay mode="widthFix"
            :src="props.url"></video>
        <view v-else class="cover">
            <image mode="widthFix" :src="props.cover" />
            <view class="cover-action">
                <uni-icons @tap="playVideo" type="paperplane-filled" size="42" color="rgba(255,255,255,.8)"></uni-icons>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.video-show {
    width: 100%;
    height: auto;
    box-sizing: border-box;
}

.video {
    width: 100%;
}

.cover {
    width: 100%;
    position: relative;

    &-action {
        position: absolute;
        z-index: 99;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
    }
}
</style>