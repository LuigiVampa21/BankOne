<template>
  <ion-card color="secondary" class="ion-margin-top">
    <ion-row class="ion-margin-start ion-margin-bottom">
      <h3>Real Time estimation</h3>
    </ion-row>
    <ion-row class="ion-justify-content-center ion-margin">
      <ion-input class="custom-2 ion-margin" type="number"></ion-input>
    </ion-row>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonRow,
  IonInput,
} from "@ionic/vue";

export default {
  components: {
    IonRow,
    IonCard,
    IonInput,
  },
};
</script>

<style></style>
