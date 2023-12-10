<template>
  <!-- <style>
    :root{
      --project-theme-color: {{project.color}}
    }
  </style> -->
  <div class="project-info">
    <Transition name="slide-fade">
      <h1 v-if="showElement" class="project-name">{{ project.name }}</h1>
    </Transition>
    <Transition name="fade">
      <div v-if="showElement" id="project-body" class="project-body">
        <div v-if="project.agency">
          <label> Agency: </label>
          <p>{{ project.agency }}</p>
        </div>

        <label> Year: </label>
        <p>{{ project.year }}</p>

        <div v-if="project.client">
          <label> Client: </label>
          <p>{{ project.client }}</p>
        </div>

        <div v-if="project.role">
          <label> Role: </label>
          <p>{{ project.role }}</p>
        </div>

        <label> Technologies: </label>
        <p>{{ project.technologies }}</p>

        <label> Summary: </label>
        <p>{{ project.summary }}</p>

        <label> Challenges: </label>
        <ul>
          <li v-for="(challenge, index) in project.challenges" :key="index">
            {{ challenge }}
          </li>
        </ul>

        <p v-if="project.githubUrl || project.webUrl">
          &rarr; Visit my
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
            >repo</a
          >
          <span v-if="project.githubUrl && project.webUrl"> and </span>
          <span v-if="project.webUrl">
            <a :href="project.webUrl" target="_blank">demo site</a></span
          >
          here
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// const props = defineProps(["project"]);
defineProps(["project", "showElement"]);
// const customProjectColor = computed(() => {
//   return `--project-theme-color: ${props.project.color}`;
// });
// watch(
//   () => props.project.color,
//   async (newVal) => {
//     await nextTick(() =>
//       this.root.style.setProperty("--project-theme-color", `${newVal}`),
//     );
//   },
// );
// const projectColor = props.project.color;
</script>

<style scoped lang="scss">
.project-name {
  width: fit-content;
  /* height: fit-content; */
  background-color: var(--project-theme-color);
  padding: 0 10px 0 50px;
  /* padding-top: 0; */
  /* margin: 10; */
  font-size: 55px;
  color: #fff;
  // padding-top: 0;
  box-shadow: 12px 12px 3px -1px rgb(0 0 0 / 75%);

  // position: relative;
  // left: -30px;
  position: fixed;
  top: 10%;
  left: 0;

  &::before {
    content: " ";
    width: 0px;
    height: 0px;

    border-style: solid;
    // border-width: 10px 15px 10px 0;
    // // border-color: var(--teal-green);
    // border-color: transparent #dd4397 transparent transparent;
    border-width: 15px;
    border-color: transparent var(--project-theme-color)
      var(--project-theme-color) transparent;
    filter: blur(1px) brightness(60%);

    position: absolute;
    top: -29px;
    left: 0;
    z-index: -1;
  }
}

// .project-name

.project-body {
  margin: 0 1% 0 6%;
  margin-top: 120px;
  height: 67vh;
  overflow: auto;

  // &::-webkit-scrollbar {
  //   display: none;
  // }

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-track {
    display: none;
    // background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  label {
    font-size: 30px;
    font-weight: bolder;
    color: var(--project-theme-color);
  }

  ul {
    padding-inline-start: 23px;
  }

  p,
  li {
    font-size: 25px;
    padding: 5px 0;
  }

  p {
    margin-left: 10px;
    margin-top: 10px;
  }
}

@media (max-width: 750px) {
  .project-info {
    width: 88%;

    .project-name {
      width: 100%;

      position: relative;
      left: -5%;

      font-size: 30px;
    }

    .project-body {
      // margin: 0 2px 0 2px;
      // width: 100%;
      height: 100%;
      margin-top: 0;
      // text-overflow: ;

      label {
        font-size: 15px;
      }

      p,
      li {
        width: 100%;
        font-size: 13px;
        padding: 0;
        margin-left: 5px;
      }
    }
  }
}
</style>
