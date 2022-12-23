<template>
  <ion-card color="secondary" class="sibling-accounts-container ion-padding-bottom">
    <ion-row class="sibling-accounts-row">

      <HomeItemSibling  v-for="sibling of siblings" :key="sibling.id" :data="sibling"/>

      <!-- <ion-grid>
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
      </ion-grid> -->
      
    </ion-row>
  </ion-card>
</template>

<script>
import {
  // IonAvatar,
  // IonItem,
  // IonGrid,
  IonRow,
  IonCard,
  // IonText,
} from "@ionic/vue";
import HomeItemSibling from "./HomeItemSibling.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    // IonAvatar,
    // IonItem,
    // IonGrid,
    IonRow,
    IonCard,
    // IonText,
    HomeItemSibling,
  },
  props:['siblings'],
  // setup(props){
  //   console.log(props.siblings);
  // }
});
</script>

<style scoped>
.sibling-accounts-container {
  width: 100vw;
  height: 100%;
}

.sibling-accounts-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
}
</style>
