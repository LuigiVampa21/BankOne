<template>
  <ion-page>
    <ion-content>
      <base-layout>
        <ion-item color="primary" class="ion-margin">
          <ion-avatar slot="start">
            <img
              class="avatar"
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </ion-avatar>
          <ion-label>
            <ion-text> Hello Luigi </ion-text>
          </ion-label>
        </ion-item>
        <ion-grid>
          <ion-row>
            <!-- HOME HEADER -->
            <div class="header-container ion-margin-bottom ion-margin-top">
              <HomeHeader />
            </div>
            <!-- HomeOverview -->

            <HomeOverview />

            <!-- HomeCards -->

            <div class="rows-container">
              <HomeCard router-link="/cards" :data="homeCards" />
              <HomeCard :data="homeBudget" />
            </div>
            <div class="rows-container">
              <HomeCard :data="homeLoan" router-link="/loans" />
              <HomeCard :data="homeDocuments" />
            </div>

            <!--  SIBLINGS  -->

            <HomeSiblings />

            <!--  WALLETS  -->

            <HomeWallet router-link="/wallet" />

            <ion-grid>
              <ion-row
                class="ion-justify-content-center ion-margin-bottom ion-padding-bottom"
              >
                <ion-col>
                  <div
                    color="medium"
                    class="ion-margin-bottom ion-padding-bottom"
                  >
                    <div class="ion-text-center" color="light-tint">
                      <h6>2022 © Bank One Inc.</h6>
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
} from "@ionic/vue";

import HomeHeader from "@/components/home/HomeHeader";
import HomeOverview from "@/components/home/HomeOverview";
import HomeCard from "@/components/home/HomeCard";
import HomeSiblings from "@/components/home/HomeSiblings";
import HomeWallet from "@/components/home/HomeWallet";

import homeCards from "../utils/home/homeCards";
import homeBudget from "../utils/home/homeBudget";
import homeLoan from "../utils/home/homeLoan";
import homeDocuments from "../utils/home/homeDocuments";

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
  },
  setup() {
    const router = useRouter();
    return {
      ellipsisHorizontalOutline,
      document,
      homeCards,
      homeBudget,
      homeLoan,
      homeDocuments,
      router,
    };
  },
};
</script>

<style scoped>
.header-container {
  width: 100vw;
}

.rows-container {
  width: 100vw;
  display: flex;
}
</style>
