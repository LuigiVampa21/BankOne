<template>
  <ion-page>
    <base-layout :title="'Cards'" :backLink="'/home'">
      <ion-grid>
        <ion-row
          class="ion-align-items-center ion-justify-content-around card-container"
          v-if="cardsR"
                  >

          <!-- <CardCreditCard :cards="cardsR[0]" class="ion-margin-end" />
          <CardCreditCard :cards="cardsR[1]" class="ion-margin-end" /> -->

  <CardCreditCard v-for="card in cardsR" :key="card?.id" :card="card" />


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
          <CardOptions :data="cardDetail" />
          <CardOptions :data="cardInsurance" />
          <CardOptions :data="cardUpgrade" />
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import { useCardStore } from "../stores/cards";
import { storeToRefs } from "pinia";
// import { computed } from 'vue';

import {
  onMounted, 
onUpdated, 
ref} from 'vue'

import { IonGrid, IonRow, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

import CardCreditCard from "@/components/card/CardCreditCard";
import CardOptions from "@/components/card/CardOptions";

// import customCard from "../utils/card/customCard"
import cardDetail from "../utils/card/cardDetail";
import cardInsurance from "../utils/card/cardInsurance";
import cardUpgrade from "../utils/card/cardUpgrade";

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
    let cardsR = ref(null);
    const cardStore = useCardStore();
    const {cards} = storeToRefs(cardStore);
    // let arrayLength = ref(0);


  onMounted(async () => {
    await cardStore.getAllCards()
  })
  onUpdated(() => {

    cardsR.value = cards;

    // const getCards = computed(() => {return cards.value});
    // const getLength = computed(() => getCards.value.length === 1)
    // cardsR.value = cards;
    // arrayLength.value = getLength
    // if(arrayLength.value){

      // if true we need to add a second card to ask if the user wants to get a second card
      // If not we'll just iterate through the cards
      // cardsR.value.push(customCard.secondCard)
      // [...cardsR.value, customCard.secondCard]

    // }else{

      // console.log(cardsR.value);
    // }

    // console.log(cardsR.value[0]);
    // if(getLength.value < 2){
    //   console.log('Hiiya');
      // cardsR.value.push(customCard.secondCard)
      // console.log(customCard.secondCard);
    // }
    
    // console.log(cardsR.value);
  })

    return {
      cardDetail,
      cardInsurance,
      cardUpgrade,
      cardsR,
    };
  },
});
</script>

<style scoped>
.card-container {
  height: 40vh;
  /* display: flex; */
  /* flex-direction: row; */
  width: 200vw;

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
