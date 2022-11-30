<template>
  <ion-page>
    <base-layout :title="'Settings'" :backLink="'/home'">
      <ion-grid>
        <ion-row class="ion-justidy-content-center settings-container">
          <SettingCard :data="SettingsAccount" />
          <SettingCard :data="SettingsPrivacy" />
          <SettingCard :data="SettingsLogOut" />
          <SettingCard :data="SettingsCloseAccount" />
        </ion-row>
      </ion-grid>
    </base-layout>
  </ion-page>
</template>

<script>
import SettingCard from "@/components/settings/SettingCard.vue";

import SettingsAccount from "../utils/settings/account";
import SettingsCloseAccount from "../utils/settings/closeAccount";
import SettingsLogOut from "../utils/settings/logout";
import SettingsPrivacy from "../utils/settings/privacy";
import { IonGrid, IonRow, IonPage } from "@ionic/vue";

export default {
  components: {
    SettingCard,
    IonPage,
    IonGrid,
    IonRow,
  },
  setup() {
    return {
      SettingsAccount,
      SettingsCloseAccount,
      SettingsLogOut,
      SettingsPrivacy,
    };
  },
};
</script>

<style>
.settings-container {
  position: relative;
  top: 5vh;
}
</style>
