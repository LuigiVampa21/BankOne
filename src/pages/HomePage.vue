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
      <!-- HOME HEADER -->
      <div class="header-container">
        <HomeHeader />
      </div>

      <ion-row>
        <!-- HomeOverview -->

        <HomeOverview />

        <!-- </ion-row> -->

        <!-- ------------------------------- CARDS ----------------------------- -->

        <div class="row-container">
          <ion-card color="secondary" class="containers card-container">
            <ion-row class="ion-justify-content-between">
              <ion-card-title class="ion-padding-start">
                <h6>Cards</h6>
              </ion-card-title>
              <ion-icon
                class="ellipse-padding"
                size="small"
                color="light"
                :icon="ellipsisHorizontalOutline"
              ></ion-icon>
            </ion-row>
            <ion-text class="card-sub-title ion-padding-start" color="medium"
              >Premium Card
            </ion-text>
            <ion-row>
              <div class="bank-card-container ion-margin">
                <div class="card-bank-1"></div>
                <div class="card-bank-2"></div>
              </div>
            </ion-row>
          </ion-card>

          <!-- ------------------------------- BUGET ----------------------------- -->

          <ion-card color="secondary" class="containers">
            <ion-row class="ion-justify-content-between">
              <ion-card-title class="ion-padding-start">
                <h6>Budget</h6>
              </ion-card-title>
              <ion-icon
                class="ellipse-padding"
                size="small"
                color="light"
                :icon="ellipsisHorizontalOutline"
              ></ion-icon>
              <ion-text class="card-sub-title ion-padding-start" color="medium"
                >Premium Card
              </ion-text>
              <ion-row>
                <div class="bank-card-container ion-margin">
                  <div class="budget-diagram"></div>
                </div>
              </ion-row>
            </ion-row>
          </ion-card>
        </div>

        <!-- ------------------------------- LOAN----------------------------- -->
        <div class="row-container">
          <!-- <ion-row> -->
          <ion-card color="secondary" class="containers">
            <ion-row class="ion-justify-content-between">
              <ion-card-title class="ion-padding-start">
                <h6>Loan</h6>
              </ion-card-title>
              <ion-icon
                class="ellipse-padding"
                size="small"
                color="light"
                :icon="ellipsisHorizontalOutline"
              ></ion-icon>
            </ion-row>
            <ion-text class="card-sub-title ion-padding-start" color="medium"
              >Apply today for a loan
            </ion-text>
            <ion-row>
              <div class="ellipse-container ion-margin">
                <div class="loan-icon">
                  <div class="horizontal-icon"></div>
                  <div class="vertical-icon"></div>
                </div>
              </div>
            </ion-row>
          </ion-card>
          <!-- </ion-row> -->

          <!-- ------------------------------- DOCS ----------------------------- -->

          <!-- <ion-row> -->
          <ion-card color="secondary" class="containers">
            <ion-row class="ion-justify-content-between">
              <ion-card-title class="ion-padding-start">
                <h6>Documents</h6>
              </ion-card-title>
              <ion-icon
                class="ellipse-padding"
                size="small"
                color="light"
                :icon="ellipsisHorizontalOutline"
              ></ion-icon>
            </ion-row>
            <ion-text class="card-sub-title ion-padding-start" color="medium"
              >All you need to sleep well
            </ion-text>
            <ion-row>
              <div class="documents-container ion-margin">
                <ion-icon size="large" :icon="document"></ion-icon>
                <ion-icon size="large" :icon="document"></ion-icon>
              </div>
            </ion-row>
          </ion-card>
          <!-- </ion-row> -->
        </div>

        <!-- <div class="test"> -->
        <HomeCard :data="homeCards" />
        <!-- </div> -->

        <!-- ------------------------------- SIBLINGS ----------------------------- -->

        <ion-card color="secondary" class="sibling-accounts-container">
          <ion-row class="sibling-accounts-row">
            <ion-grid>
              <ion-row class="ion-justify-content-center ion-margin-bottom">
                <ion-item color="secondary">
                  <ion-avatar slot="start" class="sibling-avatar">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </ion-avatar>
                </ion-item>
              </ion-row>
              <ion-row class="ion-justify-content-center ion-margin-end">
                <ion-text class="">John</ion-text>
              </ion-row>
            </ion-grid>
            <ion-grid>
              <ion-row class="ion-justify-content-center ion-margin-bottom">
                <ion-item color="secondary">
                  <ion-avatar slot="start" class="sibling-avatar">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </ion-avatar>
                </ion-item>
              </ion-row>
              <ion-row class="ion-justify-content-center ion-margin-end">
                <ion-text class="">John</ion-text>
              </ion-row>
            </ion-grid>
            <ion-grid>
              <ion-row class="ion-justify-content-center ion-margin-bottom">
                <ion-item color="secondary">
                  <ion-avatar slot="start" class="sibling-avatar">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </ion-avatar>
                </ion-item>
              </ion-row>
              <ion-row class="ion-justify-content-center ion-margin-end">
                <ion-text class="">John</ion-text>
              </ion-row>
            </ion-grid>
            <ion-grid>
              <ion-row class="ion-justify-content-center ion-margin-bottom">
                <ion-item color="secondary">
                  <ion-avatar slot="start" class="sibling-avatar">
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </ion-avatar>
                </ion-item>
              </ion-row>
              <ion-row class="ion-justify-content-center ion-margin-end">
                <ion-text class="">John</ion-text>
              </ion-row>
            </ion-grid>
          </ion-row>
        </ion-card>

        <!-- ------------------------------ WALLETS ----------------------------------- -->

        <ion-card color="secondary" class="wallet-container">
          <ion-row class="ion-justify-content-between">
            <ion-card-title class="ion-margin-start">
              <h3>Wallets</h3>
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
            <ion-text class="ion-margin-start wallet-total-amount"
              >25 780 €</ion-text
            >
          </ion-row>
          <ion-row
            class="ion-margin-top ion-justify-content-between ion-align-items-center"
          >
            <ion-item color="secondary">
              <ion-avatar slot="start" class="sibling-avatar">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
              <ion-label>Checking</ion-label>
            </ion-item>
            <ion-text class="ion-margin-end">2350 €</ion-text>
          </ion-row>
          <ion-row
            class="ion-margin-top ion-justify-content-between ion-align-items-center"
          >
            <ion-item color="secondary">
              <ion-avatar slot="start" class="sibling-avatar">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
              <ion-label>Saving</ion-label>
            </ion-item>
            <ion-text class="ion-margin-end">12 350 €</ion-text>
          </ion-row>
          <ion-row
            class="ion-margin-top ion-justify-content-between ion-align-items-center ion-padding-bottom"
          >
            <ion-item color="secondary">
              <ion-avatar slot="start" class="sibling-avatar">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
              <ion-label>Investments</ion-label>
            </ion-item>
            <ion-text class="ion-margin-end">11 080 €</ion-text>
          </ion-row>
        </ion-card>
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
  IonCard,
  IonCardTitle,
} from "@ionic/vue";
import HomeHeader from "@/components/home/HomeHeader";
import HomeOverview from "@/components/home/HomeOverview";
import HomeCard from "@/components/home/HomeCard";

