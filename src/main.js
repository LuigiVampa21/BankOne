import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";
import socket from './webSocket/socket'

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/core.css";

/* Components */
import BaseLayout from "@/components/base/BaseLayout.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BaseAvatar from "@/components/base/BaseAvatar.vue";
import BaseItemRow from "@/components/base/BaseItemRow.vue";
import { useAuthStore } from "./stores/auth";

const app = createApp(App).use(IonicVue).use(createPinia()).use(router);

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const id = await authStore.getFromStorage("userID");
  if (to.path === '/login' || to.path === '/register' || to.path === '/404' || to.path.startsWith('/reset-password')) {
    next();
    return;
  }
  if (id) {
    next();
  } else {
    next('/login');
  }
});


app.config.warnHandler = () => null;
app.config.globalProperties.$sockets = socket;

app.component("base-layout", BaseLayout);
app.component("base-card", BaseCard);
app.component("base-avatar", BaseAvatar);
app.component("base-item-row", BaseItemRow);


router.isReady().then(() => {
  app.mount("#app");
});
