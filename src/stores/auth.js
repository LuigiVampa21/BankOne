import { ref } from "vue";
import { defineStore } from "pinia";
import { Storage } from "@ionic/storage";

import {useAssetsStore} from "./assets"
import {useCardStore} from "./cards"
import {useDocsStore} from "./documents"
import {useLoanStore} from "./loans"
import {useOverviewStore} from "./overview"
import {useTxStore} from "./transactions"
import {useWalletStore} from "./wallets"
import {useSettingStore} from "./settings";

import router from '../router'
import axios from "axios";


export const useAuthStore = defineStore("auth", () => {

const allowedPath = ["/login", "/register", "/404", "/reset-password"];
const assetsStore = useAssetsStore();
const cardStore = useCardStore();
const docsStore = useDocsStore();
const loanStore = useLoanStore();
const overviewStore = useOverviewStore();
const txStore = useTxStore();
const walletStore = useWalletStore();
const settingStore = useSettingStore()

const storesArray = [assetsStore, cardStore, docsStore, loanStore, overviewStore, txStore, walletStore, settingStore]

  let currentUser = ref(null);
  let currentToken = ref("");
  let isAuth = ref(false);
  let registerSuccess = ref(false);
  let loading = ref(false);
  let loadingUser = ref(false);
  let errorAPIMessage = ref("");
  let responseAPIMessage = ref("")
  let expirationTokenMilliSec = ref(0);
  let expirationTime = ref(null);
  let tokenTimer = ref(null);
  let showLogoutToastr = ref(false);
  let logoutMsg = ref("");

  const ionicStorage = new Storage();
  ionicStorage.create();

  const handleLogin = async credentials => {
    loading.value = true;
    try {
      const { email, password } = credentials;
      const response = await axios.post(
        process.env.VUE_APP_ROOT_API + "/auth/login",
        {
          email,
          password,
        }
      );
      const { user, token, expiry } = response.data;
      currentUser.value = {
        username: user.first_name,
        id: user.id,
        currency: user.currency
      };
      expirationTokenMilliSec.value = expiry * 1000;
      expirationTime.value = new Date(new Date().getTime() + expirationTokenMilliSec.value).getTime();
      currentToken.value = token;
      isAuth.value = true;
      await setToStorage("token", token);
      await setToStorage("userID", user.id);
      await setToStorage("tokenExpiration", expirationTime.value)
      authTimer(expirationTokenMilliSec.value)
      await overviewStore.getOverview();
      loading.value = false;
    } catch (err) {
      errorAPIMessage.value = err.response.data.message;
      loading.value = false;
    }
  };

  const handleRegister = async credentials => {
    loading.value = true;
    const {
      birthDate,
      confirmPassword,
      email,
      firstName,
      currency,
      lastName,
      password,
      phone,
    } = credentials;
    try {
      await axios.post(process.env.VUE_APP_ROOT_API + "/auth/register", {
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        phone,
        birthDate,
        currency,
        confirmPassword,
        email,
        password,
      });
      registerSuccess.value = true;
      loading.value = false;
    } catch (err) {
      console.log(err);
      errorAPIMessage.value = err.response.data.message;
      loading.value = false;
    }
  };

  const handleLogout = async (reason) => {
    loading.value = true;
    try{
    currentToken.value = await getFromStorage("token");
    await axios.get(process.env.VUE_APP_ROOT_API + '/auth/logout', {
      headers: {
        authorization: `Bearer ${currentToken.value}`,
      },
    })
    removeFromStorage("token");
    removeFromStorage("userID");
    removeFromStorage("tokenExpiration");
    
    setTimeout(() =>{
      showLogoutToastr.value = true;
    },1000)

    if(reason == 'timer'){
      logoutMsg.value = 'Session expired.'
    }else{
      logoutMsg.value = 'Log out successful'
    }

      isAuth.value = false;
      currentUser.value = null;
      currentToken.value = "";
      expirationTokenMilliSec.value = 0;
      clearAuthTimer();
      resetAllStores();
      // storesArray.forEach(store => store.resetStore())
      setTimeout(() => {
        showLogoutToastr.value = false;
        logoutMsg.value = "";
      }, 3500)
    }catch(err){
      console.error(err);
    }finally{
      loading.value = false;
      router.push('/login');
    }
  };

  const getUser = async () => {
    loadingUser.value = true;
    const valid = await isTokenValid(new Date().getTime());
    const validPath = isPathAllowed();
    if(!valid && !validPath){
      handleLogout('timer');
      return;
    }
    const id = await getFromStorage("userID");
    try{
      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/users/" + id
        );
        const { user } = response.data;
        currentUser.value = {
          username: user.first_name,
          id: user.id,
          currency: user.currency
        };
        if (currentUser.value.id) {
          isAuth.value = true;
        }
        loadingUser.value = false;
      }catch(err){
        console.error(err);
        if(!validPath()){
          handleLogout('timer');
        }
        loadingUser.value = false;
      }finally{
        loadingUser.value = false;
      }
  };

  const authTimer = (duration) => {
    tokenTimer.value = setTimeout(() => {
      handleLogout('timer')
    }, +duration - 1000)
  }

  const isTokenValid = async(now) => {
    const expiryToken = await getFromStorage('tokenExpiration')
    const isValid = expiryToken > now;
    return isValid;
  }

  const isPathAllowed = () => {
    const isAllowed = allowedPath.includes(router.currentRoute.value.path);
    return isAllowed;
  }

  const clearAuthTimer = () => {
    clearTimeout(tokenTimer.value)
  }

  const setToStorage = async (key, value) => {
    await ionicStorage.set(key, value);
  };
  const getFromStorage = async key => {
    const dataStorage = await ionicStorage.get(key);
    return dataStorage;
  };
  const removeFromStorage = async key => {
    await ionicStorage.remove(key);
  };

  const forgotPasswordFn = async(email) => {
    loading.value = true;
    try{
      const response = await axios.post(process.env.VUE_APP_ROOT_API + '/auth/forgot-password', {email});
      const {msg} = response.data;
      responseAPIMessage.value = msg;
      return true;
    }catch(err){
      console.error(err);
      responseAPIMessage.value = err.response.data.message;
      return false;
    }finally{
      loading.value = false;
    }
  }

  const resetPwdFn = async(token, email, password) => {
    loading.value = true;
    try{
      const resp = await axios.post(`${process.env.VUE_APP_ROOT_API}/auth/reset-password/?token=${token}&email=${email}`, {password}) 
        const {msg} = resp.data;
        responseAPIMessage.value = msg; 
        return true;
      }catch(err){
        console.error(err);
        responseAPIMessage.value = err.response.data.message; 
        return false;
    }finally{
      loading.value = false;
    }
  }

  const resetAllStores = () => {
    storesArray.forEach(store => store.resetStore());
  } 

  return {
    currentUser,
    currentToken,
    loading,
    loadingUser,
    registerSuccess,
    errorAPIMessage,
    isAuth,
    expirationTokenMilliSec,
    responseAPIMessage,
    logoutMsg,
    showLogoutToastr,
    tokenTimer,
    setToStorage,
    getFromStorage,
    handleLogin,
    handleRegister,
    handleLogout,
    getUser,
    forgotPasswordFn,
    resetPwdFn,
  };
});
