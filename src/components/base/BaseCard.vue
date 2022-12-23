<template>
  <ion-row>
    <ion-card color="secondary" class="ion-padding ion-text-center">
      <ion-text v-if="type !== 'wallet'" class="ion-text-capitalize">{{ data }}</ion-text>
      <div v-if="type === 'wallet'" >
        <base-item-row :tx="data"></base-item-row>
      </div>
    </ion-card>
  </ion-row>
</template>

<script>
import { IonRow, IonCard, IonText } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["data","type"],
  name: "BaseCard",
  components: {
    IonRow,
    IonCard,
    IonText,
  },
});
</script>

<style scoped>

</style>
