<template>
  <ion-page>
    <base-layout :title="'Cards'" :loading="loading" :backLink="'/home'">
      <ion-grid>
        <ion-row
          class="ion-align-items-center ion-justify-content-center"
          v-if="arrayCard"
                  >
        <!-- <ion-row
          class="ion-align-items-center ion-justify-content-around card-container"
          v-if="arrayCard"
                  > -->

          <!-- <CardCreditCard :cards="cardsR[0]" class="ion-margin-end" />
          <CardCreditCard :cards="cardsR[1]" class="ion-margin-end" /> -->

  <CardCreditCard v-for="card in arrayCard.value" :key="card?.id" :card="card" :showDetails="showCardDetails" />
  <!-- <CardCreditCard v-for="card in arrayCard.value" :key="card?.id" :card="card" :showDetails="showCardDetails" /> -->
  <!-- <CardCreditCard :arrayCard="arrayCard"/> -->


        </ion-row>
        <ion-row class="ion-justify-content-center row-card-container">
          <div class="dot-container">
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
          </div>
        </ion-row>
        <ion-row
          class="ion-justify-content-center ion-padding-top ion-margin-top"
        >
          <CardOptions v-for="detail in cardOpts" :key="detail.text" :data="detail" @optChange="setOpts"
          />
           <!-- @setValues="initOpt" -->
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import { onMounted, onUpdated, ref, defineComponent, 
// reactive 
} from 'vue'

import { useCardStore } from "../stores/cards";
import { storeToRefs } from "pinia";


import { IonGrid, IonRow, IonPage } from "@ionic/vue";

import CardCreditCard from "@/components/card/CardCreditCard";
import CardOptions from "@/components/card/CardOptions";

import cardDetail from "../utils/card/cardDetail";
import hasSecondCardFn from "../utils/card/setSecondCard"

export default defineComponent({
  name: "CardPage",
  components: {
    IonPage,
    IonGrid,
    IonRow,
    CardCreditCard,
    CardOptions,
  },
  setup() {
    const cardStore = useCardStore();
    const {cards, loading, hasSecondCard} = storeToRefs(cardStore);
    let arrayCard = ref([]);
    let cardOpts = ref(null);
    let showCardDetails = ref(false);
    // let cardSetOpts = reactive({
    //   detail: null,
    //   insurance: null,
    //   physicalCard: null
    // })

  onMounted(async () => {
    await cardStore.getAllCards()
    cardOpts.value = hasSecondCardFn(cardDetail.detailArray, hasSecondCard.value);
    // console.log(cardOpts.value);
  })
  onUpdated(() => {
    arrayCard.value = cards
    })
    // const logCardOpts = () => {
    //   console.log(cardOpts.value);
    // }

  const setOpts = opt => {
      console.log(opt.title, opt.mode);
      for (const cardOpt of cardOpts.value){
        if(opt.title == cardOpt.title){
          cardOpt.mode = opt.mode
        // logCardOpts()
        if(opt.title === 'detail'){
          showCardDetails.value = !showCardDetails.value
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
      setOpts,
      // initOpt,
      showCardDetails
    };
  },
});
</script>

<style scoped>
.card-container {
  height: 40vh;
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 200vw; */
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

.dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.dot-2 {
  background: var(--ion-color-medium);
}
</style>
