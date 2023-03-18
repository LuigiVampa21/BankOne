<template>
  <ion-card color="secondary" class="sibling-accounts-container ion-padding-bottom">
    <ion-row v-if="siblings?.length" class="sibling-accounts-row">

      <HomeItemSibling  v-for="sibling of siblings" :key="sibling.id" :data="sibling"/>
      
    </ion-row>
    <ion-row v-else class="ion-justify-content-center">
      <ion-text color="medium" class="ion-margin ion-padding-top">
        No known account
      </ion-text>
    </ion-row>
  </ion-card>
</template>

<script>
import {
  IonRow,
  IonCard,
  IonText,
} from "@ionic/vue";
import HomeItemSibling from "./HomeItemSibling.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonRow,
    IonCard,
    IonText,
    HomeItemSibling,
  },
  props:['siblings'],
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
