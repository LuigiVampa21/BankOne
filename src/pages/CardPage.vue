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


import { IonGrid, IonRow, IonPage, IonSlides, IonSlide } from "@ionic/vue";

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
    CardCreditCard,
    CardOptions,
    IonSlides,
    IonSlide
  },
  setup() {
    const slider = ref(null);
    const slide = ref(0)
    const cardStore = useCardStore();
    const {cards, loading, hasSecondCard, hasInsurances} = storeToRefs(cardStore);
    let arrayCard = ref([]);
    let cardOpts = ref(null);
    let showCardDetails = ref(false);
    // let insurancesEnabled = ref(false);
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
        }
      }
    }
  const getSlide = async() => {
      slide.value = await slider.value.$el.getActiveIndex();
  }
    return {
      cardDetail,
      cardOpts,
      arrayCard,
      loading,
      hasSecondCard,
      hasInsurances,
      setOpts,
      showCardDetails,
      slideOpts,
      getSlide,
      slider,
      slide,
    };
  },
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
</style>
