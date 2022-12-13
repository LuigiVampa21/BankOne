import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useTxStore = defineStore("tx", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let transactions = ref(null);
  let loading = ref(false);

  const getAllTxs = async () => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/transactions/user",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
        }
        );
        console.log(response.data);
        const { allTxs } = response.data;
        transactions.value = allTxs;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  return {
    transactions,
    loading,
    getAllTxs,
  };
});
