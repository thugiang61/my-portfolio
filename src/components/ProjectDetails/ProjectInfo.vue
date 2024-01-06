<template>
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

defineProps(["project", "showElement"]);
</script>

<style scoped lang="scss">
.project-name {
  width: fit-content;
  background-color: var(--project-theme-color);
  padding: 0 10px 0 50px;
  font-size: 55px;
  color: #fff;
  box-shadow: 12px 12px 3px -1px rgb(0 0 0 / 75%);

  position: fixed;
  top: 10%;
  left: 0;

  &::before {
    content: " ";
    width: 0px;
    height: 0px;

    border-style: solid;
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

.project-body {
  margin: 0 1% 0 6%;
  margin-top: 120px;
  height: 67vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-track {
    display: none;
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
      height: 100%;
      margin-top: 0;

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
