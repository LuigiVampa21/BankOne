import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import custormCard from "../utils/card/customCard"

export const useCardStore = defineStore("card", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let cards = ref(null);
  let loading = ref(false);
  let hasSecondCard = ref(false);
  let hasInsurances = ref(false);

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
        console.log(card[0]);
        if(card.length > 1){
          hasSecondCard.value = true
        }
        if(card.length === 1){
          card.push(custormCard.secondCard)
          hasSecondCard.value = false
        }
        if(card[0].insurances === true){
          hasInsurances.value = true
          console.log('hasIsurance');
        }
        if(card[0].insurances === false){
          hasInsurances.value = false
          console.log('hasNOTIsurance');
        }
        cards.value = card;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
      }
      loading.value = false;
  };

  return {
    cards,
    loading,
    hasSecondCard,
    hasInsurances,
    getAllCards,
  };
});
