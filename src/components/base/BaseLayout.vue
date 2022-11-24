<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultBackLink"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
      Hello
    </ion-content>
    <!-- <ion-buttons> -->
    <!-- <ion-icon name="home-outline"></ion-icon> -->
    <!-- <ion-icon name="swap"></ion-icon>
      <ion-icon name="cog"></ion-icon> -->
    <!-- </ion-buttons> -->
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  // IonIcon,
  IonPage,
  IonBackButton,
  IonButtons,
  //   IonTitle,
  //   IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  props: ["defaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    // IonIcon,
    IonBackButton,
    IonButtons,
    // IonTitle,
    // IonToolbar,
  },
});
</script>

<style>
</style>
