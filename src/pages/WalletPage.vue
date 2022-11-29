<template>
  <base-layout :title="'Wallet'">
    <ion-grid>
      <ion-row class="box-container">
        <WalletCard :data="CheckingWallet" />
        <WalletCard :data="SavingWallet" />
        <WalletCard :data="InvestmentsWallet" />
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import WalletCard from "../components/wallet/WalletCard.vue";

import CheckingWallet from "../utils/wallet/CheckingWallet";
import SavingWallet from "../utils/wallet/SavingWallet";
import InvestmentsWallet from "../utils/wallet/InvestmentsWallet";

export default {
  components: {
    WalletCard,
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

<style>
.box-container {
  position: relative;
  top: 5vh;
}
</style>
