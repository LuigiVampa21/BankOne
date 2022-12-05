<template>
  <div>
    <ion-row>
      <ion-card color="secondary" class="ion-padding ion-text-center">
        <ion-text class="ion-text-capitalize">new internal transfer</ion-text>
      </ion-card>
    </ion-row>
    <ion-row
      v-if="newTransaction.accountReceiving === null"
      class="ion-padding options"
    >
      <ion-text class="ion-text-capitalize">account to credit</ion-text>
      <ion-card
        class="ion-padding ion-text-center ion-text-capitalize options"
        v-for="account in accountsToDebitArray"
        :key="account.type"
        color="secondary"
        @click="accountReceiving(account)"
      >
        {{ account.type }}
      </ion-card>
    </ion-row>
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

export default {
  props: ["accounts", "newTransaction"],
  components: {
    IonRow,
    IonCard,
    IonText,
    IonInput,
  },
  setup(props, { emit }) {
    let accountsToDebitArray = [];
    const amount = ref();
    const accountReceiving = account => {
      emit("accountToReceive", account);
    };
    const updateAmount = () => {
      emit("amountToSend", amount.value);
    };
    return {
      accountsToDebitArray,
      accountReceiving,
      updateAmount,
      amount,
    };
  },
  created() {
    this.accountsToDebitArray = this.accounts.filter(
      a => a.id !== this.newTransaction.accountSending
    );
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
