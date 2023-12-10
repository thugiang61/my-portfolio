import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("@/pages/HomePage");
const ProjectDetails = () => import("@/pages/ProjectDetails");

const history = createWebHistory();

const routes = [
  {
    path: "/",
    component: HomePage,
    alias: "/home",
  },
  {
    path: "/projects/:projectId",
    component: ProjectDetails,
  },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 85,
        behavior: "smooth",
      };
    } else
      return {
        top: 0,
        behavior: "smooth",
      };
  },
});

export default router;
