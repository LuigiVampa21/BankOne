import { ref } from "vue";
import { defineStore } from "pinia";
import { Storage } from "@ionic/storage";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  let currentUser = ref(null);
  let currentToken = ref("");
  let registerSuccess = ref(false);
  let loading = ref(false);
  let loadingUser = ref(false);
  let errorAPIMessage = ref("");

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
      const { user, token } = response.data;
      currentUser.value = user;
      currentToken.value = token;
      await setUserToStorage("token", currentToken);
      await setUserToStorage("userID", currentUser.value.id);
      //   await setUserToStorage("userID", user.id);

      loading.value = false;
    } catch (err) {
      errorAPIMessage.value = err;
      loading.value = false;
    }
  };

  const handleRegister = async credentials => {
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
      //  const response = await axios.post(
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
      console.log(err.response.data.message);
      errorAPIMessage.value = err.response.data.message;
      loading.value = false;
    }
  };

  const HandleLogout = async () => {};

  const getUser = async () => {
    loadingUser.value = true;
    const id = await getUserFromStorage("userID");
    // maybe add headers with token and authMiddleware into getSingle user server side
    const response = await axios.get(
      process.env.VUE_APP_ROOT_API + "/users/" + id
    );
    currentUser.value = response.user;
    console.log(currentUser.value);
  };

  const setUserToStorage = async (key, value) => {
    await ionicStorage.set(key, value);
  };
  const getUserFromStorage = async key => {
    const dataStorage = await ionicStorage.get(key);
    return dataStorage;
  };

  return {
    currentUser,
    currentToken,
    loading,
    loadingUser,
    registerSuccess,
    errorAPIMessage,
    // setUserToStorage,
    getUserFromStorage,
    handleLogin,
    handleRegister,
    HandleLogout,
    getUser,
  };
});
