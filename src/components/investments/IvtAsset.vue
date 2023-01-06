<template>
  <!-- <ion-row
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
  </ion-row> -->
  <!-- <ion-row>     -->
    <ion-slides pager="true" ref="slider"	:options="slideOpts">
      <template v-for="(assetsArray, index) in assetSlide" :key="index">
        <ion-slide>
          <ion-row class="asset-card-container ion-margin-bottom" v-for="asset in assetsArray" :key="asset.id">
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
                    isUpdating 
                    ? {  color: '#0000FF' }
                    : +asset.one_day_change > 0
                    ? { color: 'var(--ion-color-success)' }
                    : { color: 'var(--ion-color-danger)' }
                    "
                >
                 <!-- :style="
                    +asset.one_day_change > 0
                    ? { color: 'var(--ion-color-success)' }
                    : { color: 'var(--ion-color-danger)' }
                    " -->
                <!-- {{ asset.one_day_change }} % -->
                {{ asset.price }}
              </h6>
            </div>
          </ion-row>
        </ion-slide>
      </template>
    </ion-slides>
</template>


<script>
  import { defineComponent, onBeforeMount, ref, watch } from "vue";
  import {useAssetsStore} from '../../stores/assets';
  import {storeToRefs} from 'pinia';
  import divideArray from "../../utils/investments/divideArray";
import { 
  IonAvatar,
  IonRow,
  IonSlides,
  IonSlide,
  } from "@ionic/vue";

export default defineComponent({
  components: {
    IonAvatar,
    IonRow,
    IonSlides,
    IonSlide,
  },
  props: ["assets"],
  setup(props){
    const assetStore = useAssetsStore();
    const {loading} = storeToRefs(assetStore);
    const assetSlide = ref(null); 
    const isUpdating = ref(false); 
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    onBeforeMount(() => {
      assetSlide.value = divideArray(props.assets);
    })
    watch(loading, () => {
      // console.log('---------------------YOUNGER CHILD---------------------');
      // console.log(props.assets);
      isUpdating.value = true;
      setTimeout(() => {
        isUpdating.value= false;
      },300)
    })
    return{
      assetSlide,
      slideOpts,
      isUpdating,
    }
  }
});
</script>

<style scoped>
.asset-card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  /* border: 1px solid red; */
}

.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid white; */
  margin-left: 40px;
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
