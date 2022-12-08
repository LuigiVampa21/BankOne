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
              placeholder=""
              @ionChange="accountChange"
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
              placeholder=""
              @ionChange="typeChange"
            >
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="internal">Internal</ion-select-option>
              <ion-select-option value="external">External</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
        <ion-label>Amount</ion-label>
        <ion-input
          v-model="amount"
          class="custom ion-margin-bottom ion-margin-top"
          type="number"
          placeholder="Amount"
          @ionChange="numberChange"
        ></ion-input>
        <ion-label>Start date</ion-label>
        <ion-input
          v-model="startDate"
          class="custom ion-margin-bottom ion-margin-top"
          type="date"
          @ionChange="startDateChange"
        ></ion-input>
        <ion-label>End date</ion-label>
        <ion-input
          v-model="endDate"
          class="custom ion-margin-top"
          type="date"
          @ionChange="endDateChange"
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
  setup(props, { emit }) {
    const account = ref("");
    const type = ref("");
    const amount = ref();
    const startDate = ref();
    const endDate = ref();
    const accountChange = account => {
      emit("emitAccount", account.detail.value);
    };
    const typeChange = type => {
      emit("emitType", type.detail.value);
    };
    const numberChange = number => {
      emit("emitNumber", +number.detail.value);
    };
    const startDateChange = date => {
      emit("emitStartDate", date.detail.value);
    };
    const endDateChange = date => {
      emit("emitEndDate", date.detail.value);
    };
    return {
      account,
      type,
      amount,
      startDate,
      endDate,
      accountChange,
      typeChange,
      numberChange,
      startDateChange,
      endDateChange,
    };
  },
};
</script>

<style></style>
