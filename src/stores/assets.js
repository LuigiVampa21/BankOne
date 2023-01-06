import { ref } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useAssetsStore = defineStore("assets", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let loading = ref(false);
  let assets = ref(null)

  const getAssets = async () => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/assets",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
        }
        );
        assets.value = response.data.assets;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  const resetStore = () => {
    token.value = "";
    loading.value = false;
    assets.value = null
  }

// maybe store assets directly into ionic storage and then only change the price when it is being updated

  return {
    getAssets,
    loading,
    assets,
    resetStore,
  };
});
