<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-row class="ion-justify-content-between">
        <ion-col>
          <ion-card-title class="fontWeight100" v-if="overviewTotal">
            {{ overviewTotal }} {{ currentUserR?.currency === 'EURO' ? '€'
              : currentUserR?.currency === 'POUND' ? '£'
                : '$' }}
          </ion-card-title>
          <ion-text>{{ currentUserR?.currency === 'EURO' ? 'EUR'
            : currentUserR?.currency === 'POUND' ? 'GBP'
              : 'USD' }}</ion-text>
        </ion-col>
        <base-flag :currentUserR="currentUserR"></base-flag>
      </ion-row>
    </ion-card-header>
    <ion-row class="ion-justify-content-between">
      <ion-text class="ion-margin-start">
        <h6>Transactions</h6>
      </ion-text>
      <ion-text class="ion-margin-end" color="tertiary">
        <h6 @click="() => router.push('/transactions')">See All</h6>
      </ion-text>
    </ion-row>
    <ion-card-content v-if="lastTXR" class="ion-justify-content-center">
      <ion-row class="ion-justify-content-between last-transaction-container">
        <base-flag :currentUserR="currentUserR"></base-flag>
        <div class="last-transaction">
          <ion-text class="ion-text-capitalize">{{ lastTXR?.type }} transfer</ion-text>
          <ion-text color="medium" class="ion-text-uppercase">
            <h6> {{ isLoan || lastTXR.beneficiary_name === "Bank One Ltd." ? "Bank One Ltd." : "M. " +
              lastTXR.beneficiary_name }}</h6>
          </ion-text>
        </div>
        <ion-row class="tx-amount ion-justify-content-end">
          <ion-text class="amount" :color="lastTXR?.inflow ? 'success' : 'danger'"> {{ lastTXR?.inflow ? '+' : '-' }}
            {{ lastTXR?.amount }}
            <span class="currency">

              {{ currentUserR?.currency === 'EURO' ? '€'
                : currentUserR?.currency === 'POUND' ? '£'
                  : '$' }}
            </span>
          </ion-text>
        </ion-row>
      </ion-row>
    </ion-card-content>
    <ion-card-content v-else>
      <ion-row class="ion-justify-content-center ion-margin-bottom">
        <ion-text color="medium">No transaction</ion-text>
      </ion-row>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { useRouter } from "vue-router";
import sum from "../../utils/home/computor";
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from "pinia";

// Commented for unit test = import fake bank Accounts
// import account_checking from "../../utils/bank_account/account_checking";
// import account_savings from "../../utils/bank_account/account_savings";
// import account_investments from "../../utils/bank_account/account_investments";



import {
  IonCard,
  IonCardTitle,
  IonText,
  IonRow,
  IonCol,
} from "@ionic/vue";
import {
  defineComponent,
  onBeforeUpdate,
  ref,
} from "vue";
export default defineComponent({
  components: {
    IonText,
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
  },
  props: ["bankAccounts", "lastTX", "currentUser", "isLoan"],
  setup(props) {
    const router = useRouter();
    const authStore = useAuthStore();
    const { isAuth } = storeToRefs(authStore)
    let overviewTotal = ref(0);
    let lastTXR = ref(null);
    let currentUserR = ref(null);
    onBeforeUpdate(() => {
      if (!isAuth.value) {
        return
      }
      overviewTotal.value = sum(props.bankAccounts);
      lastTXR.value = props.lastTX;
      console.log(lastTXR.value);
      currentUserR.value = props.currentUser;
    });
    return {
      overviewTotal,
      lastTXR,
      currentUserR,
      router
    };
  },
});
</script>

<style scoped>
.fontWeight100 {
  font-weight: 100;
}

/* .last-transaction-container {
  padding: 0;
  width: 100%;
} */

.transaction-container {
  height: 80px;
  width: 95%;
}

.last-transaction-container {
  display: flex;
  flex-wrap: nowrap;
  transform: translateX(-30px);
  width: 110%;
}

ion-text {
  display: flex;
  flex-wrap: nowrap;
  font-size: 15px;
}

.amount {
  font-size: 13px;
}

.currency {
  font-size: 10px;
}
</style>
