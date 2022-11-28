<template>
  <ion-card color="secondary" class="setting-card">
    <ion-row class="ion-align-items-center">
      <ion-icon
        class="ion-padding"
        size="small"
        :color="data.color"
        :icon="data.icon"
      ></ion-icon>
      <!-- color="light" -->
      <ion-text class="ion-margin-start">{{ data.title }}</ion-text>
    </ion-row>
  </ion-card>
</template>

<script>
import { person, fingerPrint, logOut, closeCircle } from "ionicons/icons";

export default {
  props: ["data"],
  created() {
    console.log(this.data.icon);
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

<style>
.setting-card {
  height: 60px;
}
</style>
