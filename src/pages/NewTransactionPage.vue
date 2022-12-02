<template>
  <ion-page>
    <base-layout :title="'new transfer'" :backLink="'/transactions'">
      <ion-row>
        <ion-card color="secondary" class="ion-padding ion-text-center">
          <ion-text>Please select an account to debit</ion-text>
        </ion-card>
        <ion-card
          class="ion-padding ion-text-center ion-text-capitalize options"
          v-for="account in accounts"
          :key="account.id"
          color="secondary"
        >
          {{ account.type }}
        </ion-card>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import { IonPage, IonCard, IonRow } from "@ionic/vue";
import AccountChecking from "../utils/bank_account/account_checking.js";
import AccountSavings from "../utils/bank_account/account_savings.js";
import AccountInvestments from "../utils/bank_account/account_investments.js";

export default {
  components: {
    IonPage,
    IonCard,
    IonRow,
  },
  setup() {
    const accounts = [AccountChecking, AccountSavings, AccountInvestments];
    return {
      accounts,
    };
  },
  created() {
    console.log(this.accounts);
  },
};
</script>

<style scoped>
.options {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 5vh;
  height: 60px;
  font-size: 16px;
}
</style>
