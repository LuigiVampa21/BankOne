<template>
  <ion-page>
    <ion-content ref="el">
      <base-layout :homeP="true">
        <ion-row class="ion-justify-content-end">
          <ion-button @click="logout">
            <ion-text color="light" class="ion-text-capitalize"
              >log out</ion-text
            >
          </ion-button>
        </ion-row>
        <ion-row class='ion-justify-content-between'>

        <ion-item color="primary" class="ion-margin-start ion-margin-bottom">
          <ion-avatar>
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </ion-avatar>
          <ion-label>
            <ion-text class="ion-margin-start ion-text-capitalize">
              hello {{ currentUser?.username }}
            </ion-text>
          </ion-label>
        </ion-item>
        </ion-row>
        <ion-grid>
          <ion-row>
            <!-- HOME HEADER -->
            <div class="header-container ion-margin-bottom ion-margin-top">
              <HomeHeader />
            </div>
            <!-- HomeOverview -->

            <HomeOverview :lastTX="lastTX" :bankAccounts="bankAccounts" :beneficiary="beneficiary" :currentUser="currentUser" :isLoan="isLoan"/>

            <!-- :overview="overview" -->

            <!-- HomeCards -->

            <div class="rows-container">
              <HomeCard router-link="/cards" :data="homeCards" />
              <HomeCard router-link="/investments" :data="homeInvestments" />
            </div>
            <div class="rows-container">
              <HomeCard router-link="/loans" :data="homeLoan" />
              <HomeCard router-link="/documents" :data="homeDocuments" />
            </div>

            <!--  SIBLINGS  -->

            <HomeSiblings :siblings="siblings"/>

            <!--  WALLETS  -->

            <HomeWallet :accounts="bankAccounts" :walletTotal="walletTotal" router-link="/wallet" />

            <ion-grid>
              <ion-row
                class="ion-justify-content-center ion-margin-bottom ion-padding-bottom"
              >
                <ion-col>
                  <div
                    color="medium"
                    class="ion-margin-bottom ion-padding-bottom"
                  >
                    <div class="ion-text-center">
                      <ion-text color="medium">2022 © Bank One Inc.</ion-text>
                    </div>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-row>
        </ion-grid>
      </base-layout>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useOverviewStore } from "../stores/overview";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import {
  IonPage,
  IonAvatar,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonButton,
} from "@ionic/vue";

import HomeHeader from "@/components/home/HomeHeader";
import HomeOverview from "@/components/home/HomeOverview";
import HomeCard from "@/components/home/HomeCard";
import HomeSiblings from "@/components/home/HomeSiblings";
import HomeWallet from "@/components/home/HomeWallet";

import homeCards from "../utils/home/homeCards";
import homeLoan from "../utils/home/homeLoan";
import homeDocuments from "../utils/home/homeDocuments";
import homeInvestments from "../utils/home/homeIvt";

import sum from "../utils/home/computor";
import { ellipsisHorizontalOutline, document } from "ionicons/icons";

export default {
  name: "HomePage",
  components: {
    HomeHeader,
    HomeOverview,
    HomeCard,
    HomeSiblings,
    HomeWallet,
    IonPage,
    IonContent,
    IonAvatar,
    IonItem,
    IonLabel,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  setup() {
    const router = useRouter();
    let walletTotal = ref(0);
    const authStore = useAuthStore();
    const overviewStore = useOverviewStore();
    // Those will needs to be passed as arguments to components
    const { lastTX, bankAccounts, beneficiary, siblings, isLoan } = storeToRefs(overviewStore);
    const { isAuth, currentUser } = storeToRefs(authStore);
    const logout = async () => {
      await authStore.handleLogout();
    };

    onMounted(async () => {
      const id = await authStore.getFromStorage("userID");
      if(!id) {
        return
      }
      // console.log(currentUser.value);
      await overviewStore.getOverview();
      walletTotal.value = sum(bankAccounts.value, true)
    })
    return {
      ellipsisHorizontalOutline,
      document,
      homeCards,
      homeLoan,
      homeDocuments,
      homeInvestments,
      router,
      currentUser,
      lastTX,
      isLoan,
      bankAccounts,
      beneficiary,
      siblings,
      walletTotal,
      isAuth,
      logout,
    };
  },
};
</script>


<style scoped>
.ctn{
  overflow: scroll;
  -webkit-scrollbar: none;  
}

.header-container {
  width: 100vw;
}

.rows-container {
  width: 100vw;
  display: flex;
}
</style>
