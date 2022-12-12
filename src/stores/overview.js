import { ref } from "vue";
import { defineStore } from "pinia";
// import { Storage } from "@ionic/storage";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useOverviewStore = defineStore("overview", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let bankAccounts = ref(null);
  let allTxs = ref(null);
  let lastTX = ref(null);
  let overviewLoading = ref(false);
  let loading = ref(false);
  // const knownAccounts = ref(null);

  const getOverview = async () => {
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
      const { accounts, lastTransaction } = response.data;
      bankAccounts.value = accounts;
      lastTX.value = lastTransaction;
    } catch (err) {
      console.error(err);
    }
  };

  // const ionicOverviewStorage = new Storage();
  // ionicOverviewStorage.create();

  return {
    bankAccounts,
    allTxs,
    lastTX,
    overviewLoading,
    loading,
    getOverview,
  };
});
