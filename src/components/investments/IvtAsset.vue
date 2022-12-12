<template>
  <ion-row
    class="asset-card-container"
    v-for="asset in assets"
    :key="asset.name"
  >
    <div class="asset ion-margin-start ion-margin-end ion-margin-bottom">
      <ion-avatar>
        <img
          class="avatar"
          alt="Silhouette of a person's head"
          src="https://via.placeholder.com/150C/O https://placeholder.com"
        />
      </ion-avatar>
      <h6 class="asset-title">{{ asset.name }}</h6>
      <h6
        class="asset-oneDayChange"
        :style="
          +asset.oneDayChange > 0
            ? { color: 'var(--ion-color-success)' }
            : { color: 'var(--ion-color-danger)' }
        "
      >
        {{ asset.oneDayChange }} %
      </h6>
    </div>
  </ion-row>
</template>

<script>
import { IonAvatar, IonRow } from "@ionic/vue";

export default {
  props: ["assets"],
  components: {
    IonAvatar,
    IonRow,
  },
};
</script>

<style scoped>
.asset-card-container {
  display: flex;
  justify-content: space-between;
}

.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.asset-oneDayChange {
  font-size: 10px;
  font-weight: medium;
  margin: 2px;
}

.asset-title {
  font-size: 12px;
  margin: 5px;
}

ion-avatar {
  width: 65px;
  height: 65px;
}
</style>
