<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-row class="ion-justify-content-end">
          <ion-buttons class="ion-margin" router-link="/login">
            Sign in
          </ion-buttons>
        </ion-row>
        <ion-progress-bar v-if="loading" type="indeterminate" color="success"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="template-content">
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
                <h2>Fill out to register</h2>
              </ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              <form>
                <ion-grid>
                  <div>
                    <ion-input
                      v-model="lastName"
                      class="custom ion-margin-bottom"
                      type="text"
                      name="credentials.lastName"
                      placeholder="Last name"
                      :clear-on-edit="true"
                    ></ion-input>
                    <div class="errorMsg">
                      <ion-text color="danger">{{
                        errors["credentials.lastName"]
                      }}</ion-text>
                    </div>
                    <ion-input
                      v-model="firstName"
                      class="custom ion-margin-bottom"
                      type="text"
                      name="credentials.firstName"
                      placeholder="First name"
                      :clear-on-edit="true"
                    ></ion-input>
                  </div>
                  <div class="errorMsg">
                    <ion-text color="danger">{{
                      errors["credentials.firstName"]
                    }}</ion-text>
                  </div>
                  <ion-input
                    v-model="birthDate"
                    class="custom ion-margin-bottom"
                    type="date"
                    name="credentials.birthDate"
                    placeholder="Date of birth"
                    :clear-on-edit="true"
                  ></ion-input>
                  <div class="errorMsg">
                    <ion-text color="danger">{{
                      errors["credentials.birthDate"]
                    }}</ion-text>
                  </div>
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
                    v-model="phone"
                    class="custom ion-margin-bottom"
                    type="tel"
                    name="credentials.phone"
                    placeholder="Phone"
                    :clear-on-edit="true"
                  ></ion-input>
                  <div class="errorMsg">
                    <ion-text color="danger">{{
                      errors["credentials.phone"]
                    }}</ion-text>
                  </div>
                  <ion-input
                    v-model="password"
                    class="custom ion-margin-bottom"
                    type="password"
                    name="credentials.password"
                    placeholder="Password"
                    :clear-on-edit="true"
                  ></ion-input>
                  <div class="errorMsg">
                    <ion-text color="danger">{{
                      errors["credentials.password"]
                    }}</ion-text>
                  </div>
                  <ion-input
                    v-model="confirmPassword"
                    class="custom ion-margin-bottom"
                    type="password"
                    name="credentials.confirmPassword"
                    placeholder="Confirm Password"
                    :clear-on-edit="true"
                  ></ion-input>
                  <div class="errorMsg">
                    <ion-text color="danger">{{
                      errors["credentials.confirmPassword"]
                    }}</ion-text>
                  </div>
                  <ion-item>
                    <ion-checkbox
                      slot="start"
                      name="credentials.tos"
                      :value="false"
                      @ionChange="showCred"
                    ></ion-checkbox>
                    <ion-label>
                      <h3>I agree to the terms and conditions</h3>
                    </ion-label>
                  </ion-item>
                  <ion-text color="danger" v-if="!value && checkboxError">
                    You must accept the terms and conditions
                  </ion-text>

                  <ion-button
                    class="custom ion-margin-bottom ion-margin-top"
                    type="button"
                    color="tertiary"
                    expand="block"
                    @click.prevent="sendRegister"
                    >Sign up</ion-button
                  >
                </ion-grid>
              </form>
              <div class="ion-text-center">
                <ion-text class="ion-text-center" color="light-tint">
                  <h6>2022 © Bank One Inc.</h6>
                </ion-text>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref, onUnmounted } from "vue";
import { useAuthStore } from "../stores/auth";
// Store To Refs is imported for loading here
import { storeToRefs } from "pinia";
import differenceInYears from "date-fns/differenceInYears";
import * as yup from "yup";
import { useField, useFormErrors, useForm } from "vee-validate";
// import notifier from '../utils/notifications/toastr'
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
  IonLabel,
  IonCheckbox,
  IonItem,
  toastController,
  IonProgressBar,
  useIonRouter,
} from "@ionic/vue";

const phoneRegex = RegExp(/^(\\+33|0|0033)[1-9][0-9]{8}$/);

