<template>
  <ion-page>
    <base-layout :title="'Loans'" :backLink="'/home'" :containerDisturb="true">
      <ion-row class="ion-justify-content-center">
        <LoanApply
          @emitAmount="loanAmount"
          @emitIncome="loanIncome"
          @emitDuration="loanDuration"
        />
        <LoanCalculator
          :loanObj="loanObj"
          @emitRate="rateChange"
          @emitMonthlyTotal="monthlyTotalChange"
          @emitTotal="totalChange"
        />
        <ion-button color="tertiary" @click="sendLoan">
          <ion-text class="ion-text-capitalize ion-padding"> confirm </ion-text>
        </ion-button>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>

import LoanApply from "../components/loan/LoanApply.vue";
import LoanCalculator from "../components/loan/LoanCalculator.vue";
import { IonRow, IonPage, IonButton, toastController } from "@ionic/vue";
import { reactive } from "vue";
import { useLoanStore } from "../stores/loans";
import { storeToRefs } from "pinia";
// import axios from "axios";

export default {
  components: {
    LoanApply,
    LoanCalculator,
    IonPage,
    IonRow,
    IonButton,
  },
  setup() {
    const loanStore = useLoanStore();
    const {message, color} = storeToRefs(loanStore);
    const loanObj = reactive({
      amount: 0,
      income: 0,
      duration: 0,
      rate: 0,
      monthlyTotal: 0,
      total: 0,
    });
    const loanAmount = amount => {
      loanObj.amount = amount;
    };
    const loanIncome = income => {
      loanObj.income = income;
    };
    const loanDuration = duration => {
      loanObj.duration = duration;
    };
    const rateChange = rate => {
      loanObj.rate = rate;
    };
    const monthlyTotalChange = monthlyTotal => {
      loanObj.monthlyTotal = monthlyTotal;
    };
    const totalChange = total => {
      loanObj.total = total;
    };
    const sendLoan = async () => {
      await loanStore.postNewLoan(loanObj)
      // await axios.post(process.env.VUE_APP_ROOT_API + "/loans", loanObj);
      loanToast(message.value, color.value)
    };
    const loanToast = async(message, color) => {
      const toast = await toastController.create({
        message,
        duration: 2500,
        position: "top",
        color,
      })
      await toast.present()
    } 
    return {
      loanObj,
      loanAmount,
      loanIncome,
      loanDuration,
      rateChange,
      sendLoan,
      monthlyTotalChange,
      totalChange,
    };
  },
};
</script>

<style scoped>
ion-row > *:first-child {
  margin-top: 3.5vh;
  margin-bottom: 3.5vh;
}
</style>
