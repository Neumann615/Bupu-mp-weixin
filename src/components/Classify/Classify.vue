<script lang="ts" setup>
import type { PropType } from "vue";
import type { ClassifyRenderType } from "@/types/config"
import { ref, computed } from "vue"
const props = defineProps({
    renderType: {
        type: String as PropType<ClassifyRenderType>,
        default: "TopAndBottom"
    },
    typeList: {
        type: Array,
        default: []
    },
    atlasList: {
        type: Array,
        default: []
    }
})
/**单列布局singleColumn  双列布局dualColumn*/
const layoutType = ref("dualColumn")
const nowType = ref("all")
const atlasList = computed(() => nowType.value === "all" ? props.atlasList : props.atlasList.filter((item) => item.type === nowType.value))

function changeLayoutType() {
    if (layoutType.value === "singleColumn") {
        layoutType.value = "dualColumn"
    } else {
        layoutType.value = "singleColumn"
    }
}

</script>
<template>
    <view class="classify">
        <view class="classify-header">
            <scroll-view :scroll-x="true" class="classify-header-module">
                <view @tap="() => {
                nowType = 'all'
            }" class="classify-item ellipsis-line1" :class="{ 'classify-item-selected': nowType === 'all' }">
                    全部
                </view>
                <view v-for="(item, index) in props.typeList" @tap="() => {
                nowType = item.type
            }" class="classify-item ellipsis-line1" :class="{ 'classify-item-selected': nowType === item.type }">
                    {{ item.title }}
                </view>
            </scroll-view>
            <view class="classify-header-action">
                <view class="action-item">
                    <uni-icons type="search" size="24" color="#07c160"></uni-icons>
                </view>
                <view class="action-item">
                    <uni-icons @tap="changeLayoutType" type="phone-filled" size="24" color="#07c160"></uni-icons>
                </view>
            </view>
        </view>
        <scroll-view scroll-y class="classify-main">
            <template v-if="layoutType === 'singleColumn'">
                <view class="single-item" v-for="(item, index) in atlasList" :key="index">
                    <view class="atlas-cover" :style="{ backgroundImage: 'url(' + item.cover + ')' }">
                        <view class="atlas-image-number">
                            {{ item.images?.length }}
                        </view>
                    </view>
                    <view class="atlas-information">
                        <view class="atlas-information-title">
                            {{ item.title }}
                        </view>
                        <view class="atlas-information-description">
                            {{ item.description }}
                        </view>
                    </view>
                </view>
            </template>
            <template v-else-if="layoutType === 'dualColumn'">
                <view class="dual-layout-container">
                    <view class="dual-item" v-for="(item, index) in atlasList" :key="index">
                        <view class="dual-cover" :style="{ backgroundImage: 'url(' + item.coverOriginal + ')' }"></view>
                        <view class="dual-information">
                            <view class="dual-information-title">
                                {{ item.title }}
                            </view>
                            <uni-icons type="star" size="20" color="rgba(0,0,0,.7)"></uni-icons>
                        </view>
                    </view>
                </view>
            </template>
            <slot name="footer"></slot>
        </scroll-view>
    </view>
</template>

<style lang="scss">
page {
    overflow: hidden;
    height: 100%;
}

.classify {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;


    &-header {
        width: 100%;
        height: auto;
        display: flex;
        box-sizing: border-box;
        padding: 0px 4px 2px 4px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);

        &-module {
            flex: 1;
            white-space: nowrap;

            .classify-item {
                width: auto;
                height: auto;
                box-sizing: border-box;
                padding: 0px 12px;
                display: inline-block;
                height: 44px;
                line-height: 44px;
                text-align: center;
                font-size: 14px;
                color: rgba(0, 0, 0, .6);
            }

            .classify-item-selected {
                border-bottom: 4px solid #07c160;
            }
        }

        &-action {
            display: flex;

            .action-item {
                width: 44px;
                height: 44px;
                box-sizing: border-box;
                display: grid;
                place-items: center;
            }
        }
    }

    &-main {
        width: 100%;
        flex: 1;
        box-sizing: border-box;

        .single-item {
            margin-bottom: 12px;

            .atlas-cover {
                width: 100%;
                height: 260px;
                background-position: center;
                background-size: cover;
                position: relative;

                .atlas-image-number {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    background-color: rgba(0, 0, 0, 0.05);
                    color: rgba(255, 255, 255, .8);
                    left: 12px;
                    top: 12px;
                    display: grid;
                    place-items: center;
                    font-size: 10px;
                    box-sizing: border-box;
                    border: 1px solid rgba(255, 255, 255, .8);
                }
            }

            .atlas-information {
                box-sizing: border-box;
                padding: 24px;

                &-title {
                    font-size: 17px;
                    letter-spacing: 1px;
                    text-align: center;
                    margin-bottom: 12px;
                }

                &-description {
                    font-size: 14px;
                    color: rgba(0, 0, 0, .6);
                    line-height: 1.5;
                }
            }
        }

        .dual-item {
            width: 100%;
            height: auto;
            box-sizing: border-box;

            .dual-cover {
                width: 100%;
                height: 260px;
                background-position: center;
                background-size: cover;
                position: relative;
            }

            .dual-information {
                box-sizing: border-box;
                padding: 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                &-title {
                    font-size: 13px;
                    color: rgba(0, 0, 0, .9);
                }
            }
        }
    }

    .dual-layout-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        box-sizing: border-box;
        padding: 8px;
    }
}
</style>