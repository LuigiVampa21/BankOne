<template>
  <ion-card color="secondary" class="setting-card">
    <ion-row class="ion-align-items-center">
      <ion-icon
        class="ion-padding"
        size="small"
        :color="data.color"
        :icon="data.icon"
      ></ion-icon>
      <ion-text class="ion-margin-start">{{ data.title }}</ion-text>
    </ion-row>
  </ion-card>
</template>

<script>
import { person, fingerPrint, logOut, closeCircle } from "ionicons/icons";
import { IonCard, IonRow, IonIcon, IonText } from "@ionic/vue";

export default {
  props: ["data"],
  components: {
    IonCard,
    IonRow,
    IonIcon,
    IonText,
  },
  setup() {
    return {
      person,
      fingerPrint,
      logOut,
      closeCircle,
    };
  },
};
</script>

<style scoped>
.setting-card {
  height: 60px;
}
</style>
