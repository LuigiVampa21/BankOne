<template>
  <ion-card color="primary">
    <ion-card-content>
      <form>
        <ion-label>Select an account</ion-label>
        <ion-list class="account-type ion-margin-bottom ion-margin-top">
          <ion-item
            color="secondary"
            class="account-type ion-margin-bottom ion-margin-top"
          >
            <ion-select
              color="secondary"
              v-model="account"
              placeholder="---------------------------------------------------"
            >
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="checking">Checking</ion-select-option>
              <ion-select-option value="savings">Savings</ion-select-option>
              <ion-select-option value="investment"
                >Investments</ion-select-option
              >
            </ion-select>
          </ion-item>
        </ion-list>
        <ion-label>Type</ion-label>
        <ion-list class="account-type ion-margin-bottom ion-margin-top">
          <ion-item
            color="secondary"
            class="account-type ion-margin-bottom ion-margin-top"
          >
            <ion-select
              color="secondary"
              v-model="type"
              placeholder="---------------------------------------------------"
            >
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="checking">Internal</ion-select-option>
              <ion-select-option value="savings">External</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
        <ion-label>Amount</ion-label>
        <ion-input
          v-model="amount"
          class="custom ion-margin-bottom ion-margin-top"
          type="number"
          placeholder="Amount"
        ></ion-input>
        <ion-label>Start date</ion-label>
        <ion-input
          v-model="startDate"
          class="custom ion-margin-bottom ion-margin-top"
          type="date"
          placeholder="Start date"
        ></ion-input>
        <ion-label>End date</ion-label>
        <ion-input
          v-model="endDate"
          class="custom ion-margin-bottom ion-margin-top"
          type="date"
          placeholder="End date"
        ></ion-input>
      </form>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonInput,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { ref } from "vue";
export default {
  components: {
    IonCard,
    IonCardContent,
    IonInput,
    IonLabel,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const account = ref("");
    const type = ref("");
    const amount = ref();
    const startDate = ref();
    const endDate = ref();
    return {
      account,
      type,
      amount,
      startDate,
      endDate,
    };
  },
};
</script>

<style></style>
