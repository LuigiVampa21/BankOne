import { ref } from "vue";
import { defineStore } from "pinia";
// import { Storage } from "@ionic/storage";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useOverviewStore = defineStore("overview", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let bankAccounts = ref(null);
  let siblings = ref(null);
  let allTxs = ref(null);
  let lastTX = ref(null);
  let loading = ref(false);
  let beneficiary = ref('');

  const getOverview = async () => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/users/overview",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
        }
        );
        const { accounts, lastTx, beneficiaryName, knownAccounts } = response.data;
        bankAccounts.value = accounts;
        lastTX.value = lastTx;
        beneficiary.value = beneficiaryName;
        siblings.value = knownAccounts
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  // maybe stock id of accounts into storage that would avoid that make request every time user wants to reload to another component

  // const ionicOverviewStorage = new Storage();
  // ionicOverviewStorage.create();

  return {
    bankAccounts,
    allTxs,
    lastTX,
    loading,
    siblings,
    beneficiary,
    getOverview,
  };
});
