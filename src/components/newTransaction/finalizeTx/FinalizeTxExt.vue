<template>
  <div>
    <ion-row>
      <ion-card color="secondary" class="ion-padding ion-text-center">
        <ion-text class="ion-text-capitalize">new external transfer</ion-text>
      </ion-card>
    </ion-row>
    <ion-row
      v-if="
        newTransaction.accountReceiving === null && existingBeneficiary === null
      "
      class="ion-padding options"
    >
      <ion-card
        v-for="i in exinex.exinex"
        :key="i.index"
        class="ion-padding ion-text-center ion-text-capitalize options"
        color="secondary"
        @click="existingBeneficiary = i"
      >
        {{ i }}
      </ion-card>
    </ion-row>
    <ExistingBeneficiary
      v-if="
        existingBeneficiary === 'existing beneficiary' &&
        !newTransaction.accountReceiving
      "
      @accountReceiving="accountToReceive"
    />
    <NewBeneficiary
      v-if="
        existingBeneficiary === 'new beneficiary' &&
        !newTransaction.accountReceiving
      "
      @accountReceiving="accountToReceive"
    />
    <ion-row
      v-if="newTransaction.accountReceiving !== null"
      class="ion-padding options"
    >
      <ion-text class="ion-text-capitalize">amount to send</ion-text>
      <ion-card
        class="ion-padding ion-text-center ion-text-capitalize options"
        color="secondary"
      >
        <ion-input
          class="custom ion-margin-bottom ion-margin-top"
          type="number"
          placeholder="0"
          v-model="amount"
          @IonChange="updateAmount"
        ></ion-input>
      </ion-card>
    </ion-row>
  </div>
</template>

<script>
import { ref } from "vue";
import { IonRow, IonCard, IonText, IonInput } from "@ionic/vue";
import exinex from "../../../utils/newTransferData/exinex.js";
import ExistingBeneficiary from "./existingBeneficiary.vue";
import NewBeneficiary from "./newBeneficiary.vue";
export default {
  props: ["accounts", "newTransaction"],
  components: {
    IonRow,
    IonCard,
    IonText,
    ExistingBeneficiary,
    NewBeneficiary,
    IonInput,
  },
  setup(props, { emit }) {
    let knowAccountsArray = [];
    const amount = ref();
    const accountToReceive = account => {
      emit("accountToReceiveFinalize", account);
    };
    const updateAmount = () => {
      emit("amountToSend", amount.value);
    };
    const existingBeneficiary = ref(null);
    return {
      accountToReceive,
      updateAmount,
      amount,
      knowAccountsArray,
      existingBeneficiary,
      exinex,
    };
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
