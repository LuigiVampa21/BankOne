<template>
  <ion-page>
    <base-layout :title="'Settings'" :loading="loading" :backLink="'/home'">
      <ion-grid>
        <ion-row class="ion-justidy-content-center settings-container" v-if="!showUpdateAccountComponent">
          <SettingCard :data="SettingsAccount" @click="toggleAccountComponent"/>
          <SettingCard :data="SettingsPrivacy" />
          <SettingCard :data="SettingsLogOut" @click="logout"/>
          <SettingCard :data="SettingsCloseAccount" @click="showModal = !showModal"/>
        </ion-row>
      </ion-grid>

      <AccountUpdate 
        v-if="showUpdateAccountComponent" 
        @emitReturn="toggleAccountComponent"
        @emitUpdate="credEmitted"  
      />

      <ion-modal ref="modal" :is-open="showModal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons class="ion-justify-content-start">
            <ion-button @click="showModal = !showModal" color="light">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Close your account</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
          <ion-text class="pos-down5" color="medium">
            Press the confirm button to delete your account. <br>
            You will then receive an email with further steps to intend the complete removal of your account.
          </ion-text>
          <ion-row class="ion-justify-content-center">
            <ion-button class="custom pos-down10" @click="closeAccount" color="tertiary">Confirm</ion-button>
          </ion-row>
        </ion-content>
    </ion-modal>
    </base-layout>
  </ion-page>
</template>

<script>
import SettingCard from "@/components/settings/SettingCard.vue";
import AccountUpdate from "../components/settings/account-settings/AccountUpdate.vue";
import SettingsAccount from "../utils/settings/account";
import SettingsCloseAccount from "../utils/settings/closeAccount";
import SettingsLogOut from "../utils/settings/logout";
import SettingsPrivacy from "../utils/settings/privacy";
import { IonGrid, IonRow, IonPage, IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, 
  IonText, toastController } from "@ionic/vue";
import { useAuthStore } from "../stores/auth";
import {useSettingStore} from '../stores/settings'
import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    SettingCard,
    IonPage,
    IonGrid,
    IonRow,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonText,
    AccountUpdate,
  },
  setup() {
    const authStore = useAuthStore();
    const settingStore = useSettingStore();
    const {APImessage, loading} = storeToRefs(settingStore)
    const showModal = ref(false);
    const showUpdateAccountComponent = ref(false);
    const logout = async() => {
      await authStore.handleLogout()
    }
    const closeAccount = async() => {
      showModal.value = !showModal.value
      const res = await settingStore.deleteAccount();
      if(res){
        await settingsToast(APImessage.value, "success")
      }else{
        await settingsToast(APImessage.value, "danger")
      }
    } 
    const credEmitted = async cred => {
      const res = await settingStore.updateAccount(cred);
      if(res){
        await settingsToast(APImessage.value, "success")
        toggleAccountComponent()
      }else{
        await settingsToast(APImessage.value, "danger")
      }
    }
    const settingsToast = async(message, color) => {
      const toast = await toastController.create({
        message,
        duration: 2500,
        position: "top",
        color,
      })
      await toast.present()
    } 
    const toggleAccountComponent = () => {
      showUpdateAccountComponent.value = !showUpdateAccountComponent.value;
    }
    return {
      SettingsAccount,
      SettingsCloseAccount,
      SettingsLogOut,
      SettingsPrivacy,
      showModal,
      showUpdateAccountComponent,
      loading,
      toggleAccountComponent,
      logout,
      closeAccount,
      credEmitted,
    };
  },
});
</script>

<style scoped>
.settings-container {
  position: relative;
  top: 5vh;
}
</style>
