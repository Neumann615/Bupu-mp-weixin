<script setup lang="ts">
const props = defineProps({
  imageList: Array<string>,
  gap: {
    type: Number,
    default: 8
  }
})
</script>

<template>
  <view class="grid-container" :style="{ gap: props.gap + 'px', padding: props.gap + 'px' }">
    <view class="grid-item" v-for="(item, index) in props.imageList" :key="index"
      :style="{ backgroundImage: 'url(' + item + ')' }">
    </view>
  </view>
</template>

<style lang="scss" scoped>
.grid-container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  box-sizing: border-box;
}

.grid-item {
  aspect-ratio: 1;
  background-position: center;
  background-size: cover;
}
</style>
