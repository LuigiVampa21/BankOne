<template>
  <ion-header>
    <ion-toolbar></ion-toolbar>
  </ion-header>
  <base-layout>
    <ion-item color="primary">
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
      <ion-row class="ion-margin-top ion-justify-content-center">
        <ion-button color="secondary" class="btn-home">Overview</ion-button>
        <ion-button color="secondary" class="btn-home">Stocks</ion-button>
        <ion-button color="secondary" class="btn-home">Crypto</ion-button>
        <ion-button color="secondary" class="btn-home">Commodities</ion-button>
      </ion-row>
      <ion-row>
        <ion-card color="secondary">
          <ion-card-header>
            <ion-row class="ion-justify-content-between">
              <ion-col>
                <ion-card-title class="total-amount"> 15 000 € </ion-card-title>
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
              <h6>See All</h6>
            </ion-text>
          </ion-row>
          <ion-card-content class="ion-justify-content-center">
            <ion-row
              class="ion-justify-content-between last-transaction-container"
            >
              <ion-item color="secondary">
                <ion-avatar slot="start">
                  <img
                    class="avatar"
                    alt="Silhouette of a person's head"
                    src="https://via.placeholder.com/150C/O https://placeholder.com"
                  />
                </ion-avatar>
              </ion-item>
              <div class="last-transaction">
                <ion-col>
                  <ion-text>Instant Transfer</ion-text>
                  <ion-text color="medium"><h6>M. DOE John</h6></ion-text>
                </ion-col>
              </div>
              <div class="last-transaction-amount">
                <ion-text color="success">+ 450€</ion-text>
              </div>
            </ion-row>
          </ion-card-content>
        </ion-card>
        <!-- ------------------------------- CARDS ----------------------------- -->

        <div class="row-container">
          <ion-row>
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
          </ion-row>

          <!-- ------------------------------- BUGET ----------------------------- -->

          <ion-row>
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
              </ion-row>
              <ion-text class="card-sub-title ion-padding-start" color="medium"
                >Premium Card
              </ion-text>
              <ion-row>
                <div class="bank-card-container ion-margin">
                  <div class="budget-diagram"></div>
                </div>
              </ion-row>
            </ion-card>
          </ion-row>
        </div>
        <!-- ------------------------------- LOAN----------------------------- -->

        <ion-row>
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
        </ion-row>

        <!-- ------------------------------- DOCS ----------------------------- -->

        <div class="row-container">
          <ion-row>
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
          </ion-row>
        </div>
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
  IonHeader,
  IonToolbar,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { ellipsisHorizontalOutline, document } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonAvatar,
    IonItem,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonText,
    IonGrid,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  setup() {
    return {
      ellipsisHorizontalOutline,
      document,
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
.total-amount {
  font-weight: 100;
}

ion-card-content {
  padding: 20px 0;
}

.last-transaction-container {
  padding: 0;
  width: 100%;
}
.last-transaction-amount,
.last-transaction {
  display: flex;
  justify-content: center;
  align-items: center;
}
.last-transaction-container > *:nth-child(3) {
  width: 25%;
}

.last-transaction-container > *:nth-child(2) {
  width: 45%;
}

.containers {
  /* width: calc(50vw - 32px);
  margin-right: 16px;
  margin-left: 16px; */
}

.card-sub-title {
  font-size: 12px;
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
