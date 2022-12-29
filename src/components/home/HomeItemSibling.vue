<template>
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
          <ion-text class="ion-text-capitalize" color="medium">{{ data.firstName }}</ion-text>
        </ion-row>
      </ion-grid>
</template>

<script>
import { defineComponent } from "vue";
import {IonGrid, IonRow, IonItem, IonAvatar, IonText} from "@ionic/vue";
export default defineComponent({
components: {
    IonGrid,
    IonRow, 
    IonItem,
    IonAvatar,
    IonText
},
props:["data"]
})
</script>

<style>

</style>