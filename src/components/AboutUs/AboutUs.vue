<script setup lang="ts">
import type { PropType } from "vue";
import type { BaseConfig } from "@/types/config";
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
  },
  isNeedJumpToDetails: {
    type: Boolean,
    default: false
  }
})

function toDetails() {
  console.log("跳转到详情页面")
  uni.switchTab({
    url: "/pages/about/about"
  })
}
</script>

<template>
  <view class="blackish-wooden-floor">
    <view class="logo">
      <image :src="props.baseInformation.logo"></image>
    </view>
    <view class="information">
      <view class="information-title">
        {{ props.baseInformation.name }}
      </view>
      <view class="information-description">
        <rich-text :nodes="props.baseInformation.description">
        </rich-text>
      </view>
      <view class="information-details" @tap="toDetails" v-show="props.isNeedJumpToDetails">
        [MORE]
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.logo {
  margin-right: 10px;

  image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.information {
  flex: 1;
  width: 1px;

  &-title {
    font-size: 18px;
    color: rgba(255, 255, 255, .9);
    margin-bottom: 10px;
  }

  &-description {
    color: rgba(255, 255, 255, .6);
    font-size: 14px;
  }

  &-details {
    margin-top: 4px;
    color: #07c160;
    font-size: 14px;
    line-height: 1.5;
  }
}

.wooden-floor {
  width: 100%;
  height: 500px;
  /* 基础颜色，模拟木材底色 */
  background-color: #E5CDA0;

  /* 利用线性渐变模拟木纹的基本走向 */
  background-image: linear-gradient(45deg,
      rgba(180, 130, 70, 0.2) 25%,
      transparent 25%,
      transparent 75%,
      rgba(180, 130, 70, 0.2) 75%,
      rgba(180, 130, 70, 0.2));

  /* 重复渐变，模拟木板连续性 */
  background-size: 100px 100px;
  /* 调整大小以适应木板纹理的自然感 */

  /* 添加一些杂色，模拟自然木质的不规则感 */
  background-image:
    linear-gradient(45deg, rgba(180, 130, 70, 0.2) 25%, transparent 25%, transparent 75%, rgba(180, 130, 70, 0.2) 75%, rgba(180, 130, 70, 0.2)),
    radial-gradient(at 50% 50%, rgba(190, 150, 90, 0.1) 1px, transparent 1px),
    radial-gradient(at 50% 50%, rgba(190, 150, 90, 0.1) 1px, transparent 1px);
  background-size: 100px 100px, 10px 10px, 10px 10px;
  background-position: 0 0, 20px 20px, 40px 40px;

  /* 模拟木板间的间隙 */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1) inset, 0 -5px 5px rgba(255, 255, 255, 0.1) inset;


  /* 可选：增加一点光泽感 */
  border-radius: 4px;
}

.dark-wooden-floor {
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: border-box;
  padding: 25px 20px;
  /* 深色底色，模拟深色木材 */
  background-color: #382818;

  /* 使用线性渐变模拟木纹，颜色更深，模拟深色木材的纹路 */
  background-image: linear-gradient(45deg,
      rgba(50, 30, 10, 0.2) 25%,
      transparent 25%,
      transparent 75%,
      rgba(50, 30, 10, 0.2) 75%,
      rgba(50, 30, 10, 0.2));

  /* 调整渐变大小，使其更适合深色木板的纹理 */
  background-size: 120px 80px;

  /* 添加细微的杂色，模拟木材的自然瑕疵 */
  background-image:
    linear-gradient(45deg, rgba(50, 30, 10, 0.2) 25%, transparent 25%, transparent 75%, rgba(50, 30, 10, 0.2) 75%, rgba(50, 30, 10, 0.2)),
    radial-gradient(at 50% 50%, rgba(60, 40, 20, 0.1) 1px, transparent 1px),
    radial-gradient(at 50% 50%, rgba(60, 40, 20, 0.1) 1px, transparent 1px);
  background-size: 120px 80px, 15px 15px, 15px 15px;
  background-position: 0 0, 30px 30px, 60px 60px;

  /* 模拟木板间隙，阴影颜色也要相应调整 */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2) inset, 0 -5px 5px rgba(50, 50, 50, 0.1) inset;

  /* 为了增强深色地板的质感，可以适当增加边框圆角 */
  border-radius: 5px;

  /* 示例中的其他样式，如填充和外边距，可以根据实际需要调整 */
}

.blackish-wooden-floor {
  width: 100%;
  height: auto;
  /* 深黑色底色，模拟非常深色的木材 */
  background-color: #1A1512;
  box-sizing: border-box;
  padding: 25px 20px;
  display: flex;

  /* 使用多重线性渐变叠加，创造不规则纹理的基础 */
  background-image:
    repeating-linear-gradient(45deg,
      rgba(30, 20, 10, 0.3) 0%,
      rgba(30, 20, 10, 0.3) 10%,
      transparent 10%,
      transparent 20%),
    repeating-linear-gradient(-45deg,
      rgba(40, 30, 20, 0.2) 0%,
      rgba(40, 30, 20, 0.2) 15%,
      transparent 15%,
      transparent 30%),
    /* 添加随机点状纹理以增加不规律感 */
    radial-gradient(circle at 50% 50%, rgba(60, 40, 20, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 30% 70%, rgba(80, 60, 40, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 70% 30%, rgba(50, 30, 20, 0.1) 1px, transparent 1px);

  /* 调整纹理的大小和位置，创造更多随机性 */
  background-size:
    150px 100px,
    150px 100px,
    30px 30px,
    30px 30px,
    30px 30px;

  /* 模拟木板间隙，阴影颜色也调整为深色调 */
  box-shadow:
    0 5px 5px rgba(0, 0, 0, 0.3) inset,
    0 -5px 5px rgba(30, 20, 10, 0.1) inset;

  /* 边缘处理，可选，根据需要调整 */
  border-radius: 5px;

  /* 示例中的其他样式，如填充和外边距，可以根据实际需要调整 */
}
</style>