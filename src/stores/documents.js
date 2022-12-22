import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useDocsStore = defineStore("docs", () => {
  const authStore = useAuthStore();
  let token = ref("");
  let docs = ref(null);
  let loading = ref(false);


//   const serachData = async () => {
//     console.log(queryObj);
//     try {
//       const docs = await axios.get(
//         process.env.VUE_APP_ROOT_API + "/transactions/documents",
//         {
//           params: 
//             queryObj,
//         },
//       );
//       console.log(docs);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  const getDocs = async (queryObj) => {
    console.log(queryObj);
    loading.value = true;
    try {
      token.value = await authStore.getFromStorage("token");
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/transactions/documents",
        {
          headers: {
            authorization: `Bearer ${token.value}`,
          },
          params: queryObj
        }
        );
        console.log(response.data);
        // const { allTxs } = response.data;
        // docs.value = allTxs;
        loading.value = false;
      } catch (err) {
        console.error(err);
        loading.value = false;
    }
  };

  return {
    loading,
    getDocs,
    docs,
  };
});
