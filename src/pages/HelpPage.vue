<template>
  <ion-page>
    <base-layout :title="'Help Center'" :backLink="'/home'">
      <ion-row class="ion-justify-content-center ion-align-items-center header">
        <h4>Jonas</h4>
        <ion-icon class="ion-margin" :icon="chatbox"></ion-icon>
      </ion-row>
      <ion-row>
        <div class="chat-box" v-for="chat in chatHelp.chatBox" :key="chat.date">
          <HelpChatCard :chat="chat" />
        </div>
      </ion-row>
    </base-layout>
  </ion-page>
</template>

<script>
import HelpChatCard from "../components/help/HelpChatCard.vue";
import chatHelp from "../utils/help/chatHelp";
import { chatbox } from "ionicons/icons";
import { IonRow, IonIcon, IonPage } from "@ionic/vue";

export default {
  components: {
    HelpChatCard,
    IonPage,
    IonRow,
    IonIcon,
  },
  setup() {
    return {
      chatbox,
      chatHelp,
    };
  },
};
</script>

<style scoped>
ion-row {
  border-bottom: 0.5px solid var(--ion-color-secondary);
}
h4 {
  color: var(--ion-color-light);
}

.header {
  margin-top: -2.5vh;
}

.chat-box {
  width: 90vw;
}
</style>
