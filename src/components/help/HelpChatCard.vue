<template>
  <ion-card
    class="ion-padding"
    :style="
      chat.by === 'user'
        ? { backgroundColor: 'var(--ion-color-tertiary-shade)' }
        : { backgroundColor: 'var(--ion-color-medium)' }
    "
  >
    <ion-row>
      <img
        class="avatar"
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
      />
      <ion-label
        :style="
          chat.by === 'user'
            ? { backgroundColor: 'var(--ion-color-tertiary-shade)' }
            : { backgroundColor: 'var(--ion-color-medium)' }
        "
      >
        <ion-text class="msg-content ion-padding ion-text-capitalize">
          {{ chat.by }}
        </ion-text>
      </ion-label>
    </ion-row>
    <ion-row class="ion-padding msg-content">{{ chat.content }}</ion-row>
  </ion-card>
  <ion-row
    class="ion-margin msg-content date"
    :class="
      chat.by === 'user'
        ? 'ion-justify-content-end'
        : 'ion-justify-content-start'
    "
  >
    <ion-text color="medium">
      {{ new Date(chat.date).toLocaleDateString() }}
    </ion-text>
  </ion-row>
</template>

<script>
export default {
  props: ["chat"],
  setup() {},
};
</script>

<style>
.avatar {
  width: 30px;
  border-radius: 50%;
}
.msg-content {
  color: white;
}
.date {
  font-size: 11px;
}
</style>
