<template>
 <ion-card color="secondary" class="transaction-container" v-for="txI in tx" :key="txI?.id">
    <ion-card-content class="ion-justify-content-center">

 <ion-row class="ion-justify-content-between last-transaction-container">
        <base-flag class="flag" :currentUserR="currentUser"></base-flag>
        <div class="last-transaction">
          <ion-text class="ion-text-capitalize"
            >{{ txI?.type }} transfer</ion-text
          >
          <ion-text color="medium" class="ion-text-uppercase" v-if="!type"><h6>{{ txI.type === "loan" || txI.beneficiary_name === "Bank One Ltd." ? "Bank One Ltd." : "M. " + txI.beneficiary_name }}</h6></ion-text>
        </div>
        <ion-row class="tx-amount ion-justify-content-end">
          <ion-text class="amount" :color="txI?.inflow ? 'success' : 'danger'"> {{txI?.inflow ? '+' : '-'}} {{txI?.amount}} 
          <span class="currency">{{currentUser?.currency === 'EURO' ? '€'
                    : currentUser?.currency === 'POUND' ? '£'
                    : '$' }}</span></ion-text> 
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
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from "pinia";

export default {
    name:'BaseItemRow',
    components:{
    IonRow, 
    IonText,
    },
    props:["tx","type"],
    setup(){
      const authStore = useAuthStore();
      const { currentUser } = storeToRefs(authStore);
      return{
        currentUser
      }
    }
}
</script>

<style scoped>
.transaction-container {
  height: 80px;
  width: 95%;
}

.last-transaction-container{
  display: flex;
  flex-wrap: nowrap;
  transform: translateX(-30px);
  width: 110%; 
}

ion-text{
  display: flex;
  flex-wrap: nowrap;
  font-size: 15px;
}

.amount{
  font-size: 13px;
}

.currency{
  font-size: 10px;
}


</style>