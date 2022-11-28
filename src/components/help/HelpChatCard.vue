<template>
  <ion-card color="secondary">
    <ion-row>
      <ion-item color="secondary" class="ion-margin">
        <ion-avatar slot="start">
          <img
            class="avatar"
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </ion-avatar>
        <ion-label>
          <ion-text> {{ chat.by }} </ion-text>
        </ion-label>
      </ion-item>
    </ion-row>
    <ion-row>{{ chat.content }}</ion-row>
    <ion-row>{{ chat.date }}</ion-row>
  </ion-card>
</template>

<script>
export default {
  props: ["chat"],
  created() {
    console.log(this.chat);
  },
};
</script>

<style></style>
