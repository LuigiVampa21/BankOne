<template>
  <ion-page>
    <base-layout :title="$route.params.category" :backLink="'/investments'">
      <IvtList
        :data="
          $route.params.category == 'stocks'
            ? StocksIndex
            : $route.params.category == 'crypto'
            ? CryptoIndex
            : CommoditiesIndex
        "
      />
    </base-layout>
  </ion-page>
</template>

<script>
import IvtList from "@/components/investments-category/IvtList";
import { IonPage } from "@ionic/vue";
import CommoditiesIndex from "../utils/investments/commodities";
import CryptoIndex from "../utils/investments/crypto";
import StocksIndex from "../utils/investments/stock";
export default {
  components: {
    IvtList,
    IonPage,
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
