import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useCardStore = defineStore("card", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let cards = ref(null);
  let loading = ref(false);

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
        // console.log(card);
        cards.value = card;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  return {
    cards,
    loading,
    getAllCards,
  };
});
