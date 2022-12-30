import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useSettingStore = defineStore("setting", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let id = ref("");
  let APImessage = ref("");
  let loading = ref(false);

  const deleteAccount = async () => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      id.value = await authStore.getFromStorage("userID");
      const response = await axios.delete(
        process.env.VUE_APP_ROOT_API + "/users/" + id.value,
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          }
        }
        );
        console.log(response.data);
        const { msg } = response.data;
        APImessage.value = msg;
        loading.value = false;
        return true;
    } catch (err) {
        console.error(err.response.data);
        APImessage.value = err.response.data.message;
        loading.value = false;
        return false;
    } finally {
        loading.value = false;
    }
  };

  const updateAccount = async credObj => {
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      id.value = await authStore.getFromStorage("userID");
      const response = await axios.patch(
        process.env.VUE_APP_ROOT_API + "/users/" + id.value, credObj,
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          }
        }
        );
        console.log(response.data);
        const { msg } = response.data;
        APImessage.value = msg;
        loading.value = false;
        return true;
    } catch (err) {
        console.error(err.response.data);
        APImessage.value = err.response.data.message;
        loading.value = false;
        return false;
    } finally {
        loading.value = false;
    }
  }
  const resetStore = () => {
    token.value = "";
    id.value = "";
    loading.value = false;
  }
  return {
    loading,
    APImessage,
    deleteAccount,
    resetStore,
    updateAccount,
  };
});
