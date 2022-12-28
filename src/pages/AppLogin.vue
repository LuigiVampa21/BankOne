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
                      <ion-text color="tertiary"> Forgot Password? </ion-text>
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
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onUnmounted } from "vue";
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
  toastController
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
  },
  setup(){
    const loginForm = useForm({
      validationSchema: credentialsComponentSchema,
    });
    const ionRouter = useIonRouter();
    const authStore = useAuthStore();
    const {currentUser, errorAPIMessage,
       loading
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
          // clearCredentials()
          //clear error messages
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
      const toast = await toastController.create({
        message: errorAPIMessage.value,
        duration: 2500,
        position: "top",
        color: 'danger',
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
      errors: useFormErrors(),
      sendLogin,
      loading
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
</style>
