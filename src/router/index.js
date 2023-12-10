import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("@/pages/HomePage");
const ProjectDetails = () => import("@/pages/ProjectDetails");

const history = createWebHistory();

const routes = [
  {
    path: "/",
    // name: "HomePage",
    component: HomePage,
    alias: "/home",
  },
  {
    path: "/projects/:projectId",
    // name: "ProjectDetails",
    component: ProjectDetails,
  },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior(to) {
    // console.log(to.hash);
    if (to.hash) {
      return {
        el: to.hash,
        top: 85,
        behavior: "smooth",
      };
      // } else if (to.name == "ProjectDetails") {
      //   return {
      //     el: "#project-body",
      //     top: 0,
      //   };
    } else
      return {
        top: 0,
        // el: to.hash,
        behavior: "smooth",
      };
  },
});

export default router;
