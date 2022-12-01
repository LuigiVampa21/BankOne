<template>
  <ion-card color="secondary">
    <IvtAssetRow />
  </ion-card>
</template>

<script>
import IvtAssetRow from "./IvtAssetRow.vue";
import { IonCard } from "@ionic/vue";
export default {
  components: {
    IonCard,
    IvtAssetRow,
  },
};
</script>

<style></style>
