<template>
  <ion-row
    class="ion-justify-content-between ion-margin ion-padding"
    v-for="asset in assets"
    :key="asset.name"
  >
    <ion-avatar>
      <img
        class="avatar"
        :src="asset.image"
      />
    </ion-avatar>
    <h6 class="asset-title ion-text-uppercase">{{ asset.id }}</h6>
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
