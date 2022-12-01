<template>
  <ion-page>
    <base-layout :title="'Wallet'" :backLink="'/home'">
      <ion-grid>
        <ion-row class="box-container">
          <WalletCard :data="CheckingWallet" />
          <WalletCard :data="SavingWallet" />
          <WalletCard :data="InvestmentsWallet" />
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import WalletCard from "../components/wallet/WalletCard.vue";

import CheckingWallet from "../utils/wallet/CheckingWallet";
import SavingWallet from "../utils/wallet/SavingWallet";
import InvestmentsWallet from "../utils/wallet/InvestmentsWallet";
import { IonGrid, IonRow, IonPage } from "@ionic/vue";

export default {
  components: {
    WalletCard,
    IonPage,
    IonRow,
    IonGrid,
  },
  setup() {
    return {
      CheckingWallet,
      SavingWallet,
      InvestmentsWallet,
    };
  },
};
</script>

<style scoped>
.box-container {
  position: relative;
  top: 5vh;
}
</style>
