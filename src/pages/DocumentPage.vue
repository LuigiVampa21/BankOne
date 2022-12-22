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
          @click="searchData"
          >Search</ion-button
        >
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import { IonPage, IonButton } from "@ionic/vue";
import { useDocsStore } from "../stores/documents";
import DocumentCard from "@/components/documents/DocumentCard";
import { defineComponent, ref } from "@vue/runtime-core";
// import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    DocumentCard,
    IonPage,
    IonButton,
  },
  setup() {
    const docs = ref(null);
    const docsStore = useDocsStore()
    // const {docsData} = storeToRefs(docsStore) 
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
    const searchData = async() => {
      await docsStore.getDocs(queryObj)
    }
    
    return {
      queryObj,
      accountValue,
      typeValue,
      amountValue,
      startDateValue,
      endDateValue,
      docs,
      searchData,
    };
  },
});
</script>

<style scoped></style>
