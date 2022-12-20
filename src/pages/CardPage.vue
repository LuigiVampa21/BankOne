<template>
  <ion-page>
    <base-layout :title="'Cards'" :loading="loading" :backLink="'/home'">
      <ion-grid>
        <ion-row
          class="ion-align-items-center ion-justify-content-center"
          v-if="arrayCard.value"
                  >
                  <ion-slides pager="true" ref="slider" @ionSlideDidChange="getSlide"	>
                    <ion-slide v-for="card in arrayCard.value" :key="card?.id" class="card-item-slide">
                      <CardCreditCard :card="card" :showDetails="showCardDetails"/>
                    </ion-slide>

                  </ion-slides>

        </ion-row>
        <ion-row
          class="ion-justify-content-center ion-padding-top ion-margin-top"
        >
          <CardOptions v-for="detail in cardOpts" :key="detail.text" :data="detail" @optChange="setOpts" :slide="slide"
          />
        </ion-row>
      </ion-grid>
          <ion-modal :is-open="insuranceModal">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            <h1>Insurance</h1> </ion-title>
          <ion-buttons class="ion-justify-content-end">
            <ion-button color="light" @click="setOpen(false, 'returnToFalse')">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p class="approval-text pos-down5 ion-margin-bottom ion-padding-bottom">
          By clicking this button you will approve our insurance policy and terms of service.
          You will receive an email to confirm your choice, within 3days business days and the contract will start at the date of approval.
          Please note that we only provide one insurance by account, so you don't need to apply for an insurance one some others cards you would have at Bank One. 
        </p>
        <ion-row class="row-button ion-justify-content-center pos-down8">
          <ion-button @click="setOpen(false, 'none')" color="tertiary" class="custom-2">
            <ion-text class="ion-text-capitalize">
              apply
            </ion-text>
          </ion-button>
        </ion-row>
      </ion-content>
    </ion-modal>
    </base-layout>
  </ion-page>
</template>

<script>
import { 
  onMounted,
   onUpdated, ref, defineComponent, onBeforeMount,
  onUnmounted
// reactive 
} from 'vue'

import { useCardStore } from "../stores/cards";
import { storeToRefs } from "pinia";


import { IonGrid, IonRow, IonPage, IonSlides, IonSlide, IonModal, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle } from "@ionic/vue";

import CardCreditCard from "@/components/card/CardCreditCard";
import CardOptions from "@/components/card/CardOptions";

import cardDetail from "../utils/card/cardDetail";
import {hasSecondCardFn, 
   resetCardDetails,
  //  hasInsurancesFn
} from "../utils/card/setCardsOptions"

export default defineComponent({
  name: "CardPage",
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonSlides,
    IonSlide,
    IonModal,
    IonButtons, IonButton, IonHeader, IonToolbar, IonTitle,
    CardCreditCard,
    CardOptions,
  },
  setup() {
    const slider = ref(null);
    const slide = ref(0)
    const cardStore = useCardStore();
    const {cards, loading, hasSecondCard, hasInsurances} = storeToRefs(cardStore);
    let arrayCard = ref([]);
    let cardOpts = ref(null);
    let showCardDetails = ref(false);
    let insuranceModal = ref(false);
    let insuranceToggle = ref(false);
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    onBeforeMount(async () => {
      await cardStore.getAllCards();
    })
    onMounted(async () => {
    await cardStore.getAllCards();
    console.log(hasInsurances.value);
    cardOpts.value = hasSecondCardFn(cardDetail.detailArray, hasSecondCard.value, hasInsurances.value);
  })
  onUpdated(() => {
    arrayCard.value = cards;
    cardOpts.value = hasSecondCardFn(cardDetail.detailArray, hasSecondCard.value, hasInsurances.value);
    })
  onUnmounted(() => {
    cardOpts.value = resetCardDetails(cardDetail.detailArray);
    hasInsurances.value = false;
  })
  const setOpts = opt => {
      for (const cardOpt of cardOpts.value){
        if(opt.title == cardOpt.title){
          cardOpt.mode = opt.mode
        if(opt.title === 'detail'){
          showCardDetails.value = !showCardDetails.value
        }
        if(opt.title === 'insurance' && opt.mode === true){
          setOpen(true);
        }
        }
      }
    }
  const getSlide = async() => {
      slide.value = await slider.value.$el.getActiveIndex();
  }
  const setOpen = (isOpen, action) => {
    insuranceModal.value = isOpen;
    if(action === 'returnToFalse'){
      for (const cardOpt of cardOpts.value){
        if(cardOpt.title === 'insurance'){
          console.log('hiyyas');
          // cardOpts.value = resetCardDetails(cardDetail.detailArray);
        }
    }
  }
      }
    return {
      cardDetail,
      cardOpts,
      arrayCard,
      loading,
      hasSecondCard,
      hasInsurances,
      insuranceToggle,
      setOpts,
      showCardDetails,
      slideOpts,
      getSlide,
      slider,
      setOpen,
      insuranceModal,
    };
  }
});
</script>

<style scoped>
.card-container {
  height: 40vh;
  width: 100vw;

}

.row-card-container {
  height: 2vh;
}

.dot-container {
  display: flex;
  justify-content: space-around;
  width: 30px;
}

.card-item-slide{
  margin-bottom: 50px
}
ion-slides{
  --bullet-background: var(--ion-color-medium);
  --bullet-background-active:   var(--ion-color-tertiary);
}

.approval-text{
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 30px;
}

</style>
