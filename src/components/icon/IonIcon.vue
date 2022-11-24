<template>
  <ion-page>
    <ion-content>
      <ion-icon :icon="SettingsOutline"></ion-icon>
      <ion-icon :icon="SwapHorizontalOutline"></ion-icon>
      <ion-icon :icon="HomeOutline"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  SettingsOutline,
  SwapHorizontalOutline,
  HomeOutline,
} from "ionicons/icons";

import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconIcon",
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { SettingsOutline, SwapHorizontalOutline, HomeOutline };
  },
});
</script>
