<template>
    <ion-app class="ion-page">
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useAuthStore } from "./stores/auth";
import { IonApp, IonRouterOutlet } from "@ionic/vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const authStore = useAuthStore();
    onMounted(async () => {
      await authStore.getUser();
    });
  },
});
</script>

<style scoped>
</style>
