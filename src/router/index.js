import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import AppCreatePost from "../pages/AppCreatePost.vue";
import AppEditPost from "../pages/AppEditPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/create-post",
    name: "Create Post",
    component: AppCreatePost,
  },
  {
    path: "/edit-post/:id",
    name: "Edit Post",
    component: AppEditPost,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
