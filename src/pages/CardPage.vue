<template>
  <ion-page>
    <base-layout :title="'Cards'">
      <ion-grid>
        <ion-row
          class="ion-align-items-center ion-justify-content-center card-container"
        >
          <CardCreditCard />
        </ion-row>
        <ion-row class="ion-justify-content-center row-card-container">
          <div class="dot-container">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
          </div>
        </ion-row>
        <ion-row
          class="ion-justify-content-center ion-padding-top ion-margin-top"
        >
          <CardOptions :data="cardDetail" />
          <CardOptions :data="cardInsurance" />
          <CardOptions :data="cardUpgrade" />
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import CardCreditCard from "@/components/card/CardCreditCard";
import CardOptions from "@/components/card/CardOptions";
import cardDetail from "../utils/card/cardDetail";
import cardInsurance from "../utils/card/cardInsurance";
import cardUpgrade from "../utils/card/cardUpgrade";

import { IonGrid, IonRow, IonPage } from "@ionic/vue";

export default {
  name: "CardPage",
  components: {
    CardCreditCard,
    CardOptions,
    IonPage,
    IonGrid,
    IonRow,
  },
  setup() {
    return {
      cardDetail,
      cardInsurance,
      cardUpgrade,
    };
  },
};
</script>

<style>
.card-container {
  height: 40vh;
}

.row-card-container {
  height: 2vh;
}

.dot-container {
  display: flex;
  justify-content: space-around;
  width: 30px;
}

.dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.dot-2 {
  background: var(--ion-color-medium);
}
</style>
