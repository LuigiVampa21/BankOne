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
                      <CardCreditCard :card="card" :showDetails="showCardDetails" :hasSecondCard="hasSecondCard"/>
                    </ion-slide>

                  </ion-slides>

        </ion-row>
        <ion-row
          class="ion-justify-content-center ion-padding-top ion-margin-top"
        >
          <CardOptions v-for="detail in cardOpts" :key="detail.text" :data="detail" @optChange="setOpts"
          />
        </ion-row>
      </ion-grid>
          <ion-modal :is-open="insuranceModal">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            <h1>Insurance</h1> </ion-title>
          <ion-buttons class="ion-justify-content-end">
            <ion-button color="light" @click="setOpen(false, 'insurance')">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p class="approval-text pos-down5 ion-margin-bottom ion-padding-bottom">
          Please check your mailbox to approve the terms of services.
          Note that we provide only one insurance for all your cards, so you don't need to apply for any other cards you would have at Bank One.
        </p>
      </ion-content>
    </ion-modal>
          <ion-modal :is-open="phyCardModal">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            <h1>Physical Card</h1> </ion-title>
          <ion-buttons class="ion-justify-content-end">
            <ion-button color="light" @click="setOpen(false, 'card')">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p class="approval-text pos-down5 ion-margin-bottom ion-padding-bottom">
          Please check your mailbox to approve the terms of services.
          After your approval the card will be sent to your home adress within 5 business days.
        </p>
        <!-- CREATE A FORM FOR HOME ADDRESS RIGHT HERE -->
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


import { IonGrid, IonRow, IonPage, IonSlides, IonSlide, IonModal, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, toastController, } from "@ionic/vue";

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
    const {cards, loading, hasSecondCard, hasInsurances, errorAPIMessage} = storeToRefs(cardStore);
    let arrayCard = ref([]);
    let cardOpts = ref(null);
    let showCardDetails = ref(false);
    let insuranceModal = ref(false);
    let phyCardModal = ref(false);
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
    // console.log(hasInsurances.value);
    cardOpts.value = hasSecondCardFn(cardDetail.detailArray, hasSecondCard.value, hasInsurances.value);
  })
  onUpdated(async () => {
    arrayCard.value = cards;
    cardOpts.value = hasSecondCardFn(cardDetail.detailArray, hasSecondCard.value, hasInsurances.value);
    })
  onUnmounted(() => {
    cardOpts.value = resetCardDetails(cardDetail.detailArray);
    hasInsurances.value = false;
  })
  const setOpts = async opt => {
      for (const cardOpt of cardOpts.value){
        if(opt.title == cardOpt.title){
          cardOpt.mode = opt.mode
        if(opt.title === 'detail'){
          showCardDetails.value = !showCardDetails.value
        }
        if(opt.title === 'insurance' && opt.mode === true){
          setOpen(true, 'insurance');
          await cardStore.applyForInsurance()
          
        }
        if(opt.title === 'physicalCard' && opt.mode === true){
          setOpen(true, 'card');
          await cardStore.applyForSecondCard()
        }
        }
      }
    }
  const getSlide = async() => {
      slide.value = await slider.value.$el.getActiveIndex();
  }
  const alreadyInsured = async() => {
      const toast = await toastController.create({
        message: errorAPIMessage.value,
        duration: 2500,
        position: "top",
        color: 'danger',
      })
      await toast.present()
    } 
  const setOpen = async (isOpen, modal) => {
    if(modal === 'insurance'){

      insuranceModal.value = isOpen;
      if(errorAPIMessage.value !== null){
        await alreadyInsured()
      }
    }else if(modal === 'card'){
        phyCardModal.value = isOpen;

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
      phyCardModal,
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
