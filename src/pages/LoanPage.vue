<template>
  <ion-page>
    <base-layout :title="'Loans'" :backLink="'/home'">
      <ion-row>
        <LoanApply />
        <LoanCalculator />
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import LoanApply from "../components/loan/LoanApply.vue";
import LoanCalculator from "../components/loan/LoanCalculator.vue";
import { IonRow, IonPage } from "@ionic/vue";

export default {
  components: {
    LoanApply,
    LoanCalculator,
    IonPage,
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
