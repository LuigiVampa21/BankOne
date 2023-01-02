<template>
  <ion-page>
    <base-layout :title="'reset password'" :loading="loading">
    <ion-row>
        <ion-card color="secondary" class="ion-padding rst-pwd-container">
            <ion-text class="ion-text-capitalize">
                Please enter your new password
            </ion-text>
            <div class="input-container pos-down5">
                <ion-input class="custom-5 ion-margin-top" type="password" v-model="password" placeholder="New Password"></ion-input>
                    <div class="errorMsg">
                        <ion-text color="danger">{{ errors["password"] }}</ion-text>
                    </div>
                <ion-input class="custom-5 ion-margin-top" type="password" v-model="confirmPassword" placeholder="Confirm New Password"></ion-input>
                    <div class="errorMsg">
                        <ion-text color="danger">{{ errors["confirmPassword"] }}</ion-text>
                    </div>
            </div>
                <ion-row class="ion-justify-content-center">
                    <ion-button class="custom-2 pos-down10" color="tertiary" @click="confirmFn()">Confirm</ion-button>
                </ion-row>
        </ion-card>
    </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
import {IonPage, IonText, IonCard, IonInput, IonRow, toastController, useIonRouter} from '@ionic/vue'
import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup)
import { useField, useFormErrors, useForm } from "vee-validate";

const resetPwdSchema = yup.object({
        password: yup.string()
        .password().minLowercase(5).minUppercase(1).minNumbers(1).minSymbols(1)
        .required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
})

export default defineComponent({
components:{
    IonPage,
    IonText,
    IonCard,
    IonInput,
    IonRow,
},
setup(){
    const authStore = useAuthStore();
    const route = useRoute();
    const ionRouter = useIonRouter();
    const {loading, responseAPIMessage} = storeToRefs(authStore);
    const resetPwdForm = useForm({
      validationSchema: resetPwdSchema,
    });
    const tokenR = ref("");
    const emailR = ref("")
    const { value: password } = useField("password");
    const { value: confirmPassword } = useField("confirmPassword");
    const confirmFn = async() => {
        console.log('hii');
        const resp = await resetPwdForm.validate();
        console.log(resp);
        if(!resp.valid) return;
        const res = await authStore.resetPwdFn(tokenR.value, emailR.value, password.value);
        if(res){
            await resetPwdToast("success");
            navigateToLoginPage();
        }else{
            await resetPwdToast("danger")
        }
    }
    const resetPwdToast = async(color) => {
      const toast = await toastController.create({
        message: responseAPIMessage.value,
        duration: 2500,
        position: "top",
        color,
      })
      await toast.present()
    } 
    const navigateToLoginPage = () => {
      ionRouter.navigate('/login', 'backward', 'replace')
    }
    onMounted(() => {
        const {token, email} = route.query;
        tokenR.value = token;
        emailR.value = email;
    })
    return{
        loading,
        responseAPIMessage,
        password,
        confirmPassword,
        errors: useFormErrors(),
        confirmFn,
    }
}
})
</script>

<style scoped>

.rst-pwd-container{
    height: 40vh;
}

</style>