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
      <FinalizeTxInt
        v-if="newTransaction.intext == 'internal'"
        :accounts="accounts"
        :newTransaction="newTransaction"
        @accountToReceive="accountToReceive"
        @amountToSend="amountToSend"
      />
      <FinalizeTxExt
        v-if="newTransaction.intext == 'external'"
        :newTransaction="newTransaction"
        @accountToReceiveFinalize="accountToReceive"
        @amountToSend="amountToSend"
      />

      <ion-row
        v-if="newTransaction.accountReceiving"
        class="ion-justify-content-center"
      >
        <ion-button
          color="secondary"
          class="ion-text-capitalize back-btn"
          @click="sendTx"
        >
          <ion-text class="ion-padding"> send </ion-text>
        </ion-button>
      </ion-row>
      <ion-row
        v-if="newTransaction.accountSending"
        class="ion-justify-content-center"
      >
        <ion-button color="tertiary" class="ion-text-capitalize back-btn">
          <ion-text class="ion-padding"> back </ion-text>
        </ion-button>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import FinalizeTxInt from "@/components/newTransaction/finalizeTx/FinalizeTxInt";
import FinalizeTxExt from "@/components/newTransaction/finalizeTx/FinalizeTxExt";
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
    FinalizeTxInt,
    FinalizeTxExt,
  },
  setup() {
    const accounts = [AccountChecking, AccountSavings, AccountInvestments];
    const newTransaction = ref({
      // accountSending: "pR2mS$#7p71pOogHxfV$",
      // intext: "external",
      // accountReceiving: "dLO1G#fu$@YZWg3z2o0j",
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
    const accountToReceive = account => {
      newTransaction.value.accountReceiving = account.id;
    };
    const amountToSend = amount => {
      newTransaction.value.amount = +amount;
      console.log(newTransaction.value);
    };
    const sendTx = () => {
      // SEND newTransaction To DB and reset newTransaction Obj
      newTransaction.value.accountSending = null;
      newTransaction.value.intext = null;
      newTransaction.value.accountReceiving = null;
      newTransaction.value.amount = 0;
    };
    return {
      accounts,
      newTransaction,
      intext,
      accountSender,
      accountIE,
      accountToReceive,
      amountToSend,
      // accountReceiving,
      sendTx,
    };
  },
};
</script>

<style scoped>
.back-btn {
  position: relative;
  top: 45vh;
}
</style>
