import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../pages/HomePage.vue";

// import { useAuthStore } from "../stores/auth";
// import { storeToRefs } from "pinia";

// const authStore = useAuthStore();
// const {isAuth} = storeToRefs(authStore);

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
    path: "/new-transaction",
    name: "NewTransactions",
    component: () => import("@/pages/NewTransactionPage"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/pages/SettingsPage"),
  },
  {
    path: "/investments",
    name: "Investments",
    component: () => import("@/pages/InvestmentsPage"),
  },
  {
    path: "/investments/:category",
    component: () => import("@/pages/InvestmentsCategoryPage"),
  },
  {
    path: "/loans",
    name: "Loans",
    component: () => import("@/pages/LoanPage"),
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () => import("@/pages/WalletPage"),
  },
  {
    path: "/documents",
    name: "Documents",
    component: () => import("@/pages/DocumentPage"),
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/pages/HelpPage"),
  },
  {
    path: "/reset-password",
    name: "ResetPwd",
    component: () => import("@/pages/ResetPwd"),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import ('@/pages/NotFoundPage')
   },  
  { path: '/:catchAll(.*)', redirect: '/404' },  
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// pinia.use(store => {
//   // Define the isAuthenticated function using the Pinia store
//   const isAuthenticated = () => {
//     return store.state.isAuthenticated;
//   }

//   // Add the beforeEnter route guard to your routes
//   routes.forEach(route => {
//     route.beforeEnter = (to, from, next) => {
//       if (isAuthenticated()) {
//         next();
//       } else {
//         next('/login');
//       }
//     }
//   });
// });

export default router;
