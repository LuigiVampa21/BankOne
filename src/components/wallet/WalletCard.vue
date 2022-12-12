<template>
  <ion-card color="secondary" class="ion-padding-bottom ion-padding-start">
    <ion-row>
      <ion-text class="card-title">
        <h3>{{ data.title }}</h3></ion-text
      >
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <h5>{{ data.amount }}$</h5>
      <ion-icon class="ion-padding" :src="toggleOutline"></ion-icon>
    </ion-row>
  </ion-card>
</template>

<script>
import {
  IonText,
  IonRow,
  IonCard,
  IonIcon,
} from "@ionic/vue";
import { toggleOutline } from "ionicons/icons";

export default {
  props: ["data"],
  components: {
    IonText,
    IonRow,
    IonCard,
    IonIcon,
  },
  setup() {
    return {
      toggleOutline,
    };
  },
};
</script>

<style></style>
