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
        <!-- <a @click="goToProjectDetails">Read more &rarr;</a> -->
        <router-link :to="link">Read more &rarr;</router-link>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
// import { useRouter } from "vue-router";

const showName = ref(false);
const props = defineProps(["projectName", "projectId"]);
// const router = useRouter();
const link = `/projects/${props.projectId}`;

function getImageSrc() {
  var images = require.context("@/assets/imgs/", false, /\.png$/);
  return images("./" + props.projectId + ".png");
  // return require(`${props.project.src}`);
}

// function goToProjectDetails() {
//   router.push({
//     name: "ProjectDetails",
//     params: {
//       link: props.project.link,
//     },
//   });
// }
// const project = props.project;
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
  // width: 300px;
  // height: 220px;
  margin: 20px;

  box-shadow: -3px 1px 3px -1px rgb(0 0 0 /75%);
  border: 1px solid var(--border-color);
  // border-radius: 5px;
  // transition: all 0.3 ease;

  position: relative;

  // .project-img {
  // }

  // .project-card:hover {
  // filter: blur(1px) brightness(60%);
  // }

  .project-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // padding: 0 10px;
    // width: 300px;
    // height: 220px;
    // border-radius: 5px;
    background-color: rgba(174, 171, 171, 0.92);

    position: absolute;
    top: 0;
    left: 0;
    // z-index: 2;
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

// .slide-fade-enter-to,
// .slide-fade-leave-from {
//   background-color: rgb(255 255 255 / 50%);
// }

// .slide-fade-enter-active {
//   transition: all 0.3s ease-out;
// }

// .slide-fade-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   transform: translateY(20px);
//   opacity: 0;
// }
</style>
