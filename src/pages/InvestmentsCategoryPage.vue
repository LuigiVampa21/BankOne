<template>
  <ion-page>
    <base-layout :title="$route.params.category" :backLink="'/investments'">
      <!-- <IvtList
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
    add default assets which is an empty array of assets otherwise everytime user presses back link it would have hit the last array and the show up ivt list with assetsR.forex
    -->
      <IvtList
        :data="
          $route.params.category == 'stocks'
            ? assetsR.stocks
            : $route.params.category == 'crypto'
            ? assetsR.crypto
            : $route.params.category == 'commoditties'
            ? assetsR.commoditties
            : $route.params.category == 'forex'
            ? assetsR.forex
            : defaultAssets.assetsBlank
            "
      />
    </base-layout>
  </ion-page>
</template>

<script>
import IvtList from "@/components/investments-category/IvtList";
import defaultAssets from "../utils/investments/blank" 
import {defineComponent,
   onMounted, reactive, ref,
   watch
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
      watch(assets, newValueAsset => {
      // assetsR.crypto.array = newValueAsset.crypto;
      // console.log('Value BEFORE');
      // console.log(assets.value.crypto);
      // assets.value = newValueAsset
      // console.log('Value AFTER');
      // console.log(newValueAsset.crypto);

      assetsR.crypto = newValueAsset.crypto;
      assetsR.stocks = newValueAsset.stocks;
      assetsR.commoditties = newValueAsset.commoditties;
      assetsR.forex = newValueAsset.forex;


      })
    return {
      // CommoditiesIndex,
      // CryptoIndex,
      // StocksIndex,
      assetsR,
      defaultAssets,
    };
  },
});
</script>

<style></style>