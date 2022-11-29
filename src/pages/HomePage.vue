<template>
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
        <div class="header-container">
          <HomeHeader />
        </div>
        <!-- HomeOverview -->

        <HomeOverview />

        <!-- HomeCards -->

        <div class="row-container">
          <HomeCard :data="homeCards" router-link="/cards" />
          <HomeCard :data="homeBudget" />
        </div>
        <div class="row-container">
          <HomeCard :data="homeLoan" router-link="/loans" />
          <HomeCard :data="homeDocuments" />
        </div>

        <!--  SIBLINGS  -->

        <HomeSiblings />

        <!--  WALLETS  -->

        <HomeWallet />

        <ion-grid>
          <ion-row
            class="ion-justify-content-center ion-margin-bottom ion-padding-bottom"
          >
            <ion-col>
              <div color="medium" class="ion-margin-bottom ion-padding-bottom">
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
</template>

<script>
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonAvatar,
    IonItem,
    IonLabel,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    HomeHeader,
    HomeOverview,
    HomeCard,
    HomeSiblings,
    HomeWallet,
  },
  setup() {
    return {
      ellipsisHorizontalOutline,
      document,
      homeCards,
      homeBudget,
      homeLoan,
      homeDocuments,
    };
  },
});
</script>

<style scoped>
.header-container {
  width: 100vw;
}

.row-container {
  width: 100vw;
  display: flex;
}

.ellipse-padding {
  padding-right: 5px;
}

.budget-diagram {
  border: 5px solid orange;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.sibling-avatar {
  max-width: 40px;
  max-height: 40px;
}

.wallet-total-amount {
  font-size: 20px;
}
</style>
