<template>
  <ion-card color="secondary" class="ion-padding-bottom ion-padding-start">
    <ion-row>
      <ion-text class="card-title">
        <h3 class="ion-text-capitalize" color="light">{{ data?.type }}</h3>
        </ion-text
      >
    </ion-row>
    <ion-row class="ion-justify-content-between">
        <ion-text color="medium">
          <h6>
            {{ data?.amount }}$</h6>
          </ion-text>
          <div class="toggle-container">
            <ion-toggle></ion-toggle>
          </div>
      </ion-row>
    </ion-card>
  </template>

<!-- <ion-icon class="ion-padding" :src="toggleOutline"></ion-icon> -->
<script>
import {
  IonText,
  IonRow,
  IonCard,
  // IonIcon,
  IonToggle,
} from "@ionic/vue";
import { defineComponent } from "vue";
// import { toggleOutline } from "ionicons/icons";

export default defineComponent({
  props: ["data"],
  components: {
    IonText,
    IonRow,
    IonCard,
    // IonIcon,
    IonToggle,
  },
  setup() {
    return {
      // toggleOutline,
    };
  },
});
</script>

<style scoped>
.toggle-container{
  margin-top: -16px
}
</style>
