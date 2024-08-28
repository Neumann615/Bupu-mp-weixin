<script setup lang="ts">
import { ref, computed } from "vue"
const props = defineProps({

    location: {
        type: Object,
        default: {
            name: "天安门广场",
            address: "北京市东城区东长安街",
            latitude: 39.909,
            longitude: 116.39742
        }
    }
})
const covers = computed(() => {
    return [
        {
            id: 1,
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            width: 20,
            height: 28
        }
    ]
})

function navigateTo() {
    // 调用uniapp API打开系统导航
    console.log("调用跳转程序")
    uni.openLocation({
        latitude: props.location.latitude,
        longitude: props.location.longitude,
        name: props.location.name,
        address: props.location.address,
        success() {
            console.log('导航成功');
        },
        fail(error) {
            console.error('导航失败', error);
        }
    });
}

</script>

<template>
    <view class="location">
        <view class="location-header">
            <view class="ellipsis-line1" style="margin-right: 12px;">{{ props.location.address }}</view>
            <uni-icons @tap="navigateTo" type="location-filled" size="28" color="#07c160"></uni-icons>
        </view>
        <map style="width: 100%; height: 260px;" scale="13" :latitude="props.location.latitude"
            :longitude="props.location.longitude" :markers="covers">
        </map>
    </view>
</template>

<style lang="scss" scoped>
.location {
    width: 100%;
    height: auto;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0px 16px 32px 16px;

    &-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        letter-spacing: 1px;
        box-sizing: border-box;
        padding: 16px 0px;
        border-top: 1px solid rgba(0, 0, 0, .1);
    }
}
</style>