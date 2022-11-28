import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/AppLogin"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/pages/AppRegister"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("@/pages/CardPage"),
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: () => import("@/pages/TransactionsPage"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/pages/SettingsPage"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/pages/InvestmentsPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
