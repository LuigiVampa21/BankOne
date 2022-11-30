<template>
  <ion-card color="secondary" class="card-items">
    <ion-row class="ion-justify-content-between">
      <ion-text class="ion-padding">{{ data.text }}</ion-text>
      <ion-icon class="ion-padding" :src="toggleOutline"></ion-icon>
    </ion-row>
  </ion-card>
</template>

<script>
import { toggleOutline } from "ionicons/icons";
import { IonCard, IonText, IonRow, IonIcon } from "@ionic/vue";

export default {
  components: {
    IonText,
    IonRow,
    IonCard,
    IonIcon,
  },
  props: ["data"],
  setup() {
    return {
      toggleOutline,
    };
  },
};
</script>

<style>
.card-items {
  height: 50px;
  width: 90%;
}
</style>
