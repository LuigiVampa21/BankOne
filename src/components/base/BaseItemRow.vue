<template>
 <ion-card color="secondary" class="transaction-container" v-for="txI in tx" :key="txI?.id">
    <ion-card-content class="ion-justify-content-center">

 <ion-row class="ion-justify-content-between last-transaction-container">
        <base-avatar></base-avatar>
        <div class="last-transaction">
          <ion-text class="ion-text-capitalize"
            >{{ txI?.type }} transfer</ion-text
          >
          <ion-text color="medium" class="ion-text-uppercase" v-if="!type"><h6> <span v-if="txI.beneficiary_name !== 'Bank One Ltd.'">M. </span> {{ txI.beneficiary_name }}</h6></ion-text>
        </div>
        <ion-row class="tx-amount ion-justify-content-end">
          <ion-text :color="txI?.inflow ? 'success' : 'danger'"> {{txI?.inflow ? '+' : '-'}} {{txI?.amount}}€</ion-text> 
        </ion-row>
      </ion-row>
          </ion-card-content>
  </ion-card>
</template>

<script>

import{
    IonRow, 
    IonText,
} from "@ionic/vue"
export default {
    name:'BaseItemRow',
    components:{
    IonRow, 
    IonText,
    },
    props:["tx","type"],
}
</script>

<style scoped>
.transaction-container {
  height: 80px;
  width: 100%;
}
</style>