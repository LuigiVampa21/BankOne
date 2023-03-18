<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-row class="ion-justify-content-between">
        <ion-col>
          <ion-card-title class="fontWeight100" v-if="overviewTotal">
            {{ overviewTotal }} {{currentUserR?.currency === 'EURO' ? '€'
                    : currentUserR?.currency === 'POUND' ? '£'
                    : '$' }}
          </ion-card-title>
          <ion-text>{{currentUserR?.currency === 'EURO' ? 'EUR'
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
        <!-- <ion-item color="secondary">
          <ion-avatar>
            <img
              class="avatar"
              :alt="'flag ' + currentUserR?.currency"
              :src="currentUserR?.currency === 'EURO' ? require('../../../public/assets/flags/flag.europe.png') 
                    : currentUserR?.currency === 'POUND' ? require('../../../public/assets/flags/flag.united-kingdom.png')
                    : require('../../../public/assets/flags/flag.united-states.png')"
            />
          </ion-avatar>
        </ion-item> -->
        <div class="last-transaction">
          <ion-text class="ion-text-capitalize"
            >{{ lastTXR?.type }} transfer</ion-text
          >
          <ion-text color="medium" class="ion-text-uppercase"><h6> <span v-if="lastTXR.beneficiary_name !== 'Bank One Ltd.'">M. </span> {{ lastTXR.beneficiary_name }}</h6></ion-text>
        </div>
        <ion-row class="tx-amount ion-justify-content-end">
          <ion-text :color="lastTXR?.inflow ? 'success' : 'danger'"> {{lastTXR?.inflow ? '+' : '-'}} {{lastTXR?.amount}} 
                    {{currentUserR?.currency === 'EURO' ? '€'
                    : currentUserR?.currency === 'POUND' ? '£'
                    : '$' }} </ion-text> 
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
  // Comment for unit tests
  // onBeforeMount,
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
  props: ["bankAccounts", "lastTX", "currentUser"],
  // setup() {
  setup(props) {
    const router = useRouter();
    const authStore = useAuthStore();
    const {isAuth} = storeToRefs(authStore)
    let overviewTotal = ref(0);
    let lastTXR = ref(null);
    let currentUserR = ref(null);
    onBeforeUpdate(() => {
      if(!isAuth.value) {
        return
      }
      overviewTotal.value = sum(props.bankAccounts);
      lastTXR.value = props.lastTX;
      currentUserR.value = props.currentUser;
      console.log(currentUserR.value);
    });
    // Commented for unit test = import fake bank Accounts
    // onBeforeMount(() => {
    //   overviewTotal.value = sum([account_checking, account_savings, account_investments], true);
    // })
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

.last-transaction-container {
  padding: 0;
  width: 100%;
}
</style>
