<template>
  <ion-page>
    <base-layout :title="'Investments'" :backLink="'/home'">
      <ion-row>
        <IvtCard :data="StocksIndex" />
        <IvtCard :data="CryptoIndex" />
        <IvtCard :data="CommoditiesIndex" />
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import IvtCard from "../components/investments/IvtCard.vue";
import { IonRow, IonPage } from "@ionic/vue";

import CommoditiesIndex from "../utils/investments/commodities";
import CryptoIndex from "../utils/investments/crypto";
import StocksIndex from "../utils/investments/stock";

export default {
  components: {
    IvtCard,
    IonPage,
    IonRow,
  },
  setup() {
    return {
      CommoditiesIndex,
      CryptoIndex,
      StocksIndex,
    };
  },
};
</script>

<style></style>
