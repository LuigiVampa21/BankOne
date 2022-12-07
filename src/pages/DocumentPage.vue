<template>
  <ion-page>
    <base-layout :title="'Documents'" :backLink="'/home'">
      <ion-row class="ion-justify-content-center">
        <DocumentCard @emitAccount="accountValue" @emitType="typeValue" />
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
  setup() {
    let queryObj = {
      account: null,
      type: null,
      amount: null,
      startDate: null,
      endDate: null,
    };
    const accountValue = account => {
      queryObj.account = account;
    };
    const typeValue = type => {
      queryObj.type = type;
      console.log(queryObj);
    };
    return {
      queryObj,
      accountValue,
      typeValue,
    };
  },
};
</script>

<style scoped></style>
