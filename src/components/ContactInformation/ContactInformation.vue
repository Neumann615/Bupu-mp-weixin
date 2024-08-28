<script setup lang="ts">
import type { BaseConfig } from "@/types/config";
import type { PropType } from 'vue';

const props = defineProps({
    baseInformation: {
        type: Object as PropType<BaseConfig>,
        default: {
            /**店铺名 */
            name: "",
            /**品牌logo*/
            logo: "",
            /**简单介绍*/
            introduce: "",
            /**富文本店铺信息描述*/
            description: "",
            /**联系电话 */
            tel: "",
            /**微信号 */
            wxId: "",
            /**地址信息*/
            location: {
                name: "",
                address: "",
                latitude: "",
                longitude: ""
            },
            /**技术支持相关配置 */
            technicalSupport: {
                /**显示技术支持项 */
                show: true,
                /**技术支持文本显示 */
                text: "技术支持@小诺小诺",
                /**技术支持跳转链接 */
                link: ""
            }
        }
    }
})

</script>

<template>
    <view class="container">
        <view class="information">
            <view class="information-mask"></view>
            <view class="information-content">
                <view>
                    <text class="information-content-label">微信:</text>
                    <text>{{ props.baseInformation.wxId }}</text>
                </view>
                <view>
                    <text class="information-content-label">电话:</text>
                    <text>{{ props.baseInformation.tel }}</text>
                </view>
                <view>
                    <text class="information-content-label">地址:</text>
                    <text>{{ props.baseInformation.location.address }}</text>
                </view>
                <view class="contact-way">
                    <view class="contact-way-item">
                        <uni-icons type="phone-filled" size="24" color="rgba(255,255,255,.6)"></uni-icons>
                    </view>
                    <view class="contact-way-item">
                        <uni-icons type="weixin" size="24" color="rgba(255,255,255,.6)"></uni-icons>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: auto;
}

.information {
    width: 100%;
    height: 300px;
    background: url("https://img.picbling.cn/rvng0_230428_175628_8950370926_h0lza-wechatApp800") center / cover no-repeat;
    position: relative;

    &-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-color: rgba(0, 0, 0, .6);
    }

    &-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        font-size: 14px;
        color: rgba(255, 255, 255, .6);
        box-sizing: border-box;
        padding: 50px 20px;
        line-height: 2;

        &-label {
            margin-right: 8px;
        }

        .contact-way {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &-item {
                box-sizing: border-box;
                border: 1px solid rgba(255, 255, 255, 0.2);
                display: inline-block;
                vertical-align: top;
                margin: 3em 15px 0 0;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: #999;
            }
        }
    }
}

.flex-center {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>