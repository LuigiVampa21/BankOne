<template>
  <base-layout :title="'Settings'">
    <ion-grid>
      <ion-row class="ion-justidy-content-center settings-container">
        <SettingCard :data="SettingsAccount" />
        <SettingCard :data="SettingsPrivacy" />
        <SettingCard :data="SettingsLogOut" />
        <SettingCard :data="SettingsCloseAccount" />
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import SettingCard from "@/components/settings/SettingCard.vue";

import SettingsAccount from "../utils/settings/account";
import SettingsCloseAccount from "../utils/settings/closeAccount";
import SettingsLogOut from "../utils/settings/logout";
import SettingsPrivacy from "../utils/settings/privacy";
export default {
  components: {
    SettingCard,
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