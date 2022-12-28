<template>
  <ion-page>
    <base-layout :title="'new transfer'" :backLink="'/transactions'">
      <ReactiveTxCp
        :accounts="bankAccounts"
        :newTransaction="newTransaction"
        :intext="intext"
        @accountSender="accountSender"
        @accountIE="accountIE"
      />
      <FinalizeTxInt
        v-if="newTransaction.intext == 'internal'"
        :accounts="bankAccounts"
        :newTransaction="newTransaction"
        @accountToReceive="accountToReceive"
        @amountToSend="amountToSend"
      />
      <FinalizeTxExt
        v-if="newTransaction.intext == 'external'"
        :newTransaction="newTransaction"
        @exinexBeneficiaryEmit="exinexFn"
        @accountToReceiveFinalize="accountToReceive"
        @amountToSend="amountToSend"
        :exinexFparent="newTransaction.exinex"
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
        <ion-button
          color="tertiary"
          class="ion-text-capitalize back-btn"
          @click="backFn"
        >
          <ion-text class="ion-padding"> back </ion-text>
        </ion-button>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import FinalizeTxInt from "@/components/newTransaction/finalizeTx/FinalizeTxInt";
import FinalizeTxExt from "@/components/newTransaction/finalizeTx/FinalizeTxExt";
import { defineComponent, ref, onUnmounted } from "vue";
import { IonPage, toastController } from "@ionic/vue";
import ReactiveTxCp from "@/components/newTransaction/reactiveTxCp";

// import accounts && knownAccounts data from overview
import { useOverviewStore } from "../stores/overview";
import { useTxStore } from "../stores/transactions";
import { storeToRefs } from "pinia";

// import AccountChecking from "../utils/bank_account/account_checking.js";
// import AccountSavings from "../utils/bank_account/account_savings.js";
// import AccountInvestments from "../utils/bank_account/account_investments.js";

import intext from "../utils/newTransferData/intext.js";

export default defineComponent({
  components: {
    IonPage,
    ReactiveTxCp,
    FinalizeTxInt,
    FinalizeTxExt,
  },
  setup() {
    // const accounts = [AccountChecking, AccountSavings, AccountInvestments];
    const overviewStore = useOverviewStore();
    const txStore = useTxStore();
    const { bankAccounts, siblings } = storeToRefs(overviewStore);
    const {message, color} = storeToRefs(txStore)
    const newTransaction = ref({
      // accountSending: "pR2mS$#7p71pOogHxfV$",
      // intext: "external",
      // accountReceiving: "dLO1G#fu$@YZWg3z2o0j",
      accountSending: null,
      intext: null,
      accountReceiving: null,
      amount: 0,
      exinex: null,
    });
    const accountSender = account => {
      newTransaction.value.accountSending = account.id;
    };
    const accountIE = i => {
      newTransaction.value.intext = i;
    };
    const exinexFn = i => {
      newTransaction.value.exinex = i;
      // console.log(newTransaction.value);
    };
    const accountToReceive = account => {
      // newTransaction.value.accountReceiving = account.id;
      newTransaction.value.accountReceiving = account.iban;
    };
    const amountToSend = amount => {
      newTransaction.value.amount = +amount;
      // console.log(newTransaction.value);
    };
    const sendTx = async() => {
      // SEND newTransaction To DB and reset newTransaction Obj
      await txStore.postNewTX(newTransaction.value)
      await txToast(message.value, color.value);
      resetTxObj();
    };
    onUnmounted(() => {
      resetTxObj()
    })

    const txToast = async(message, color) => {
      const toast = await toastController.create({
        message,
        duration: 2500,
        position: "top",
        color,
      })
      await toast.present()
    } 

    const backFn = () => {
      if (
        newTransaction.value.accountSending != null &&
        newTransaction.value.intext === null
      ) {
        newTransaction.value.accountSending = null;
        // console.log(1);
      }
      if (
        newTransaction.value.intext !== null &&
        newTransaction.value.exinex === null &&
        newTransaction.value.accountReceiving === null
      ) {
        newTransaction.value.intext = null;
        // console.log(2);
      }
      if (
        newTransaction.value.intext === "internal" &&
        newTransaction.value.accountReceiving !== null &&
        newTransaction.value.amount == 0
      ) {
        newTransaction.value.accountReceiving = null;
        // console.log(3);
      }
      if (
        newTransaction.value.intext === "external" &&
        newTransaction.value.exinex !== null &&
        newTransaction.value.accountReceiving === null &&
        newTransaction.value.amount == 0
      ) {
        newTransaction.value.exinex = null;
      }
      if (
        newTransaction.value.intext === "external" &&
        newTransaction.value.exinex !== null &&
        newTransaction.value.accountReceiving !== null &&
        newTransaction.value.amount == 0
      ) {
        newTransaction.value.accountReceiving = null;
        // console.log(newTransaction.value);
      }
    };

    const resetTxObj = () => {
      newTransaction.value.accountSending = null;
      newTransaction.value.intext = null;
      newTransaction.value.accountReceiving = null;
      newTransaction.value.amount = 0;
    }
    return {
      // accounts,
      newTransaction,
      intext,
      accountSender,
      accountIE,
      accountToReceive,
      amountToSend,
      backFn,
      sendTx,
      exinexFn,
      bankAccounts,
      siblings,
    };
  },
});
</script>

<style scoped>
.back-btn {
  position: relative;
  top: 45vh;
}
</style>
