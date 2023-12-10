<template>
  <div
    class="project-card"
    @mouseover="showName = true"
    @mouseleave="showName = false"
  >
    <img :src="getImageSrc()" :alt="projectName" class="project-img" />
    <Transition name="fade">
      <div v-if="showName" class="project-name">
        <p>{{ projectName }}</p>
        <router-link :to="link">Read more &rarr;</router-link>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const showName = ref(false);
const props = defineProps(["projectName", "projectId"]);
const link = `/projects/${props.projectId}`;

function getImageSrc() {
  var images = require.context("@/assets/imgs/", false, /\.png$/);
  return images("./" + props.projectId + ".png");
}
</script>

<style scoped lang="scss">
.project-card,
.project-img,
.project-name {
  width: 300px;
  height: 220px;
  border-radius: 5px;
}

.project-card {
  margin: 20px;

  box-shadow: -3px 1px 3px -1px rgb(0 0 0 /75%);
  border: 1px solid var(--border-color);

  position: relative;

  .project-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(174, 171, 171, 0.92);

    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;

    p {
      font-size: 24px;
      color: #000;
    }

    a {
      font-size: 18px;
      color: #14365e;
    }
  }
}
</style>
