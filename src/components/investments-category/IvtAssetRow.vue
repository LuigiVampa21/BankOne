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
    <h6 class="asset-price">$ {{ asset.price }}</h6>
  </ion-row>
</template>

<script>
export default {
  props: ["assets"],
  created() {
    console.log(this.data);
  },
};
</script>

<style scoped></style>
