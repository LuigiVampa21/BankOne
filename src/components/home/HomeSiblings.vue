<template>
  <ion-card color="secondary" class="sibling-accounts-container ion-padding-bottom">
    <ion-row v-if="siblings?.length" class="sibling-accounts-row">

      <!-- <HomeItemSibling  v-for="sibling of siblings" :key="sibling.id" :data="sibling"/> -->
      <HomeItemSibling  v-for="sibling of sibToDisplay" :key="sibling.id" :data="sibling"/>
      
    </ion-row>
    <ion-row v-else class="ion-justify-content-center">
      <ion-text color="medium" class="ion-margin ion-padding-top">
        No known account
      </ion-text>
    </ion-row>
  </ion-card>
</template>

<script>
import {
  IonRow,
  IonCard,
  IonText,
} from "@ionic/vue";
import HomeItemSibling from "./HomeItemSibling.vue";
import { defineComponent, onMounted, onUpdated, ref, toRaw } from "vue";

export default defineComponent({
  components: {
    IonRow,
    IonCard,
    IonText,
    HomeItemSibling,
  },
  props:['siblings'],
  setup(props){
    let array = ref(null);
    let sibToDisplay = ref(null);
 onMounted(() => {
   checkArray();
  })
  onUpdated(() => {
    checkArray();
  })
  const checkArray = () => {
    array.value = props.siblings;
    const length = toRaw(array.value);
    if(length > 3){
      sibToDisplay.value = props.siblings[3];
    }else{
      sibToDisplay.value = props.siblings;
    }
  }
  return{
    sibToDisplay
  }
}
});
</script>

<style scoped>
.sibling-accounts-container {
  width: 100vw;
  height: 100%;
}

.sibling-accounts-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
}
</style>
