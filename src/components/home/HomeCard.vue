<template>
  <ion-card color="secondary" class="ion-padding-bottom">
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
    <ion-row class="ion-justify-content-center ion-margin-bottom">
      <HomeCardIcon :icon="data.icon"/>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonRow, IonCard, IonCardTitle, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import HomeCardIcon from "./HomeCardIcon.vue";
import { ellipsisHorizontalOutline } from "ionicons/icons";
export default defineComponent({
  name: "HomeCard",
  components: {
    IonRow,
    IonCard,
    IonCardTitle,
    IonIcon,
    HomeCardIcon,
  },
  props: ["data"],
  setup() {
    return {
      ellipsisHorizontalOutline,
    };
  },
});
</script>

<style scoped>
/* .bank-card-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
} */

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
