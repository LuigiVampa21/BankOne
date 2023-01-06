<template>
  <ion-page class="conntainer">
    <ion-header>
      <ion-toolbar>
        <ion-row class="ion-justify-content-end">
          <ion-buttons class="ion-margin" router-link="/register">
            Sign up
          </ion-buttons>
        </ion-row>
        <ion-progress-bar v-if="loading" type="indeterminate" color="success"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row
          class="container ion-justify-content-center ion-align-items-center"
        >
          <ion-card class="auth-card">
            <ion-card-header class="auth-headers">
              <ion-row class="ion-justify-content-center mbl32">
                <ion-card-title
                color="light"
                class="ion-text-center ion-margin-bottom"
                >
                <h1>Bank One</h1></ion-card-title
                >
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-card-subtitle
                color="light-tint"
                class="ion-text-capitalize ion-text-center ion-margin-bottom"
                >
                <h2>Login to your account</h2>
              </ion-card-subtitle>
            </ion-row>
            </ion-card-header>

            <ion-card-content>
              <form>
                <ion-input
                v-model="email"
                  class="custom ion-margin-bottom"
                  type="email"
                  name="credentials.email"
                  placeholder="Email"
                  :clear-on-edit="true"
                ></ion-input>
                <div class="errorMsg">
                      <ion-text color="danger">{{
                        errors["credentials.email"]
                      }}</ion-text>
                    </div>
                <ion-input
                v-model="password"
                  class="custom ion-margin-bottom"
                  type="password"
                  name="credentials.password"
                  placeholder="Password"
                ></ion-input>
                <div class="errorMsg">
                      <ion-text color="danger">{{
                        errors["credentials.password"]
                      }}</ion-text>
                    </div>
                <ion-button
                  class="custom ion-margin-bottom"
                  type="button"
                  color="tertiary"
                  expand="block"
                  @click.prevent="sendLogin"
                  >Sign in</ion-button
                >
              </form>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <div class="ion-text-center">
                      <ion-text color="tertiary" @click="showModal = !showModal"> Forgot Password? </ion-text>
                    </div>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <div class="ion-text-center">
                      <ion-text>
                        <h6>2022 © Bank One Inc.</h6>
                      </ion-text>
                    </div>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-row>
      </ion-grid>

      <ion-modal ref="modal" :is-open="showModal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons class="ion-justify-content-start">
            <ion-button color="tertiary" @click="cancel">Cancel</ion-button>
          </ion-buttons>
          <ion-title class="ion-text-capitalize">forgot password</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content color="primary" class="ion-padding">
          <ion-row color="primary" class="pos-down10 input-container-modal">
            <ion-text>Please enter the email linked to your account</ion-text>
            <ion-input type="email" class="custom-3 ion-padding" v-model="emailInput" placeholder="Email"></ion-input>
            <div class="errorMsg forgot-container-error" v-if="showForgotError">
              <ion-text color="danger">Invalid email format</ion-text>
            </div>
            <ion-button type="button" class="custom-1" color="tertiary" @click="confirm()">Confirm</ion-button>
          </ion-row>
      </ion-content>
    </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onUnmounted, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { storeToRefs } from "pinia";
import * as yup from "yup";
import { useField, useFormErrors, useForm } from "vee-validate";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonHeader,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
  useIonRouter,
  IonProgressBar,
  toastController,
  IonModal,
  IonTitle,
} from "@ionic/vue";

const credentialsComponentSchema = yup
  .object({
    credentials: yup.object({
      email: yup.string().required("Email required").email("Invalid Email"),
      password: yup.string().required("Password required"),
  })
})
  .required();


export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonButtons,
    IonHeader,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonText,
    IonCol,
    IonProgressBar, 
    IonModal,
    IonTitle,
  },
  setup(){
    const loginForm = useForm({
      validationSchema: credentialsComponentSchema,
    });
    const showModal = ref(false);
    const emailInput = ref("");
    const showForgotError = ref(false);
    const ionRouter = useIonRouter();
    const authStore = useAuthStore();
    const {currentUser, errorAPIMessage,
       loading, responseAPIMessage, 
    } = storeToRefs(authStore)
    const sendLogin = async() => {
      try{
        const resp = await loginForm.validate();
        if(!resp.valid) return;
        await authStore.handleLogin(loginForm.values.credentials)
        if(!currentUser.value){
          loginToastFail()
          return
        }
          navigateToHomePage()
      }catch(err){
        console.error(err);
      }
    }
    const clearCredentials = () => {
      loginForm.values.credentials.email = "";
      loginForm.values.credentials.password = "";
    }
    const navigateToHomePage = () => {
      ionRouter.navigate('/home', 'forward', 'replace')
    }
    const loginToastFail = async() => {
      await loginToast(errorAPIMessage.value, 'danger')
      // const toast = await toastController.create({
      //   message: errorAPIMessage.value,
      //   duration: 2500,
      //   position: "top",
      //   color: 'danger',
      // })
      // await toast.present()
    } 
    const confirm = () => {
      if(validateEmail(emailInput.value) === null || !emailInput.value){
        showForgotError.value = true;
        setTimeout(() => {
            showForgotError.value = false;
          }, 2000)
        }else{
          showForgotError.value = false;
          sendFgtEmail();
      }
    }
    const cancel = () =>{
      showModal.value = !showModal.value;
      emailInput.value = ""
    }
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const sendFgtEmail = async() => {
  const res = await authStore.forgotPasswordFn(emailInput.value);
  if(res){
    await loginToast(responseAPIMessage.value, 'success')
    showModal.value = false;
    emailInput.value = ""
  }else{
    await loginToast(responseAPIMessage.value, 'danger')
  }
}
const loginToast = async(message, color) => {
      const toast = await toastController.create({
        message,
        duration: 2500,
        position: "top",
        color,
      })
      await toast.present()
    } 
    onUnmounted(() => {
      clearCredentials()
    })
    const { value: email } = useField("credentials.email");
    const { value: password } = useField("credentials.password");
    return{
      email,
      password,
      loading,
      showModal,
      emailInput,
      showForgotError,
      errors: useFormErrors(),
      sendLogin,
      confirm,
      cancel,
    }
  }
});
</script>

<style scoped>
.auth-card {
  background: var(--ion-color-primary);
  color: var(--ion-color-white);
  width: 90vw;
  min-height: 40vh;
}
.auth-headers {
  width: 100%;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 13px;
}
h6 {
  font-size: 11px;
  color: var(--ion-color-medium);
}
.container {
  height: 85vh;
}

.mbl32{
  margin-bottom: -32px;
}

.errorMsg {
  margin-top: -8px;
  margin-bottom: 8px;
}

.input-container-modal{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container-modal > *:not(.errorMsg) {
  max-width: 80vw;
  margin: 20px 0 20px
}

.custom-3{
  height: 60px;
}

.forgot-container-error{
  align-self: start;
  margin-left: 32px;
}
</style>
