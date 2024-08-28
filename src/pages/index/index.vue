<script setup lang="ts">
import AboutUs from "@/components/AboutUs/AboutUs.vue"
import BupuSwiper from "@/components/BupuSwiper/BupuSwiper.vue"
import ContactInformation from "@/components/ContactInformation/ContactInformation.vue"
import Loading from "@/components/Loading/Loading.vue"
import Location from "@/components/Location/Location.vue"
import ModuleContainer from "@/components/ModuleContainer/ModuleContainer.vue"
import TechnicalSupport from "@/components/TechnicalSupport/TechnicalSupport.vue"
import VideoShow from "@/components/VideoShow/VideoShow.vue"
import WorksExhibition from "@/components/WorksExhibition/WorksExhibition.vue"
import { useConfigStore } from "@/stores"

const configStore = useConfigStore()

</script>

<template>
  <Loading v-show="configStore.isLoading"></Loading>
  <scroll-view v-if="!configStore.isLoading" enable-back-to-top refresher-enabled class="scroll-view" scroll-y>
    <BupuSwiper :list="configStore.config?.template.home.slideImages">
    </BupuSwiper>
    <ModuleContainer v-show="configStore.config?.template.home.worksExhibition.show"
      :title="configStore.config?.template.home.worksExhibition.title" sub-title="Works Exhibition">
      <WorksExhibition :typeList="configStore.config?.template.home.worksExhibition.typeList"></WorksExhibition>
    </ModuleContainer>
    <ModuleContainer v-show="configStore.config?.template.home.videoShow.show"
      :title="configStore.config?.template.home.videoShow.title" sub-title="Video Show">
      <VideoShow :url="configStore.config?.template.home.videoShow.videoPath"
        :cover="configStore.config?.template.home.videoShow.videoCover">
      </VideoShow>
    </ModuleContainer>
    <ModuleContainer v-show="configStore.config?.template.home.aboutUs.show"
      :title="configStore.config?.template.home.aboutUs.title" sub-title="About-us">
      <AboutUs :baseInformation="configStore.config?.base"
        :isNeedJumpToDetails="configStore.config?.template.home.aboutUs.isNeedJumpToDetails">
      </AboutUs>
    </ModuleContainer>
    <Location :location="configStore.config?.base?.location"></Location>
    <ContactInformation :baseInformation="configStore.config?.base"></ContactInformation>
    <TechnicalSupport :baseInformation="configStore.config?.base.technicalSupport"></TechnicalSupport>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
