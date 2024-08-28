<script setup lang="ts">
import Classify from '@/components/Classify/Classify.vue';
import ContactInformation from "@/components/ContactInformation/ContactInformation.vue";
import TechnicalSupport from "@/components/TechnicalSupport/TechnicalSupport.vue";
import { useConfigStore } from '@/stores';

const { config } = useConfigStore()
</script>

<template>
  <Classify :atlasList="config?.template.classify.atlasList" :renderType="config?.template.classify.renderType"
    :typeList="config?.template.classify.typeList">
    <template #footer>
      <ContactInformation :baseInformation="config?.base"></ContactInformation>
      <TechnicalSupport :baseInformation="config?.base.technicalSupport"></TechnicalSupport>
    </template>
  </Classify>
</template>

<style lang="scss">
/* global.css 或 页面的<style>标签内 */
</style>
