<template>
  <ion-page>
    <base-layout :title="'Transactions'" :backLink="'/home'">
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
          <ion-row class="ion-margin-bottom"> <TransactionSearchBar /></ion-row>
          <ion-row class="transactions-container" v-if="allTxsR">
            <!-- <TransactionCard :data="Income" />
            <TransactionCard :data="Outcome" />
            <TransactionCard :data="Income" />
            <TransactionCard :data="Outcome" />
            <TransactionCard :data="Income" />
            <TransactionCard :data="Outcome" />
            <TransactionCard :data="Income" />
            <TransactionCard :data="Outcome" /> -->

            <!-- <base-item-row v-for="tx in allTxsR" :key="tx?.id" :tx="tx"></base-item-row> -->
            <base-item-row :tx="allTxsR.value"></base-item-row>
          </ion-row>
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import {onMounted, onUpdated, ref} from 'vue'
import { useTxStore } from "../stores/transactions"
import {storeToRefs} from "pinia"

import TransactionSearchBar from "@/components/transactions/TransactionSearchBar.vue";
// import TransactionCard from "@/components/transactions/TransactionCard.vue";

import Income from "../utils/transaction/income";
import Outcome from "../utils/transaction/outcome";
import { IonGrid, IonRow, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  components: {
    TransactionSearchBar,
    // TransactionCard,
    IonPage,
    IonRow,
    IonGrid,
  },
  setup() {
    const router = useRouter();
    const txStore = useTxStore();
    const {transactions} = storeToRefs(txStore);
    let allTxsR = ref(null);
    onMounted(() => {
     txStore.getAllTxs()
    })
    onUpdated(() => {
      allTxsR.value = transactions;
      // console.log(allTxsR.value);
    })
    return {
      Income,
      Outcome,
      router,
      allTxsR
    };
  },
};
</script>

<style scoped>
.transactions-container {
  position: relative;
  top: 5vh;
}
</style>
