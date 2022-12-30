<template>
   <form>
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-margin-bottom">

                <ion-text class="ion-text-capitalize" color="light">
                    <h4>
                        update your credentials
                    </h4>
                </ion-text>
            </ion-row>
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
                      <ion-text v-if="lastName" color="danger">{{
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
                    <div class="errorMsg">
                      <ion-text v-if="firstName" color="danger">{{
                      errors["credentials.firstName"]
                      }}</ion-text>
                    </div>  
                <ion-input
                      v-model="email"
                      class="custom ion-margin-bottom"
                      type="text"
                      name="credentials.email"
                      placeholder="Email"
                      :clear-on-edit="true"
                ></ion-input>
                    <div class="errorMsg">
                      <ion-text v-if="email" color="danger">{{
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
                      <ion-text v-if="phone" color="danger">{{
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
                      <ion-text v-if="password" color="danger">{{
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
                      <ion-text v-if="confirmPassword" color="danger">{{
                      errors["credentials.confirmPassword"]
                      }}</ion-text>
                    </div>
            </div>
        </ion-grid>
        <ion-row class="ion-justify-content-between ion-margin-top">
            <ion-button type="button" class="custom-3 ion-text-capitalize" color="secondary" @click="returnFn">return</ion-button>
            <ion-button type="button" class="custom-3 ion-text-capitalize" color="secondary" @click="resetFn">reset</ion-button>
            <ion-button class="custom-3 ion-text-capitalize" color="tertiary" @click="updateFn">update</ion-button>
        </ion-row>

    </form>
</template>

<script>
import { defineComponent } from "vue";
import {IonGrid, IonInput, IonText, IonRow, IonButton,} from "@ionic/vue";
import * as yup from "yup";
import { useField, 
    useFormErrors, 
    useForm } from "vee-validate";

const phoneRegex = RegExp(/^(\\+33|0|0033)[1-9][0-9]{8}$/);

const updateAccountComponentSchema = yup
  .object({
    credentials: yup.object({
      lastName: yup.string().min(1, "Last Name too short").max(50, "Last Name too long"),
      firstName: yup.string().min(3, "First Name too short").max(50, "First Name too long"),
      email: yup.string().email("Invalid Email"),
      phone: yup
        .string()
        .matches(phoneRegex, "Invalid phone Number"),
      password: yup.string(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
  })

export default defineComponent({
    components: {
        IonGrid, IonInput, IonText, IonRow, IonButton,
    },
    setup(props, {emit}){
        const updateAccountForm = useForm({
            validationSchema: updateAccountComponentSchema,
        });
    const { value: lastName } = useField("credentials.lastName");
    const { value: firstName } = useField("credentials.firstName");
    const { value: email } = useField("credentials.email");
    const { value: phone } = useField("credentials.phone");
    const { value: password } = useField("credentials.password");
    const { value: confirmPassword } = useField("credentials.confirmPassword");

    const clearCredentials = () => {
      updateAccountForm.values.credentials.firstName = "";
      updateAccountForm.values.credentials.lastName = "";
      updateAccountForm.values.credentials.phone = "";
      updateAccountForm.values.credentials.email = "";
      updateAccountForm.values.credentials.password = "";
      updateAccountForm.values.credentials.confirmPassword = "";
    }

    const returnFn = () => {
        clearCredentials();
        emit('emitReturn')
    }
    const resetFn = () => {
        clearCredentials()
    }
    const updateFn = async() => {
        const resp = await updateAccountForm.validate();
        if(!resp.valid) return;
        const cred = updateAccountForm.values.credentials;
        emit('emitUpdate', cred);
    }
        return{
            lastName,
            firstName,
            email,
            phone,
            password,
            confirmPassword,
            updateAccountForm,
            errors: useFormErrors(),
            returnFn,
            resetFn,
            updateFn,
        }
    }
})
</script>

<style scoped>
form{
    width: 95vw;
    margin: auto;
}
.errorMsg {
  margin-top: -8px;
  margin-bottom: 8px;
}
.name-errors-container > * {
  width: 50vw;
}
</style>