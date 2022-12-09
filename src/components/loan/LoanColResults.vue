<template>
  <ion-col class="calc-container ion-justify-content-end">
    <div class="ion-text-center">
      <h4>{{ monthly ? "Monthly" : "Total" }}</h4>
    </div>
    <ion-row
      v-if="monthly"
      class="ion-justify-content-between ion-align-items-center calc-child"
    >
      <ion-text class="ion-margin-end ion-margin-start">
        <h6 class="ion-text-capitalize">rate</h6>
      </ion-text>
      <div class="ion-text-end">
        <ion-text class="ion-margin-end ion-margin-start number"
          >{{ rate }}%</ion-text
        >
      </div>
    </ion-row>
    <ion-row
      class="ion-justify-content-between ion-align-items-center calc-child"
    >
      <ion-text class="ion-margin-end ion-margin-start">
        <h6 class="ion-text-capitalize">interest</h6>
      </ion-text>
      <div class="ion-text-end">
        <ion-text class="ion-margin-end ion-margin-start number"
          >$ {{ paymentInterest }}</ion-text
        >
      </div>
    </ion-row>
    <ion-row
      class="ion-margin-bottom ion-justify-content-between ion-align-items-center calc-child"
    >
      <ion-text class="ion-margin-end ion-margin-start">
        <h6 class="ion-text-capitalize">total</h6>
      </ion-text>
      <div class="ion-text-end">
        <ion-text class="ion-margin-end ion-margin-start number"
          >$ {{ total }}</ion-text
        >
      </div>
    </ion-row>
  </ion-col>
</template>

<script>
import { IonRow, IonText, IonCol } from "@ionic/vue";

export default {
  components: {
    IonRow,
    IonText,
    IonCol,
  },
  props: ["rate", "paymentInterest", "total", "monthly"],
};
</script>

<style scoped>
.calc-child {
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid var(--ion-color-medium);
}
.number {
  max-width: 200%;
}
ion-text h6 {
  color: var(--ion-color-light);
}
</style>
