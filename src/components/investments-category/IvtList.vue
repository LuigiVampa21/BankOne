<template>
  <ion-row>
    <ion-card class="ivt-list" color="secondary">
      <IvtAssetRow :assets="data.assets" />
    </ion-card>
  </ion-row>
</template>

<script>
import IvtAssetRow from "./IvtAssetRow.vue";
import { IonCard } from "@ionic/vue";
export default {
  props: ["data"],
  components: {
    IonCard,
    IvtAssetRow,
  },
};
</script>

<style scoped>
ion-card.ivt-list {
  position: relative;
  top: 5vh;
}
</style>
