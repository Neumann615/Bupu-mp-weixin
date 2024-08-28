<script setup lang="ts">
import ContactInformation from "@/components/ContactInformation/ContactInformation.vue"
import ImageBlockList from "@/components/ImageBlockList/ImageBlockList.vue"
import Location from "@/components/Location/Location.vue"
import TechnicalSupport from "@/components/TechnicalSupport/TechnicalSupport.vue"
import { useConfigStore } from "@/stores"

const { config } = useConfigStore()
console.log("获取到的测试数据", config)
</script>
<template>
  <view-scroll class="about">
    <view class="header">
      <view>
        <view class="logo">
          <image :src="config?.base.logo"></image>
        </view>
        <text class="title">{{ config?.base.name }}</text>
        <text class="desc">{{ config?.base.introduce }}</text>
        <text class="location">湖北 武汉</text>
      </view>
    </view>
    <view class="main">
      <view class="content">
        <view class="content-header"></view>
        <view class="content-text">
          <rich-text :nodes="config?.base.description">
          </rich-text>
          <image class="content-logo" :src="config?.base.logo"></image>
        </view>
        <view class="content-footer"></view>
      </view>
    </view>
    <view style="margin-bottom: 20px;">
      <ImageBlockList :imageList="config?.template.about.pictureOverview"></ImageBlockList>
    </view>
    <Location :location="config?.base?.location"></Location>
    <ContactInformation :baseInformation="config?.base"></ContactInformation>
    <TechnicalSupport :baseInformation="config?.base.technicalSupport"></TechnicalSupport>
  </view-scroll>
</template>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15% 0 20px 0;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .title {
    text-align: center;
    display: block;
    font-weight: 550;
    letter-spacing: 1px;
    color: rgb(51, 51, 51);
    font-size: 18px;
    margin-bottom: 8px;
  }

  .desc {
    text-align: center;
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: #CFBB90;
  }

  .location {
    text-align: center;
    display: block;
    font-size: 14px;
    color: rgb(153, 153, 153);
  }
}

.main {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  .content {
    width: 100%;
    height: 100%;
    white-space: pre-wrap;
    background-color: rgb(248, 248, 248);

    &-text {
      padding: 20px 20px 15px 20px;
      color: rgb(51, 51, 51);
      line-height: 1.6;
      text-align: left;
    }

    &-logo {
      width: 36px;
      height: 36px;
      display: block;
      margin: 12px auto;
    }

    .header {}

    .footer {}
  }
}
</style>
