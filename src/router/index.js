import { createRouter, createWebHistory } from "vue-router";
import { AppRoutes } from "../modules/apps/AppRoutes";

const routes = [...AppRoutes];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;
