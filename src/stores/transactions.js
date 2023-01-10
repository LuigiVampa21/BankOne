import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useTxStore = defineStore("tx", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let transactions = ref(null);
  let loading = ref(false);

  let message = ref("");
  let color = ref("");

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
        const { allTxs } = response.data;
        transactions.value = allTxs;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  const postNewTX = async obj => {
    try{
    token.value = await authStore.getFromStorage("token");
    await axios.post(process.env.VUE_APP_ROOT_API + "/transactions", obj, {
        headers: {
          authorization: `Bearer ${token.value}`,
        },
      })
      message.value = "Please check your mailbox to approve the transaction";
      color.value = "success";
    }catch(err){
      console.error(err);
      message.value = err.response.data.message;
      color.value = "danger";
    }
  }

  const resetStore = () => {
    token.value = "";
    transactions.value = null;
    loading.value = false;
  
    message.value = "";
    color.value = "";
  }

  return {
    transactions,
    loading,

    message,
    color,

    getAllTxs,
    postNewTX,
    resetStore,
  };
});
