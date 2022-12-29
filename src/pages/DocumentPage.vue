<template>
  <ion-page>
    <base-layout :title="'Documents'" :backLink="'/home'">
      <ion-row class="ion-justify-content-center" v-if="!docs">
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
      <ion-row v-else class="ion-margin ion-justify-content-between">
        <h1 class="ion-margin-end ion-padding-end">{{ resultsR }} results</h1>
        <ion-button class="ion-text-capitalize custom-3 ion-margin-start" color="tertiary" @click="reset">reset</ion-button>
        <ion-button class="ion-text-capitalize custom-3" color="tertiary" @click="exportTOPDF">export</ion-button>

        <div id="element-to-convert" ref="document" v-if="showPreview">
          <center>
            <documentToPDFVue width="1000" :txs="docs" :dateInterval="{startDate: queryObj.startDate, endDate: queryObj.endDate}"/>
          </center>
        </div>
        <base-item-row :tx="docs" :type="'doc'"></base-item-row>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>

import html2pdf from 'html2pdf.js'
import { IonPage, IonButton } from "@ionic/vue";
import { useDocsStore } from "../stores/documents";
import DocumentCard from "@/components/documents/DocumentCard";
import { defineComponent, onUnmounted, ref } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import documentToPDFVue from "../utils/documents/documentToPDF.vue";

export default defineComponent({
  components: {
    DocumentCard,
    IonPage,
    IonButton,

    documentToPDFVue
  },
  setup() {
    const docsStore = useDocsStore()
    const {docs, resultsR} = storeToRefs(docsStore) 
    const showPreview = ref(false)
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
    const exportTOPDF = async() => {
     const pdf = await html2pdf(document.getElementById('element-to-convert'), {
        margin: 1,
        filename: "transactions.pdf" 
      });
      console.log(pdf);
    }
    onUnmounted(() => {
      reset()
    })
    const reset = () => {
      docsStore.resetDocs()
      queryObj.account = null;
      queryObj.type = null;
      queryObj.amount = null;
      queryObj.startDate = null;
      queryObj.endDate = null;
    }
    return {
      queryObj,
      accountValue,
      typeValue,
      amountValue,
      startDateValue,
      endDateValue,
      searchData,
      reset,
      docs,
      resultsR,
      showPreview,
      exportTOPDF,
    };
  },
});
</script>

<style scoped>
.preview{
  transform: scale(0.5);
}
</style>
