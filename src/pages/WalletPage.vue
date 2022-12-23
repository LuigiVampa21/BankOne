<template>
  <ion-page>
    <base-layout :title="'Wallets'" :loading="loading" :backLink="'/home'">
      <ion-grid>
        <ion-row class="box-container">
          <WalletCard :data="accountsR.checking" />
          <WalletCard :data="accountsR.savings" />
          <WalletCard :data="accountsR.investments" />
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
import { useWalletStore } from "../stores/wallets";
import { storeToRefs } from "pinia";


import { IonGrid, IonRow, IonPage } from "@ionic/vue";
import { defineComponent, onMounted,
  ref } from "vue";

export default defineComponent({
  components: {
    WalletCard,
    IonPage,
    IonRow,
    IonGrid,
  },
  setup() {
    const walletStore = useWalletStore();
    const {accountsArray, loading} = storeToRefs(walletStore);
    const accountsR = ref({
      checking: null,
      savings: null,
      investments: null,
    });
    onMounted( async() => {
      await walletStore.getAllAccounts()
      accountsR.value.checking = accountsArray.value[0];
      accountsR.value.savings = accountsArray.value[1];
      accountsR.value.investments = accountsArray.value[2];
    })
    return {
      CheckingWallet,
      SavingWallet,
      InvestmentsWallet,
      accountsR,
      loading
    };
  },
});
</script>

<style scoped>
.box-container {
  position: relative;
  top: 5vh;
}
</style>
