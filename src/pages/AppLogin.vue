<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-row class="ion-justify-content-end">
          <ion-buttons class="ion-margin" router-link="/register">
            Sign up
          </ion-buttons>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row
          class="container ion-justify-content-center ion-align-items-center"
        >
          <ion-card class="auth-card">
            <ion-card-header class="auth-headers">
              <ion-card-title
                color="light"
                class="ion-text-center ion-margin-bottom"
              >
                <h1>Bank One</h1></ion-card-title
              >
              <ion-card-subtitle
                color="light-tint"
                class="ion-text-capitalize ion-text-center ion-margin-bottom"
              >
                <h2>Login to your account</h2>
              </ion-card-subtitle>
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
import { defineComponent } from "vue";
import axios from "axios";
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
  },
  setup(){
    const loginForm = useForm({
      validationSchema: credentialsComponentSchema,
    });
    const sendLogin = async() => {
      try{
        const resp = await loginForm.validate();
        if(!resp.valid) return;
        const { email, password } = loginForm.values.credentials
        const response = await axios.post(process.env.VUE_APP_ROOT_API + "/auth/login", {
          email,
          password
        })
        console.log(response);
      }catch(err){
        console.error(err);
      }
    }
    const { value: email } = useField("credentials.email");
    const { value: password } = useField("credentials.password");
    return{
      email,
      password,
      errors: useFormErrors(),
      sendLogin,
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
  width: 90vw;
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

.errorMsg {
  margin-top: -8px;
  margin-bottom: 8px;
}
</style>
