<template>
  <ion-card color="secondary" class="transaction-container">
    <ion-card-content class="ion-justify-content-center">
      <ion-row class="ion-justify-content-between last-transaction-container">

        <!-- <ion-item color="secondary">
          <ion-avatar>
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://via.placeholder.com/150C/O https://placeholder.com"
            />
          </ion-avatar>
        </ion-item> -->
        <base-avatar></base-avatar>
        <div class="last-transaction">
          <ion-col>
            <ion-text>{{ data.type }}</ion-text>
            <ion-text color="medium"
              ><h6>{{ data.to }}</h6></ion-text
            >
          </ion-col>
        </div>
        <div class="last-transaction-amount">
          <ion-text
            :style="
              +data.amount > 0
                ? { color: 'var(--ion-color-success)' }
                : { color: 'var(--ion-color-danger)' }
            "
            >{{ data.amount }}€</ion-text
          >
        </div>

        <!-- <ion-item color="secondary">
          <ion-avatar slot="start">
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://via.placeholder.com/150C/O https://placeholder.com"
            />
          </ion-avatar>
        </ion-item>
        <div class="last-transaction">
          <ion-col>
            <ion-text>{{ data.type }}</ion-text>
            <ion-text color="medium"
              ><h6>{{ data.to }}</h6></ion-text
            >
          </ion-col>
        </div>
        <div class="last-transaction-amount">
          <ion-text
            :style="
              +data.amount > 0
                ? { color: 'var(--ion-color-success)' }
                : { color: 'var(--ion-color-danger)' }
            "
            >{{ data.amount }}€</ion-text
          >
        </div> -->

      </ion-row>
    </ion-card-content>
  </ion-card>
</template>

<script>

import {
  // IonAvatar,
  // IonItem,
  // IonText,
  // IonCol,
  IonRow,
  IonCardContent,
  IonCard,
} from "@ionic/vue";
export default {

  props: ["data"],
  components: {
    // IonAvatar,
    // IonItem,
    // IonText,
    // IonCol,
    IonRow,
    IonCardContent,
    IonCard,
  },
};
</script>

<style scoped>
.transaction-container {
  height: 80px;
  width: 95vw;
}
</style>
