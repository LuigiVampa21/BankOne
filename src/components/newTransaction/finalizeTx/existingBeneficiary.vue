<template>
  <div>
    <ion-row class="options">
      <ion-text class="ion-text-center ion-text-capitalize pos-down5"
        >choose beneficiary</ion-text
      >
      <ion-card color="secondary" class="pos-down10">
        <ion-row
          v-for="account in knownAccounts.array"
          :key="account.id"
          class="options"
          @click="chooseBeneficiary(account)"
        >
          <ion-col>
            <base-avatar></base-avatar>
          </ion-col>
          <ion-col>
            {{ account.holder_name }}
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
      </ion-card>
    </ion-row>
  </div>
</template>

<script>
import { IonRow, IonCard, IonText, IonCol } from "@ionic/vue";
import knownAccounts from "../../../utils/bank_account/knownAccountsArray/knownAccounts";
export default {
  components: {
    IonRow,
    IonCard,
    IonText,
    IonCol,
  },
  setup(props, { emit }) {
    const chooseBeneficiary = account => {
      emit("accountReceiving", account);
    };
    return {
      knownAccounts,
      chooseBeneficiary,
    };
  },
};
</script>

<style scoped>
.options {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  height: 60px;
  font-size: 16px;
}

.pos-down5 {
  position: relative;
  top: 5vh;
}
.pos-down10 {
  position: relative;
  top: 10vh;
}
</style>
