<template>
  <ion-card color="secondary" class="ion-margin">
    <ion-row class="ion-margin-start ion-margin-bottom">
      <h3>Apply for a loan</h3>
    </ion-row>
    <ion-row class="ion-justify-content-between ion-align-items-center">
      <ion-text class="ion-margin">
        <h6>Amount desired</h6>
      </ion-text>
      <ion-input
        @ionChange="amountChange"
        max="500000"
        min="1000"
        class="custom-2 ion-margin"
        type="number"
      ></ion-input>
    </ion-row>
    <ion-row class="ion-justify-content-between ion-align-items-center">
      <ion-text class="ion-margin">
        <h6>Monthly income</h6>
      </ion-text>
      <ion-input
        @ionChange="incomeChange"
        class="custom-2 ion-margin"
        type="number"
      ></ion-input>
    </ion-row>
    <ion-row
      class="ion-margin-bottom ion-justify-content-between ion-align-items-center"
    >
      <ion-text class="ion-margin">
        <h6>Duration (years)</h6>
      </ion-text>
      <ion-input
        min="1"
        max="25"
        @ionChange="durationChange"
        class="custom-2 ion-margin"
        type="number"
      ></ion-input>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonRow, IonInput } from "@ionic/vue";

export default {
  components: {
    IonText,
    IonRow,
    IonCard,
    IonInput,
  },
  setup(props, { emit }) {
    const amountChange = amount => {
      emit("emitAmount", amount.detail.value);
    };
    const incomeChange = income => {
      emit("emitIncome", income.detail.value);
    };
    const durationChange = duration => {
      emit("emitDuration", duration.detail.value);
    };
    return {
      amountChange,
      incomeChange,
      durationChange,
    };
  },
};
</script>

<style></style>
