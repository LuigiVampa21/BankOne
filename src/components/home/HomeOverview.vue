<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-row class="ion-justify-content-between">
        <ion-col>
          <ion-card-title class="fontWeight100" v-if="overviewTotal">
            {{ overviewTotal }} €
          </ion-card-title>
          <!-- CURRENCY DEPENDS ON COUNTRY -->
          <ion-text>EUR</ion-text>
        </ion-col>
        <ion-item color="secondary">
          <ion-avatar>
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://via.placeholder.com/150C/O https://placeholder.com"
            />
          </ion-avatar>
        </ion-item>
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
        <ion-item color="secondary">
          <ion-avatar>
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://via.placeholder.com/150C/O https://placeholder.com"
            />
          </ion-avatar>
        </ion-item>
        <div class="last-transaction">
          <ion-text class="ion-text-capitalize"
            >{{ lastTXR?.type }} transfer</ion-text
          >
          <ion-text color="medium" class="ion-text-uppercase"><h6>M. {{ beneficiary }}</h6></ion-text>
        </div>
        <ion-row class="tx-amount ion-justify-content-end">
          <ion-text :color="lastTXR?.inflow ? 'success' : 'danger'"> {{lastTXR?.inflow ? '+' : '-'}} {{lastTXR?.amount}}€</ion-text> 
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
import {
  IonAvatar,
  IonCard,
  IonCardTitle,
  IonItem,
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
    IonAvatar,
    IonItem,
    IonText,
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
  },
  props: ["bankAccounts", "lastTX", "beneficiary",
  //  "isAuth", "loading"
  ],
  setup(props) {
    const router = useRouter();
    const authStore = useAuthStore();
    const {isAuth} = storeToRefs(authStore)
    let overviewTotal = ref(0);
    let lastTXR = ref(null);
    let beneficiaryR = ref('');
    onBeforeUpdate(() => {
      // sum(props.bankAccounts);
      if(!isAuth.value) {
        return
      }
      // console.log(isAuth.value);
      overviewTotal.value = sum(props.bankAccounts);
      lastTXR.value = props.lastTX;
      beneficiaryR = props.beneficiary;
    });
    return {
      overviewTotal,
      lastTXR,
      beneficiaryR,
      router,
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