import homeCards from "../utils/home/homeCards";
// import homeBudget from "../utils/home/homeCards";
// import homeLoan from "../utils/home/homeLoan";
// import homeDocuments from "../utils/home/homeDocuments";

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
    IonCard,
    IonCardTitle,
    HomeHeader,
    HomeOverview,
    HomeCard,
  },
  setup() {
    return {
      ellipsisHorizontalOutline,
      document,
      homeCards,
    };
  },
});
</script>

<style scoped>
ion-avatar {
  width: 60px;
  height: 60px;
}
ion-card {
  width: 100%;
}

ion-card-content {
  padding: 20px 0;
}

.header-container{
  width: 100vw;
}

.row-container {
  width: 100vw;
  display: flex;
}

.containers {
  width: 50%;
}

.bank-card-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
}

.ellipse-padding {
  padding-right: 5px;
}

.card-bank-1 {
  width: 60px;
  height: 35px;
  background: grey;
  border-radius: 2px;
}
.card-bank-2 {
  width: 60px;
  height: 35px;
  background: grey;
  border-radius: 2px;
}

.budget-diagram {
  border: 5px solid orange;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.horizontal-icon {
  width: 45px;
  height: 60px;
  background: dodgerblue;
  clip-path: ellipse(16% 50% at 50% 50%);
  position: absolute;
  transform: translate(-50%, -50%);
}
.vertical-icon {
  width: 45px;
  height: 60px;
  background: dodgerblue;
  clip-path: ellipse(16% 50% at 50% 50%);
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
}

.ellipse-container {
  width: 45px;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sibling-accounts-container {
  width: 100vw;
  height: 100%;
}

.sibling-accounts-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
}

.sibling-avatar {
  max-width: 40px;
  max-height: 40px;
}

.wallet-total-amount {
  font-size: 20px;
}
</style>
