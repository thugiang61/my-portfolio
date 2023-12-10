<template>
  <div
    id="past-projects"
    class="section-border-bottom"
    v-motion-slide-visible-right
  >
    <h1>Some of my past projects</h1>
    <h3>Homemade</h3>
    <div class="projects">
      <ProjectCard
        v-for="(homemadeProject, index) in homemadeProjects"
        :key="index"
        :project-name="homemadeProject.name"
        :project-id="homemadeProject.id"
      />
    </div>
    <h3>From work</h3>
    <div class="projects">
      <ProjectCard
        v-for="(workProject, index) in workProjects"
        :key="index"
        :project-name="workProject.name"
        :project-id="workProject.id"
      />

      <!-- <img :src="homemadeProject.src" :alt="homemadeProject.name" class="project-img" />
    <div class="project-name">
      <p>{{ homemadeProject.name }}</p>
    </div> -->
    </div>

    <p>During my internship and working period,</p>
    <p>
      I've been working on different projects, be it a out-source software
      company and a logistics software company!
    </p>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/HomePage/ProjectSection/ProjectCard";

import { homemadeProjects } from "@/data/projects-details";
import { workProjects } from "@/data/projects-details";

// import { homemadeProjects, workProjects } from "@/data/projects-details";

// const homemadeProjects =homemadeProjectsData

// const workProjects = [
//   {
//     fileName: "api-customer-order",
//     projectName: "Api customer order",
//   },
//   {
//     fileName: "customer-order-web",
//     projectName: "Customer order web",
//   },
//   {
//     fileName: "plan-s",
//     projectName: "Plan-s web",
//   },
// ];
</script>

<style scoped>
#past-projects {
  text-align: center;
}

p {
  font-size: 20px;
}

.projects {
  /* display: flex;
  justify-content: center;
  height: fit-content; */
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: space-evenly;
}
</style>
