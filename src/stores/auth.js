import {ref} from 'vue'
import {defineStore} from "pinia";
import { Storage } from '@ionic/storage';
import axios from "axios";

export const useAuthStore = defineStore('auth', () => {
    let currentUser = ref(null);
    let currentToken = ref('')
    let loading = ref(false);
    let loadingUser = ref(false);
    let errorAPIMessage = ref('');

    const ionicStorage = new Storage();
ionicStorage.create();

    const handleLogin = async credentials => {
        loading.value = true;
        try{
            const {email, password} = credentials 
            const response = await axios.post(process.env.VUE_APP_ROOT_API + "/auth/login", {
              email,
              password
            })
            const {user, token} = response.data       
            currentUser.value = user;
            currentToken = token;

            // await ionicStorage.setLocalStorage('user', {userID: user.id, username: user.first_name})
            // await ionicStorage.setLocalStorage('token', token)
            await setUserToStorage(currentToken);
            loading.value = false;
        }catch(err){
            errorAPIMessage.value = err
            loading.value = false;
        }
    }

    const setUserToStorage = async (token) => {
        await ionicStorage.set('token', token)
    }
    const getUserFromStorage = async () => {
       const tokenStorage = await ionicStorage.get('token');
       return tokenStorage;
    }

    // const getUser = async () => {
    //     loadingUser.value = true;
    //     const userStorage = await ionicStorage.getLocalStorage('token');
    //     loadingUser.value = false;
    // }

    return{
        currentUser,
        currentToken,
        loading,
        loadingUser,
        errorAPIMessage,
        // setUserToStorage,
        getUserFromStorage,
        handleLogin,
        // getUser,
    }
})