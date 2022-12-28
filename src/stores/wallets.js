import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useWalletStore = defineStore("wallet", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let accountsArray = ref(null);
  let accTxs = ref(null);
  let loading = ref(false);

  const getAllAccounts = async () => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/users/accounts",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
        }
        );
        const { accounts } = response.data;
        accountsArray.value = accounts;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  const getAllAccountTxs = async (_type) => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/bank-accounts/txs",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
          params: {
            type: _type
          }
        }
        );
        const { txs, type } = response.data;
        accTxs.value = {type,txs};
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  }

  const resetStore = () => {
    token.value = "";
    accountsArray.value = null;
    accTxs.value = null;
    loading.value = false;
  }

  return {
    accountsArray,
    accTxs,
    loading,
    getAllAccounts,
    getAllAccountTxs,
    resetStore,
  };
});
