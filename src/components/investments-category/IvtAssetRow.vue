<template>
  <ion-row
    class="ion-justify-content-between ion-margin ion-padding"
    v-for="asset in assets"
    :key="asset.name"
  >
    <ion-avatar>
      <img
        class="avatar"
        alt="Silhouette of a person's head"
        src="https://via.placeholder.com/150C/O https://placeholder.com"
      />
    </ion-avatar>
    <h6 class="asset-title">{{ asset.name }}</h6>
    <ion-row class="tx-amount ion-justify-content-end">
      <h6 class="asset-price">$ {{ asset.price }}</h6>
    </ion-row>
  </ion-row>
</template>

<script>
export default {
  props: ["assets"],
};
</script>

<style scoped>
</style>
