<template>
  <ion-page>
    <base-layout :title="'Transactions'" :loading="loading" :backLink="'/home'">
      <ion-row class="ion-justify-content-end ion-margin-bottom">
        <ion-button
          color="tertiary"
          class="ion-text-capitalize"
          @click="() => router.push('/new-transaction')"
        >
          <ion-text class="ion-padding"> new </ion-text>
        </ion-button>
      </ion-row>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-row class="transactions-container red" v-if="transactions">
            <base-item-row :tx="allTxsR"></base-item-row>
          </ion-row>
          <ion-row class="transactions-container" v-else>
            <ion-text color="medium" class="no-history pos-down10">No transaction history</ion-text>
          </ion-row>
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import {onMounted, onUpdated, ref, defineComponent} from 'vue'
import { useTxStore } from "../stores/transactions"
import { storeToRefs } from "pinia"

import Income from "../utils/transaction/income";
import Outcome from "../utils/transaction/outcome";
import { IonGrid, IonRow, IonPage, IonText } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonPage,
    IonRow,
    IonGrid,
    IonText,
  },
  setup() {
    const router = useRouter();
    const txStore = useTxStore();
    const {transactions, loading} = storeToRefs(txStore);
    let allTxsR = ref(null);
    onMounted(async () => {
     await txStore.getAllTxs()
    })
    onUpdated(() => {
      allTxsR.value = transactions;
    })
    return {
      Income,
      Outcome,
      router,
      allTxsR,
      loading
    };
  },
});
</script>

<style scoped>
.transactions-container {
  position: relative;
  top: 5vh;
}

.no-history{
  font-size: 25px;
}
</style>
