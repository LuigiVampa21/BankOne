<template>
  <ion-header>
    <ion-buttons slot="start">
      <ion-back-button :default-href="defaultBackLink"></ion-back-button>
    </ion-buttons>
  </ion-header>
  <ion-content>
    <slot />
    <div class="router-container">
      <ion-icon size="large" color="dark" :icon="home"></ion-icon>
      <ion-icon size="large" color="dark" :icon="swapHorizontal"></ion-icon>
      <ion-icon size="large" color="dark" :icon="settings"></ion-icon>
    </div>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { settings } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import { home } from "ionicons/icons";

export default defineComponent({
  name: "HomePage",
  props: ["defaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonBackButton,
    IonButtons,
  },
  setup() {
    return {
      settings,
      swapHorizontal,
      home,
    };
  },
});
</script>

<style>
.row-conatiner {
  height: 95vh;
}
.router-container {
  border: 1px solid white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40vw;
  height: 6vh;
  border-radius: 9999px;
  position: fixed;
  top: 90vh;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 1;
}
</style>
