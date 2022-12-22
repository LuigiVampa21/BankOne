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
          :src="asset.image"
        />
      </ion-avatar>
      <h6 class="asset-title ion-text-uppercase">{{ asset.id }}</h6>
      <h6
        class="asset-oneDayChange"
        :style="
          +asset.one_day_change > 0
            ? { color: 'var(--ion-color-success)' }
            : { color: 'var(--ion-color-danger)' }
        "
      >
        {{ asset.one_day_change }} %
      </h6>
    </div>
  </ion-row>
</template>

<script>
import { 
  IonAvatar,
   IonRow } from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    IonAvatar,
    IonRow,
  },
  props: ["assets"],
});
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
  width: 50px;
  height: 50px;
}
</style>
