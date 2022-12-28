import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import custormCard from "../utils/card/customCard"
import getDigitalCard from "../utils/card/getDigitalCard";
import getCardsInOrder from "../utils/card/cardOrder" 

export const useCardStore = defineStore("card", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let cards = ref(null);
  let loading = ref(false);
  let hasSecondCard = ref(false);
  let hasInsurances = ref(false);
  let errorAPIMessage = ref(null);

  const getAllCards = async () => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/cards/user",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
        }
        );
        const { card } = response.data;
        if(card.length > 1){
          hasSecondCard.value = true
        }
        if(card.length === 1){
          card.push(custormCard.secondCard)
          hasSecondCard.value = false
        }
        if(card[0].insurance === true){
          hasInsurances.value = true
        }
        if(card[0].insurance === false){
          hasInsurances.value = false
        }
        cards.value = getCardsInOrder(card);
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
      }
      loading.value = false;
  };

  const applyForInsurance = async () => {

    if(hasInsurances.value){
      // console.log(hasInsurances);
      errorAPIMessage.value = "You already applied for an insurance"
      return;
    }
    const cardID = getDigitalCard(cards.value)
    try{
      await axios.patch(process.env.VUE_APP_ROOT_API + '/cards/' + cardID, {},
      {
        headers: {
          authorization: `Bearer ${token.value}`,
        },
      })
    }catch(err){
      console.error(err);
    }
  }

  const applyForSecondCard = async () => {
    if(hasSecondCard.value){
      errorAPIMessage.value = "You already applied for an insurance"
      return;
    }
    try{
      await axios.post(process.env.VUE_APP_ROOT_API + '/cards/secondCard', {}, {
        headers: {
          authorization: `Bearer ${token.value}`,
        },
      })

    }catch(err){
      console.error(err);
    }
  }
  const resetStore = () => {
    token.value = "";
    cards.value = null;
    loading.value = false;
    hasSecondCard.value = false;
    hasInsurances.value = false;
    errorAPIMessage.value = null;
  }
  
  return {
    cards,
    loading,
    hasSecondCard,
    hasInsurances,
    errorAPIMessage,
    applyForInsurance,
    applyForSecondCard,
    getAllCards,
    resetStore,
  };
});