const credentialsComponentSchema = yup
  .object({
    credentials: yup.object({
      lastName: yup.string().required("Last Name required"),
      firstName: yup.string().required("First Name required"),
      birthDate: yup
        .string()
        .required("Birth Date required")
        .test("Birth Date", "You must be adult", value => {
          return differenceInYears(new Date(), new Date(value)) >= 18;
        }),
      email: yup.string().required("Email required").email("Invalid Email"),
      phone: yup
        .string()
        .matches(phoneRegex, "Invalid phone Number")
        .required("Phone required"),
      password: yup.string().required("Password required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
        // DO NOT REMOVE FOR NOW 

      // tos: yup.bool()
        // .default(false)
        // .oneOf([true], "You must accept the terms and conditions")
        // .required("You must accept the terms and conditions")
        // .test('TOS', 'You must accept the terms and conditions', function() {
        //   console.log(this.schema.exclusiveTests)
        //   console.log(this);
        // }),
    }),
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
    IonLabel,
    IonCheckbox,
    IonItem,
    IonProgressBar,
  },
  setup() {
    const registerForm = useForm({
      validationSchema: credentialsComponentSchema,
    });
    const { value: lastName } = useField("credentials.lastName");
    const { value: firstName } = useField("credentials.firstName");
    const { value: birthDate } = useField("credentials.birthDate");
    const { value: email } = useField("credentials.email");
    const { value: phone } = useField("credentials.phone");
    const { value: password } = useField("credentials.password");
    const { value: confirmPassword } = useField("credentials.confirmPassword");
        // DO NOT REMOVE FOR NOW 

    // const { value: tos } = useField("credentials.tos");

    let value = ref(false);
    let checkboxError = ref(false);

    const ionRouter = useIonRouter();
    const authStore = useAuthStore();
    const {registerSuccess, errorAPIMessage, loading
     } = storeToRefs(authStore);

    const sendRegister = async () => {
        const resp = await registerForm.validate();
        if(!resp.valid) return;
        // if (resp.valid) {
          if(!value.value){
        checkboxError.value = true
        return
      }
         await authStore.handleRegister(registerForm.values.credentials)
         if(registerSuccess.value){
           const message = 'Please check your email, to verify your account 😊';
           await registerToast(message, 'success');
           navigateToLoginPage();
          //  clearCredentials();
          }
        // }
        else if(errorAPIMessage.value){
          await registerToast(errorAPIMessage.value, 'danger');
        }
      }
    const clearCredentials = () => {
      registerForm.values.credentials.firstName = "";
      registerForm.values.credentials.lastName = "";
      registerForm.values.credentials.phone = "";
      registerForm.values.credentials.birthDate = "";
      registerForm.values.credentials.confirmPassword = "";
      registerForm.values.credentials.email = "";
      registerForm.values.credentials.password = "";
    }
    const navigateToLoginPage = () => {
      ionRouter.navigate('/login', 'backward', 'replace')
    }

    const showCred = () => {
      value.value = !value.value
      // If we still have time we'll solve this in the end, For now the conditional rendering error message trick will be OK
      // Do not REMOVE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      // console.log(credentialsComponentSchema.fields.credentials.fields.tos.exclusiveTests.TOS);
      // credentialsComponentSchema.fields.credentials.fields.tos.exclusiveTests.required = !credentialsComponentSchema.fields.credentials.fields.tos.exclusiveTests.required
      // console.log(credentialsComponentSchema.fields.credentials.fields.tos.exclusiveTests.required);
      // console.log(credentialsComponentSchema.fields.tos._whitelist);

      // credentialsComponentSchema.fields.credentials.fields.tos.exclusiveTests.TOS = !credentialsComponentSchema.fields.credentials.fields.tos.exclusiveTests.TOS

      // console.log(credentialsComponentSchema.fields.credentials.fields.tos._whitelist.list);
      // credentialsComponentSchema.fields.credentials.fields.tos._whitelist.list = !credentialsComponentSchema.fields.credentials.fields.tos._whitelist.list
      // console.log(credentialsComponentSchema.fields.credentials.fields.tos._whitelist.list);
    }
    const registerToast = async(message, color) => {
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
    return {
      lastName,
      firstName,
      birthDate,
      email,
      phone,
      password,
      confirmPassword,
      registerForm,
      value,
      checkboxError,
      // tos,
      loading,
      errors: useFormErrors(),
      sendRegister,
      showCred
    };
  },
});
</script>

<style scoped>

@media only screen and(min-width: 500px) { 
  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.4);
  }

  *::-webkit-scrollbar {
    width: 0; 
    /* // set the width to 0 and remove the rest to completely hide the scrollbar */
  }

  /* *::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
  }

  *::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  } */
}



.auth-card {
  background: var(--ion-color-primary);
  color: var(--ion-color-white);
  width: 90vw;
  min-height: 40vh;
}
h1 {
  font-size: 40px;
}

h2 {
  font-size: 13px;
}
h3 {
  color: var(--ion-color-medium);
}
h6 {
  font-size: 11px;
  color: var(--ion-color-medium);
}

/* .name-errors-container {
  display: flex;
  justify-content: space-between;
  margin-top: -8px;
} */
.errorMsg {
  margin-top: -8px;
  margin-bottom: 8px;
}
.name-errors-container > * {
  width: 50vw;
}
.auth-footer {
  width: 90vw;
}
.container {
  height: 85vh;
}

ion-checkbox {
  --size: 16px;
  --background: var(--ion-color-light);
  --background-checked: var(--ion-color-secondary);
}
ion-item {
  --background: var(--ion-color-primary);
}
</style>