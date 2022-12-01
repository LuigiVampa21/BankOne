<template>
  <ion-page>
    <base-layout :title="'Documents'" :backLink="'/home'">
      <ion-row class="ion-justify-content-center">
        <DocumentCard />
        <ion-button color="tertiary" class="custom-1 ion-padding"
          >Search</ion-button
        >
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import DocumentCard from "@/components/documents/DocumentCard";
import { IonPage, IonButton } from "@ionic/vue";
export default {
  components: {
    DocumentCard,
    IonPage,
    IonButton,
  },
};
</script>

<style scoped></style>
