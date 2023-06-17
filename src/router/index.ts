import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsOverviewView from "../views/ProjectsOverviewView.vue";
import ProjectView from "../views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: HomeView
    },
    {
      path: "/projects-overview",
      name: "projects-overview",
      component: ProjectsOverviewView
    },
    {
      path: "/project",
      name: "project",
      component: ProjectView
    }
  ]
});

export default router;
