import { ref } from "vue";
import { defineStore } from "pinia";
import { Storage } from "@ionic/storage";
// import { Router } from "@ionic/router";
// import { Router } from "@ionic/vue-router";
import { useRouter } from "vue-router";
import axios from "axios";


export const useAuthStore = defineStore("auth", () => {

  const router = useRouter();
  let currentUser = ref(null);
  let currentToken = ref("");
  //   isAuth = testing purposes => after prod just use if(currentUser.value !== null)
  let isAuth = ref(false);
  let registerSuccess = ref(false);
  let loading = ref(false);
  let loadingUser = ref(false);
  let errorAPIMessage = ref("");
  let expirationTokenMilliSec = ref(0);
  let expirationTime = ref(null);
  let tokenTimer = ref(null);

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
      };
      // console.log(expiry);
      expirationTokenMilliSec.value = expiry * 1000;
      expirationTime.value = new Date(new Date().getTime() + expirationTokenMilliSec.value).getTime();
      console.log(expirationTime.value)
      currentToken.value = token;
      isAuth.value = true;
      await setToStorage("token", token);
      await setToStorage("userID", user.id);
      await setToStorage("tokenExpiration", expirationTime.value)
      authTimer(expirationTokenMilliSec.value)
      loading.value = false;
    } catch (err) {
      errorAPIMessage.value = err;
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

  const handleLogout = async () => {
    loading.value = true;
    currentToken.value = await getFromStorage("token");
    await axios.get(process.env.VUE_APP_ROOT_API + '/auth/logout', {
      headers: {
        authorization: `Bearer ${currentToken.value}`,
      },
    })
    currentUser.value = null;
    currentToken.value = "";
    isAuth.value = false;
    expirationTokenMilliSec.value = 0;
    removeFromStorage("token");
    removeFromStorage("userID");
    removeFromStorage("tokenExpiration");
    clearAuthTimer();
    router.push('/login');
    loading.value = false;
    loadingUser.value = false;
  };

  const getUser = async () => {
    loadingUser.value = true;
    if(!isTokenValid(new Date().getTime())){
      handleLogout();
      return;
    }
    const id = await getFromStorage("userID");
    // maybe add headers with token and authMiddleware into getSingle user server side
    try{

      const response = await axios.get(
        process.env.VUE_APP_ROOT_API + "/users/" + id
        );
        const { user } = response.data;
        currentUser.value = {
          username: user.first_name,
          id: user.id,
        };
        if (currentUser.value.id) {
          isAuth.value = true;
        }
        loadingUser.value = false;
      }catch(err){
        console.error(err);
        loadingUser = false;
      }finally{
        loadingUser = false;
      }
  };

  const authTimer = (duration) => {
    tokenTimer.value = setTimeout(() => {
      handleLogout()
    }, duration)
  }

  const isTokenValid = async(now) => {
    const expiryToken = await getFromStorage('tokenExpiration')
    // console.log(expiryToken);
    // console.log(now);
    const isValid = expiryToken > now;
    // console.log(isValid);
    return isValid;
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

  return {
    currentUser,
    currentToken,
    loading,
    loadingUser,
    registerSuccess,
    errorAPIMessage,
    isAuth,
    expirationTokenMilliSec,
    setToStorage,
    getFromStorage,
    handleLogin,
    handleRegister,
    handleLogout,
    getUser,
  };
});
