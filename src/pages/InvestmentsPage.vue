<template>
  <ion-page>
    <base-layout :title="'Investments'" :loading="loading" :backLink="'/home'">
      <ion-row>

        <!-- <IvtCard :data="StocksIndex" />
        <IvtCard :data="CryptoIndex" />
        <IvtCard :data="CommoditiesIndex" /> -->


        <!-- <IvtCard :data="assetsR?.stocks" :type="'stocks'" /> -->
        <!-- <IvtCard :data="assetsR?.crypto" :type="'crypto'" /> -->

         <IvtCard :data="assetsR?.crypto" :type="'crypto'" />
        <!-- <IvtCard :data="assetsR?.commoditties" :type="'commoditties'" />
        <IvtCard :data="assetsR?.forex" :type="'forex'"/> -->

      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import IvtCard from "../components/investments/IvtCard.vue";
import { IonRow, IonPage } from "@ionic/vue";

import {onMounted, reactive, 
// ref,
watch
} from "vue";
import {useAssetsStore} from "../stores/assets"
import { storeToRefs } from "pinia";

// import CommoditiesIndex from "../utils/investments/commodities";
// import CryptoIndex from "../utils/investments/crypto";
// import StocksIndex from "../utils/investments/stock";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IvtCard,
    IonPage,
    IonRow,
  },
  setup() {
    const assetsStore = useAssetsStore();
    const {assets, 
    // loading
    } = storeToRefs(assetsStore);
    let assetsR = reactive({
      // crypto: ref(null),
      crypto: reactive({array: null}),
      // stocks: ref(null),
      // commoditties: ref(null),
      // forex: ref(null),
    });
    onMounted(async() => {
      await assetsStore.getAssets()
      // assetsR.crypto = assets.value.crypto;
      assetsR.crypto.array = assets.value.crypto;
      // console.log(assetsR.crypto);

      // assetsR.stocks = assets.value.stocks;
      // assetsR.commoditties = assets.value.commoditties;
      // assetsR.forex = assets.value.forex;

    })
    // watch(loading, () => {
    //   if(loading.value){
    //     console.log(assetsR.crypto.array);
    //   }
    // });
    watch(assets, newValueAsset => {
      assetsR.crypto.array = newValueAsset.crypto;
      // console.log('---------------------PARENT---------------------');
      // console.log(assetsR.crypto.array);
      // assetsR.stocks = newValueAsset.stocks;
      // assetsR.commoditties = newValueAsset.commoditties;
      // assetsR.forex = newValueAsset.forex;
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
