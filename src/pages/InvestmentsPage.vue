<template>
  <ion-page>
    <base-layout :title="'Investments'" :backLink="'/home'">
      <ion-row>
        <!-- <IvtCard :data="StocksIndex" />
        <IvtCard :data="CryptoIndex" />
        <IvtCard :data="CommoditiesIndex" /> -->
        <IvtCard :data="assetsR?.stocks" :type="'stocks'" />
        <IvtCard :data="assetsR?.crypto" :type="'crypto'" />
        <IvtCard :data="assetsR?.commoditties" :type="'commoditties'" />
        <IvtCard :data="assetsR?.forex" :type="'forex'"/>
        <!-- <IvtCard v-for="asset in assets" :key="asset" /> -->
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import IvtCard from "../components/investments/IvtCard.vue";
import { IonRow, IonPage } from "@ionic/vue";

import {onMounted, reactive, ref} from "vue";
import {useAssetsStore} from "../stores/assets"
import { storeToRefs } from "pinia";

// import CommoditiesIndex from "../utils/investments/commodities";
// import CryptoIndex from "../utils/investments/crypto";
// import StocksIndex from "../utils/investments/stock";

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    IvtCard,
    IonPage,
    IonRow,
  },
  setup() {
    const assetsStore = useAssetsStore();
    const {assets} = storeToRefs(assetsStore);
    let assetsR = reactive({
      crypto: ref(null),
      stocks: ref(null),
      commoditties: ref(null),
      forex: ref(null),
    });
    onMounted(async() => {
      await assetsStore.getAssets()
      assetsR.crypto = assets.value.crypto;
      assetsR.stocks = assets.value.stocks;
      assetsR.commoditties = assets.value.commoditties;
      assetsR.forex = assets.value.forex;
    })
    return {
      // CommoditiesIndex,
      // CryptoIndex,
      // StocksIndex,
      assetsR,
    };
  },
});
</script>

<style></style>
