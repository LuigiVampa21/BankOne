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
    <ion-grid class="ion-margin-top">
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
                <!-- <ion-card-subtitle>EUR</ion-card-subtitle> -->
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
        <ion-row>
          <ion-card color="secondary" class="containers card-container">
            <ion-row class="ion-justify-content-between">
              <ion-card-title class="ion-padding-start">
                <h6>Cards</h6>
              </ion-card-title>
              <ion-icon
                class="ion-padding-end"
                size="small"
                color="light"
                :icon="ellipsisHorizontalOutline"
              ></ion-icon>
            </ion-row>
            <ion-text class="card-sub-title ion-padding-start" color="medium"
              >Premium Card
            </ion-text>
          </ion-card>
        </ion-row>
        <ion-row>
          <ion-card color="secondary" class="containers budget-container">
            <ion-row>
              <ion-card-title> <h4>Budget</h4> </ion-card-title>
            </ion-row>
          </ion-card>
        </ion-row>
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
import { ellipsisHorizontalOutline } from "ionicons/icons";
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
  /* width: 80vw; */
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
  width: 40vw;
}

.card-sub-title {
  font-size: 12px;
}
</style>
