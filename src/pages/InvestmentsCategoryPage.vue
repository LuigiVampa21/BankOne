<template>
  <ion-page>
    <base-layout :title="$route.params.category" :backLink="'/investments'">
      <IvtList
        :data="
          $route.params.category == 'stocks'
            ? assetsR.stocks
            : $route.params.category == 'crypto'
            ? assetsR.crypto
            : $route.params.category == 'commoditties'
            ? assetsR.commoditties
            : assetsR.forex
            "
      />
    </base-layout>
  </ion-page>
</template>

<script>
import IvtList from "@/components/investments-category/IvtList";
import {defineComponent,
   onMounted, reactive, ref
} from "vue";
import {useAssetsStore} from "../stores/assets"
import { storeToRefs } from "pinia";
import { IonPage } from "@ionic/vue";

// import CommoditiesIndex from "../utils/investments/commodities";
// import CryptoIndex from "../utils/investments/crypto";
// import StocksIndex from "../utils/investments/stock";
export default defineComponent({
  components: {
    IvtList,
    IonPage,
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