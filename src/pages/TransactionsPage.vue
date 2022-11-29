<template>
  <base-layout :title="'Transactions'">
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-row class="ion-margin-bottom"> <TransactionSearchBar /></ion-row>
        <ion-row class="transactions-container">
          <TransactionCard :data="Income" />
          <TransactionCard :data="Outcome" />
          <TransactionCard :data="Income" />
          <TransactionCard :data="Outcome" />
          <TransactionCard :data="Income" />
          <TransactionCard :data="Outcome" />
          <TransactionCard :data="Income" />
          <TransactionCard :data="Outcome" />
        </ion-row>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import TransactionSearchBar from "@/components/transactions/TransactionSearchBar.vue";
import TransactionCard from "@/components/transactions/TransactionCard.vue";
import Income from "../utils/transaction/income";
import Outcome from "../utils/transaction/outcome";
import { IonGrid, IonRow } from "@ionic/vue";

export default {
  components: {
    TransactionSearchBar,
    TransactionCard,
    IonRow,
    IonGrid,
  },
  setup() {
    return {
      Income,
      Outcome,
    };
  },
};
</script>

<style>
.transactions-container {
  position: relative;
  top: 5vh;
}
</style>
