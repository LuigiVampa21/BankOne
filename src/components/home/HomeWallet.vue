<template>
  <ion-card color="secondary" class="wallet-container ion-padding-bottom">
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
      <ion-text class="ion-margin-start wallet-total-amount">25 780 €</ion-text>
    </ion-row>
    <ion-row
      class="ion-margin-top ion-padding-top ion-justify-content-between ion-align-items-center"
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
</template>

<script>
export default {};
</script>

<style></style>
