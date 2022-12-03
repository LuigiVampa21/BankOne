<template>
  <ion-row>
    <ion-card color="secondary" class="ion-padding ion-text-center">
      <ion-text class="ion-text-capitalize">{{ data }}</ion-text>
    </ion-card>
  </ion-row>
</template>

<script>
import { IonRow, IonCard, IonText } from "@ionic/vue";
export default {
  props: ["data"],
  components: {
    IonRow,
    IonCard,
    IonText,
  },
};
</script>

<style></style>
