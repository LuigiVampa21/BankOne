<template>
  <ion-row class="ion-margin-bottom ion-justify-content-around">
    <ion-button color="secondary">Overview</ion-button>
    <ion-button color="secondary">Stocks</ion-button>
    <ion-button color="secondary">Crypto</ion-button>
    <ion-button color="secondary">Commodities</ion-button>
  </ion-row>
</template>

<script>
import { IonRow, IonButton } from "@ionic/vue";

export default {
  name: "HomeHeader",
  components: {
    IonRow,
    IonButton,
  },
};
</script>

<style></style>
