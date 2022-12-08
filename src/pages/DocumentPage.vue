<template>
  <ion-page>
    <base-layout :title="'Documents'" :backLink="'/home'">
      <ion-row class="ion-justify-content-center">
        <DocumentCard
          @emitAccount="accountValue"
          @emitType="typeValue"
          @emitNumber="amountValue"
          @emitStartDate="startDateValue"
          @emitEndDate="endDateValue"
        />
        <ion-button
          color="tertiary"
          class="custom-1 ion-padding ion-margin-bottom"
          @click="serachData"
          >Search</ion-button
        >
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import DocumentCard from "@/components/documents/DocumentCard";
import { IonPage, IonButton } from "@ionic/vue";
import axios from "axios";

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
    };
    const amountValue = amount => {
      queryObj.amount = amount;
    };
    const startDateValue = date => {
      queryObj.startDate = date;
    };
    const endDateValue = date => {
      queryObj.endDate = date;
    };
    const serachData = async () => {
      console.log(queryObj);
      try {
        const docs = await axios.get(
          process.env.VUE_APP_ROOT_API + "/transactions/documents",
          {
            params: 
              queryObj,
          }
        );
        console.log(docs);
      } catch (err) {
        console.error(err);
      }
    };
    return {
      queryObj,
      accountValue,
      typeValue,
      amountValue,
      startDateValue,
      endDateValue,
      serachData,
    };
  },
};
</script>

<style scoped></style>
