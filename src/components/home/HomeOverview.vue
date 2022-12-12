<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-row class="ion-justify-content-between">
        <ion-col>
          <ion-card-title class="fontWeight100"> 15 000 € </ion-card-title>
          <ion-text>EUR</ion-text>
        </ion-col>
        <ion-item color="secondary">
          <ion-avatar>
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://via.placeholder.com/150C/O https://placeholder.com"
            />
          </ion-avatar>
        </ion-item>
      </ion-row>
    </ion-card-header>
    <ion-row class="ion-justify-content-between">
      <ion-text class="ion-margin-start">
        <h6>Transactions</h6>
      </ion-text>
      <ion-text class="ion-margin-end" color="tertiary">
        <h6>See All</h6>
      </ion-text>
    </ion-row>
    <ion-card-content class="ion-justify-content-center">
      <ion-row class="ion-justify-content-between last-transaction-container">
        <ion-item color="secondary">
          <ion-avatar>
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://via.placeholder.com/150C/O https://placeholder.com"
            />
          </ion-avatar>
        </ion-item>
        <div class="last-transaction">
          <ion-text>Instant Transfer</ion-text>
          <ion-text color="medium"><h6>M. DOE John</h6></ion-text>
        </div>
        <ion-row class="tx-amount ion-justify-content-end">
          <ion-text color="success">+ 450€</ion-text>
        </ion-row>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonAvatar,
  IonCard,
  IonCardTitle,
  IonItem,
  IonText,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonAvatar,
    IonItem,
    IonText,
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
  },
  props: ["bankAccounts", "lastTX"],
  setup() {
    return {};
  },
});
</script>

<style scoped>
.fontWeight100 {
  font-weight: 100;
}

.last-transaction-container {
  padding: 0;
  width: 100%;
}
</style>
