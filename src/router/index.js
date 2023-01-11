// Import Vue router
import { createRouter, createWebHistory } from "vue-router";

// Import Routes
import routes from "./routes";

// Create Router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router