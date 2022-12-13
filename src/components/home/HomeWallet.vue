<template>
  <ion-card color="secondary" class="wallet-container ion-padding-bottom">
    <ion-row class="ion-justify-content-between">
      <ion-card-title class="ion-margin-start">
        <h3 router-link="/wallet">Wallets</h3>
      </ion-card-title>
      <ion-icon
        class="ellipse-padding"
        size="small"
        color="light"
        :icon="ellipsisHorizontalOutline"
      ></ion-icon>
    </ion-row>
    <ion-row>
      <ion-text color="medium" class="ion-margin-start">Total</ion-text>
      <ion-text class="ion-margin-start wallet-total-amount">25 780 €</ion-text>
    </ion-row>

    <HomeWalletRow v-for="account in accountsOrder" :key="account.id" :account="account" />

  </ion-card>
</template>

<script>
import HomeWalletRow from "./HomeWalletRow.vue"
import order from '../../utils/home/order'
import {
  IonCard,
  IonCardTitle,
  IonText,
  IonRow,
} from "@ionic/vue";
import {ref, onUpdated} from "vue";
export default {
  components: {
    IonText,
    IonRow,
    IonCard,
    IonCardTitle,
    HomeWalletRow,
  },
  props:["accounts"],
  setup(props){
    let accountsOrder = ref(null)
    onUpdated( () => {
      accountsOrder.value = order(props.accounts);
    });
    return{
  accountsOrder
    }
  }
};
</script>

<style></style>
