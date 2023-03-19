<template>
  <div>
    <ion-row>
      <ion-card color="secondary" class="ion-padding ion-text-center">
        <ion-text class="ion-text-capitalize">new external transfer</ion-text>
      </ion-card>
    </ion-row>
    <ion-row
      v-if="
        (newTransaction.accountReceiving === null &&
          existingBeneficiary === null) ||
        exinexFparent === null
      "
      class="ion-padding options"
    >
      <ion-card
        v-for="i in exinex.exinex"
        :key="i.index"
        class="ion-padding ion-text-center ion-text-capitalize options"
        color="secondary"
        @click="
          existingBeneficiary = i;
          existingBeneficiaryFn(i);
        "
      >
        {{ i }}
      </ion-card>
    </ion-row>
    <ExistingBeneficiary
      v-if="
        existingBeneficiary === 'existing beneficiary' &&
        !newTransaction.accountReceiving &&
        exinexFparent !== null
      "
      @accountReceiving="accountToReceive"
    />
    <NewBeneficiary
      v-if="
        existingBeneficiary === 'new beneficiary' &&
        !newTransaction.accountReceiving &&
        exinexFparent !== null
      "
      @accountReceiving="accountToReceive"
      @backBtnDown="backBtnDownEmit"
      @backBtnUp="backBtnUpEmit"
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
          :disabled="amount == 0"
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
  props: ["accounts", "newTransaction", "exinexFparent"],
  components: {
    IonRow,
    IonCard,
    IonText,
    ExistingBeneficiary,
    NewBeneficiary,
    IonInput,
  },
  setup(props, { emit }) {
    // ADD KNOW ACCOUNTS FROM OVERVIEW HERE
    let knowAccountsArray = [];
    const amount = ref();
    const existingBeneficiary = ref(props.exinexFparent);
    const accountToReceive = account => {
      emit("accountToReceiveFinalize", account);
    };
    const updateAmount = () => {
      emit("amountToSend", amount.value);
    };
    const existingBeneficiaryFn = i => {
      emit("exinexBeneficiaryEmit", i);
    };
    const backBtnDownEmit = () => {
      emit('backBtnDown')
    }
    const backBtnUpEmit = () => {
      console.log("up new beneficiary layer 2");
      emit('backBtnUp')
    }
    return {
      accountToReceive,
      updateAmount,
      existingBeneficiaryFn,
      backBtnDownEmit,
      backBtnUpEmit,
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
