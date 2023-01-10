<template>
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
</template>

<script>
import { defineComponent, onMounted, watch } from "vue";
import { useAuthStore } from "./stores/auth";
import {storeToRefs} from "pinia";
import { IonApp, IonRouterOutlet, toastController } from "@ionic/vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const authStore = useAuthStore();
    const {showLogoutToastr, logoutMsg} = storeToRefs(authStore);
    onMounted(async () => {
      await authStore.getUser();
    });
    watch(showLogoutToastr, async() => {
      if(showLogoutToastr.value){
        await logOutToast(logoutMsg.value)
      }
    })
    const logOutToast = async(message) => {
      const toast = await toastController.create({
        message,
        duration: 2500,
        position: "top",
        color: 'medium',
      })
      await toast.present()
    } 
  },
});
</script>

<style scoped>
</style>
