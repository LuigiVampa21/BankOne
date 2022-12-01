<template>
  <ion-page>
    <base-layout :title="$route.params.category" :backLink="'/investments'">
      <IvtList />
    </base-layout>
  </ion-page>
</template>

<script>
import IvtList from "@/components/investments/IvtList";
import { IonPage } from "@ionic/vue";
export default {
  components: {
    IvtList,
    IonPage,
  },
  setup() {},
};
</script>

<style></style>
