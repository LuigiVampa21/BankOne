import {ref} from 'vue'
import {defineStore} from "pinia";
import { Storage } from '@ionic/storage';
import axios from "axios";

export const useAuthStore = defineStore('auth', () => {
    let currentUser = ref(null);
    let currentToken = ref('');
    let registerSuccess = ref(false);
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
            await setUserToStorage(currentToken);
            loading.value = false;
        }catch(err){
            errorAPIMessage.value = err
            loading.value = false;
        }
    }
    
    const handleRegister = async credentials => {
        const { birthDate, confirmPassword, email, firstName, lastName, password, phone } = credentials;
        try{
        //  const response = await axios.post(
         await axios.post(
                process.env.VUE_APP_ROOT_API + "/auth/register",
                {
                    firstName: firstName.toLowerCase(),
                    lastName: lastName.toLowerCase(),
                    phone,
                    birthDate,
                    confirmPassword,
                    email,
                    password,
                });
                registerSuccess.value=true
                loading.value = false;
            } catch(err){
                console.log(err.response.data.message);
                errorAPIMessage.value = err.response.data.message
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

    return{
        currentUser,
        currentToken,
        loading,
        loadingUser,
        registerSuccess,
        errorAPIMessage,
        // setUserToStorage,
        getUserFromStorage,
        handleLogin,
        handleRegister
        // getUser,
    }
})