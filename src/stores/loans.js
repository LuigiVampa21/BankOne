import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useLoanStore = defineStore("loan", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let message = ref("");
  let color = ref("");
  let loading = ref(false);

  const postNewLoan = async obj => {
    loading.value = true;
    try{
    token.value = await authStore.getFromStorage("token");
    const response = await axios.post(process.env.VUE_APP_ROOT_API + "/loans", obj, {
        headers: {
          authorization: `Bearer ${token.value}`,
        },
      })
      console.log(response);
      message.value = 'Please check your mailbox to confirm the loan';
      color.value = "success";
    }catch(err){
      console.error(err);
      message.value = err.response.data.message;
      color.value = "danger";
    }finally{
        loading.value = false;
    }
  }
  const resetStore = () => {
    token.value = "";
    message.value = "";
    color.value = "";
    loading.value = false;
  }

  return {
    postNewLoan,
    resetStore,
    loading,
    message,
    color
  };
});
