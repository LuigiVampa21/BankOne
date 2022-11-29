<template>
  <base-layout :title="'Loans'">
    <ion-row>
      <LoanApply />
      <LoanCalculator />
    </ion-row>
  </base-layout>
</template>

<script>
import LoanApply from "../components/loan/LoanApply.vue";
import LoanCalculator from "../components/loan/LoanCalculator.vue";
import { IonRow } from "@ionic/vue";

export default {
  components: {
    LoanApply,
    LoanCalculator,
    IonRow,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
ion-row > * {
  margin-top: 3.5vh;
  margin-bottom: 3.5vh;
}
</style>
