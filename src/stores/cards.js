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
          hasSecondCard.value= false
        }
        cards.value = card;
        loading.value = false;
        // console.log(card);
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
    getAllCards,
  };
});
