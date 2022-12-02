<template>
  <ion-page>
    <base-layout :title="'new transfer'" :backLink="'/transactions'">
      <ReactiveTxCp
        :accounts="accounts"
        :newTransaction="newTransaction"
        :intext="intext"
        @accountSender="accountSender"
        @accountIE="accountIE"
      />
    </base-layout>
  </ion-page>
</template>

<script>
import { ref } from "vue";
import { IonPage } from "@ionic/vue";
import ReactiveTxCp from "@/components/newTransaction/reactiveTxCp";
import AccountChecking from "../utils/bank_account/account_checking.js";
import AccountSavings from "../utils/bank_account/account_savings.js";
import AccountInvestments from "../utils/bank_account/account_investments.js";
import intext from "../utils/newTransferData/intext.js";

export default {
  components: {
    IonPage,
    ReactiveTxCp,
  },
  setup() {
    const accounts = [AccountChecking, AccountSavings, AccountInvestments];
    const newTransaction = ref({
      accountSending: null,
      intext: null,
      accountReceiving: null,
      amount: 0,
    });
    const accountSender = account => {
      newTransaction.value.accountSending = account.id;
    };
    const accountIE = i => {
      newTransaction.value.intext = i;
    };
    return {
      accounts,
      newTransaction,
      intext,
      accountSender,
      accountIE,
    };
  },
};
</script>

<style scoped></style>
