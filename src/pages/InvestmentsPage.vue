<template>
  <base-layout :title="'Investments'">
    <ion-row>
      <IvtCard :data="StocksIndex" />
      <IvtCard :data="CryptoIndex" />
      <IvtCard :data="CommoditiesIndex" />
    </ion-row>
  </base-layout>
</template>

<script>
import IvtCard from "../components/investments/IvtCard.vue";

import CommoditiesIndex from "../utils/investments/commodities";
import CryptoIndex from "../utils/investments/crypto";
import StocksIndex from "../utils/investments/stock";

export default {
  components: {
    IvtCard,
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
