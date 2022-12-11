import {ref} from 'vue'
import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', () => {
    let currentUser = ref(null);
    let loading = ref(false);
    let errorAPIMessage = ref('');
    // let isAuth = ref(false);

    const handleLogin = async credentials => {
        loading.value = true;
        try{
            const {email, password} = credentials 
            const response = await axios.post(process.env.VUE_APP_ROOT_API + "/auth/login", {
              email,
              password
            })
            const {user, token} = response.data
            console.log(user, token);
            // if(user && token){
            //     isAuth.value = true
            // }
            currentUser.value = user;
            console.log(currentUser);
            loading.value = false;
        }catch(err){
            errorAPIMessage.value = err
            loading.value = false;
        }
    }
    return{
        currentUser,
        loading,
        errorAPIMessage,
        // isAuth,
        handleLogin,
    }
})