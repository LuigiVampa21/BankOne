<template>
  <ion-page>
    <ion-header>
      <ion-buttons slot="start">
        <ion-back-button :default-href="defaultBackLink"></ion-back-button>
      </ion-buttons>
    </ion-header>
    <ion-content>
      <ion-row
        v-if="title"
        class="ion-margin-start ion-margin-bottom ion-padding-bottom"
      >
        <h1 class="view-title">{{ title }}</h1>
      </ion-row>
      <slot />
      <div class="router-container">
        <ion-icon
          @click="() => router.push('/home')"
          size="large"
          color="dark"
          :icon="home"
        ></ion-icon>
        <ion-icon
          @click="() => router.push('/transactions')"
          size="large"
          color="dark"
          :icon="swapHorizontal"
        ></ion-icon>
        <ion-icon
          @click="() => router.push('/settings')"
          size="large"
          color="dark"
          :icon="settings"
        ></ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonBackButton,
  IonButtons,
  IonPage,
} from "@ionic/vue";
import { settings } from "ionicons/icons";
import { swapHorizontal } from "ionicons/icons";
import { home } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  name: "HomePage",
  props: ["defaultBackLink", "title"],
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonBackButton,
    IonButtons,
  },
  setup() {
    const router = useRouter();
    return {
      settings,
      swapHorizontal,
      home,
      router,
    };
  },
  methods: {},
};
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
