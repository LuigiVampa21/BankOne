<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { onMounted } from "vue";
import { useAuthStore } from "./stores/auth";
import { IonApp, IonRouterOutlet } from "@ionic/vue";

export default {
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const authStore = useAuthStore();
    onMounted(async () => {
      await authStore.getUser();
      // const token = await authStore.getFromStorage("token");
      // const user = await authStore.getFromStorage("userID");
      // console.log(token, 'APP VUE');
      // console.log(user, 'APP VUE');
    });
  },
};
</script>
