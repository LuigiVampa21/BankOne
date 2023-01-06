<template>
  <ion-card
    color="secondary"
    class="assets-container ion-margin-bottom"
    :router-link="'investments/' + type"
    >
    <ion-row class="ion-margin-bottom">
      <h6 class="asset-type-title ion-text-capitalize" >{{ type }}</h6>
    </ion-row>
    <ion-row class="ion-justify-content-between row-container">
      <IvtAsset v-if="data.array != null" :assets="data.array" />
      <!-- <IvtAsset v-if="dataR" :assets="dataR" /> -->
    </ion-row>
  </ion-card>
</template>

<script>
// import {useAssetsStore} from '../../stores/assets';
// import {storeToRefs} from 'pinia';
import { IonCard, IonRow } from "@ionic/vue";
import { 
  // toRef, 
defineComponent, 
// watch
// , ref
 } from "vue";

import IvtAsset from "./IvtAsset.vue";

export default defineComponent({
  props: ["data","type"],
  components: {
    IvtAsset,
    IonCard,
    IonRow,
  },
  setup(){
    // const assetStore = useAssetsStore();
    // const {loading} = storeToRefs(assetStore);
    // const dataR = toRef(props, 'data');
    // console.log(dataR.value);
    // console.log(props.data);
    // watch(loading, () => {
    //   if(props.type == 'crypto' && loading.value == true){
    //     console.log('---------------------OLDER CHILD---------------------');
    //   console.log(props.data.array)
    //   }
    // })
      // return{
      //   data
      // }
  }
});
</script>

<style scoped>
.assets-container {
  min-height: 20vh;
  margin-top: 2.5vh;
  border-radius: 10px;
}
.asset-type-title {
  font-size: 23px;
  padding-left: 16px;
  font-weight: medium;
}

.row-container {
  flex-wrap: nowrap;
  overflow-x: hidden;
}
</style>
