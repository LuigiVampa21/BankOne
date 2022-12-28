<template>
  <ion-card color="secondary" class="ion-padding-bottom ion-padding-start">
    <ion-row>
      <ion-text class="card-title">
        <h3 class="ion-text-capitalize" color="light">{{ data?.type }}</h3>
        </ion-text
      >
    </ion-row>
    <ion-row class="ion-justify-content-between">
        <ion-text color="medium">
          <h6>
            {{ data?.amount }}$</h6>
          </ion-text>
          <div class="toggle-container">
            <ion-toggle :checked="showTxs && accTxs && data && accTxs.type === data.type" @ionChange="emitChange"></ion-toggle>
          </div>
        </ion-row>
      </ion-card>
      <base-card class="fullW" v-if="showTxs && accTxs?.txs?.length && !loading" :data="accTxs.txs" :type="'wallet'"></base-card>
      <base-card class="fullW" v-else-if="showTxs && !accTxs?.txs?.length && !loading" :data="'no transaction history'" :type="'no data'"></base-card>
  </template>

<script>
import {
  IonText,
  IonRow,
  IonCard,
  IonToggle,
} from "@ionic/vue";
import { defineComponent,ref } from "vue";

export default defineComponent({
  props: ["data", "accTxs", "loading"],
  components: {
    IonText,
    IonRow,
    IonCard,
    IonToggle,
  },
  setup(props, {emit}) {
    const showTxs = ref(false);
    const emitChange = () => {
      showTxs.value = !showTxs.value;
      emit('showTxsFn', {type: props.data.type, bool:showTxs.value})
    }
    return {
      showTxs,
      emitChange,
    };
  },
});
</script>

<style scoped>
.toggle-container{
  margin-top: -16px
}
.fullW{
  width: 100%;
}
</style>
