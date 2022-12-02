<template>
  <ion-card color="secondary" class="card-items">
    <ion-row class="ion-justify-content-between">
      <ion-text class="ion-padding">{{ data.text }}</ion-text>
      <ion-icon class="ion-padding" :src="toggleOutline"></ion-icon>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonRow, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { toggleOutline } from "ionicons/icons";

export default defineComponent({
  components: {
    IonText,
    IonRow,
    IonCard,
    IonIcon,
  },
  props: ["data"],
  setup() {
    return {
      toggleOutline,
    };
  },
});
</script>

<style scoped>
.card-items {
  height: 50px;
  width: 90%;
}
</style>
