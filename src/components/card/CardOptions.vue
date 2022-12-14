<template>
  <ion-card color="secondary" class="card-items">
    <ion-row class="ion-justify-content-between detail-container">
      <ion-text class="ion-padding text-detail">{{ data.text }}</ion-text>
      <ion-toggle :checked="ok" class="toggle-detail"></ion-toggle>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonRow, IonToggle } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonText,
    IonRow,
    IonCard,
    IonToggle
  },
  props: ["data"],
  setup(props) {
    const ok = true;
    const no = false;
    console.log(props.data);
    return {
      ok,
      no
    };
  },
});
</script>

<style scoped>
.card-items {
  height: 50px;
  width: 90%;
}
.text-detail{
  font-size: 18px;
}
ion-toggle {
  --background: var(--ion-color-primary);
  --background-checked: var(--ion-color-tertiary);

  --handle-background: var(--ion-color-tertiary);
  --handle-background-checked: var(--ion-color-secondary);
}
.toggle-detail{
  margin-right: 5px
}
.detail-container{
  align-items: center;
}
</style>
