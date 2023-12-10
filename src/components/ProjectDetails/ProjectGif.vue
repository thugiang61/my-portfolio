<template>
  <Transition name="slide-fade">
    <PreviewInfo
      v-if="showElement"
      :width="isMobile ? RESPONSIVE_WIDTH : width"
      :height="isMobile ? RESPONSIVE_HEIGHT : height"
      :color="projectColor"
    >
      <img :src="getSrc()" :alt="projectName" :style="customWidthHeight" />
      <i v-if="!showGif">*Limit animations for security reasons</i>
    </PreviewInfo>
  </Transition>
</template>

<script setup>
import PreviewInfo from "@/components/common/PreviewInfo.vue";
import useDetectMobile from "@/composables/DetectMobile";
import { defineProps, computed } from "vue";

const RESPONSIVE_WIDTH = "360";
const RESPONSIVE_HEIGHT = "350";
const width = "450";
const height = "350";

const { isMobile } = useDetectMobile();
const customWidthHeight = computed(() =>
  isMobile.value
    ? `width: ${RESPONSIVE_WIDTH}px; height: ${RESPONSIVE_HEIGHT}px;`
    : `width: ${width}px; height: ${height}px;`,
);

const props = defineProps([
  "projectName",
  "projectId",
  "projectColor",
  "showGif",
  "showElement",
]);

function getSrc() {
  if (props.showGif) {
    var gifs = require.context("@/assets/gifs/", false, /\.gif$/);
    return gifs("./" + props.projectId + ".gif");
  } else {
    var imgs = require.context("@/assets/imgs/", false, /\.png$/);
    return imgs("./" + props.projectId + ".png");
  }
}
</script>

<style scoped>
i {
  position: absolute;
  bottom: -10%;
  left: 20%;
}

@media (max-width: 750px) {
  i {
    left: 10%;
    font-size: 13px;
  }
}
</style>
