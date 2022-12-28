<template>
  <div>
    <ion-row class="options">
      <ion-text class="ion-text-center ion-text-capitalize pos-down5"
        >choose beneficiary</ion-text
      >
      <ion-card v-if="siblings?.length" color="secondary" class="pos-down10">
        <ion-row
          v-for="account in siblings"
          :key="account.id"
          class="options"
          @click="chooseBeneficiary(account)"
        >
          <ion-col>
            <base-avatar></base-avatar>
          </ion-col>
          <ion-col>
            {{ account.firstName }}
            {{ account.lastName }}
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
      </ion-card>
      <!-- <ion-card v-else color="secondary" class="pos-down10"></ion-card> -->
      <base-card class="fullW pos-down10 " v-else :data="'no known accounts'" :type="'no data'"></base-card>
    </ion-row>
  </div>
</template>

<script>
import { IonRow, IonCard, IonText, IonCol } from "@ionic/vue";

// Use sibling from overViewStore to display knowAccounts
import { useOverviewStore } from "../../../stores/overview";
import { storeToRefs } from "pinia";
import knownAccounts from "../../../utils/bank_account/knownAccountsArray/knownAccounts";
export default {
  components: {
    IonRow,
    IonCard,
    IonText,
    IonCol,
  },
  setup(props, { emit }) {
    const overViewStore = useOverviewStore();
    const { siblings } = storeToRefs(overViewStore);
    const chooseBeneficiary = account => {
      emit("accountReceiving", account);
    };
    return {
      knownAccounts,
      siblings,
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
.fullW{
  width: 100%;
}
</style>
