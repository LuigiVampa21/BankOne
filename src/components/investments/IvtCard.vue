<template>
  <ion-card
    color="secondary"
    class="assets-container ion-margin-bottom"
    :router-link="'investments/' + type"
    >
    <ion-row class="ion-margin-bottom">
      <h6 class="asset-type-title ion-text-capitalize" >{{ type }}</h6>
    </ion-row>
    <ion-row class="ion-justify-content-between row-container">
      <IvtAsset v-if="data" :assets="data" />
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonRow } from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";

import IvtAsset from "./IvtAsset.vue";

export default defineComponent({
  props: ["data","type"],
  components: {
    IvtAsset,
    IonCard,
    IonRow,
  },
});
</script>

<style scoped>
.assets-container {
  min-height: 20vh;
  margin-top: 2.5vh;
  border-radius: 10px;
}
.asset-type-title {
  font-size: 23px;
  padding-left: 16px;
  font-weight: medium;
}

.row-container {
  flex-wrap: nowrap;
  overflow-x: hidden;
}
</style>
