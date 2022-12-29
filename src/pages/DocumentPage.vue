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
        <ion-button class="ion-text-capitalize custom-3" color="tertiary" @click="generatePDF">export</ion-button>

        
            <documentToPDFVue class="preview" ref="document" :txs="docs" :dateInterval="{startDate: queryObj.startDate, endDate: queryObj.endDate}"/>
  
        <base-item-row :tx="docs" :type="'doc'"></base-item-row>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>

import jsPDF from 'jspdf'
import { IonPage, IonButton } from "@ionic/vue";
import { useDocsStore } from "../stores/documents";
import DocumentCard from "@/components/documents/DocumentCard";
import { defineComponent, onUnmounted, ref } from "vue";
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
    const document = ref();
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
    const generatePDF = () => {
      // let doc = new jsPDF();
      let doc = new jsPDF({
        orientation: 'p', 
        unit: 'px', 
        format: 'a4'
});
      const contentHTML = document.value.$el;
      console.log(contentHTML);
      // console.log(document.value);
      // const content = document.value.innerHTML;
      // console.log(doc);
      // doc.setFontSize(8)
      doc.html(contentHTML, { 
       callback: function(doc){
        doc.save('transactions.pdf')
       } 
      })
      // doc.save('transaction.pdf')
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
      generatePDF,
      document,
    };
  },
});
</script>

<style scoped>
.preview{
  transform: scale(0.5) translate(-50%,-50%)
}
</style>
