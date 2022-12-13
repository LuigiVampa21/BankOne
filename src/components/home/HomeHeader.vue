<template>
  <ion-row class="ion-margin-bottom ion-justify-content-around h-1">
    <!-- <ion-button color="secondary">Overview</ion-button> -->
    <ion-button color="secondary" router-link="/investments/stocks"
      >Stocks</ion-button
    >
    <ion-button color="secondary" router-link="/investments/crypto"
      >Crypto</ion-button
    >
    <ion-button color="secondary" router-link="/investments/commodities"
      >Commodities</ion-button
    >
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

<style scoped>
.h-1 {
  display: flex;
  flex-wrap: nowrap;
}
</style>
