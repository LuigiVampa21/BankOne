<template>
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
        <ion-label class="ion-text-capitalize">{{account.type}}</ion-label>
      </ion-item>
      <ion-text class="ion-margin-end">{{account.amount}} €</ion-text>
    </ion-row>
</template>

<script>
import {IonRow, IonItem, IonAvatar, IonLabel, IonText} from "@ionic/vue"; 
export default {
    components: {
        IonRow, 
        IonItem, 
        IonAvatar, 
        IonLabel, 
        IonText
    },
    props:['account']

}
</script>

<style>

</style>