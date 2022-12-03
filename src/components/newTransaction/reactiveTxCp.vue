<template>
  <div class="container">
    <!-- FIRST STEP: Choose account to sen from -->
    <ion-row v-if="newTransaction.accountSending === null">
      <ion-card color="secondary" class="ion-padding ion-text-center">
        <ion-text>Please select an account to debit</ion-text>
      </ion-card>
      <ion-card
        class="ion-padding ion-text-center ion-text-capitalize options"
        v-for="account in accounts"
        @click="accountSending(account)"
        :key="account.type"
        color="secondary"
      >
        {{ account.type }}
      </ion-card>
    </ion-row>

    <!-- SECOND STEP: Choose INT EXT  -->

    <ion-row
      class="options"
      v-if="
        newTransaction.accountSending !== null && newTransaction.intext === null
      "
    >
      <ion-card
        color="secondary"
        class="ion-padding ion-text-center ion-text-capitalize options"
        v-for="i in intext.intext"
        :key="i.index"
        @click="accountIntext(i)"
      >
        {{ i }}
      </ion-card>
    </ion-row>

    <!-- <ion-row
      v-if="newTransaction.accountSending"
      class="ion-justify-content-center"
    >
      <ion-button color="tertiary" class="ion-text-capitalize back-btn">
        <ion-text class="ion-padding"> back </ion-text>
      </ion-button>
    </ion-row> -->
  </div>
</template>

<script>
import { IonCard, IonRow } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonRow,
  },
  props: ["accounts", "newTransaction", "intext"],
  setup(props, { emit }) {
    const accountSending = account => {
      emit("accountSender", account);
    };
    const accountIntext = i => {
      emit("accountIE", i);
    };
    return {
      accountSending,
      accountIntext,
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
/* .back-btn {
  position: relative;
  top: 45vh;
} */
</style>
