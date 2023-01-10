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
    <div class="asset-info">
    <h6 class="asset-title ion-text-uppercase">
      <ion-text color="light">
      {{ asset.id }}
    </ion-text>
    </h6>
      <ion-text color="medium ion-text-capitalize">
      {{ asset.name }}
    </ion-text>
    </div>
    <ion-row class="tx-amount ion-justify-content-end">
      <h6 class="asset-price">
    <ion-text color="medium">
        $ 
        </ion-text>
        <ion-text 
                 :style="
                    isUpdating 
                    ? {  color: '#0000FF' }
                    : { color: 'var(--ion-color-light)' }
                    "
        >
        {{ asset.price }}
        </ion-text>
        </h6>
    </ion-row>
  </ion-row>
</template>

<script>
import {useAssetsStore} from "../../stores/assets";
import {storeToRefs} from "pinia";
import { defineComponent, watch, ref } from "vue"
import {IonAvatar, IonRow, IonText} from "@ionic/vue"

export default defineComponent({
  props: ["assets"],
  components: {
    IonAvatar,
    IonRow,
    IonText
  },
  setup(){
    const assetsStore = useAssetsStore();
    const {loading} = storeToRefs(assetsStore);
    const isUpdating = ref(false);
    watch(loading, () => {
      isUpdating.value = true;
      setTimeout(() => {
        isUpdating.value = false;
      }, 500)
    })
    return{
      isUpdating
    }
  }
});
</script>

<style scoped>
.asset-info{
  /* border: 1px solid white; */
  width: 30%;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  margin-top: -16px;
  }
</style>
