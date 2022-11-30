<template>
  <ion-card color="secondary">
    <ion-row class="ion-justify-content-between">
      <ion-card-title class="ion-padding-start">
        <h6>{{ data.title }}</h6>
      </ion-card-title>
      <ion-icon
        class="ellipse-padding"
        size="small"
        color="light"
        :icon="ellipsisHorizontalOutline"
      ></ion-icon>
    </ion-row>
    <ion-row>
      <div class="bank-card-container ion-margin">
        <div class="card-bank-1"></div>
        <div class="card-bank-2"></div>
      </div>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonRow, IonCard, IonCardTitle, IonIcon } from "@ionic/vue";
import { ellipsisHorizontalOutline } from "ionicons/icons";

export default {
  name: "HomeCard",
  components: {
    IonRow,
    IonCard,
    IonCardTitle,
    IonIcon,
  },
  props: ["data"],
  setup() {
    return {
      ellipsisHorizontalOutline,
    };
  },
};
</script>

<style scoped>
.bank-card-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
}

.ellipse-padding {
  padding-right: 5px;
}

.card-bank-1 {
  width: 60px;
  height: 35px;
  background: grey;
  border-radius: 2px;
}
.card-bank-2 {
  width: 60px;
  height: 35px;
  background: grey;
  border-radius: 2px;
}
</style>
