<template>
  <!-- <ion-card color="secondary" class="card-items" v-if="slide === 0"> -->
  <ion-card color="secondary" class="card-items">
    <ion-row class="ion-justify-content-between detail-container">
      <ion-text class="ion-padding text-detail ion-text-capitalize" v-model="opt.text">{{ data.text }}</ion-text>
      <ion-toggle :checked="data.hasSecondCard || data.hasInsurances" class="toggle-detail" :disabled="data.hasSecondCard || data.hasInsurances" @ionChange="emitChange" v-model="opt.mode"></ion-toggle>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonRow, IonToggle } from "@ionic/vue";
import { defineComponent, reactive,
//  ref, 
onMounted,
 onUpdated 
} from "vue";

export default defineComponent({
  components: {
    IonText,
    IonRow,
    IonCard,
    IonToggle
  },
  props: ["data"],
  setup(props, {emit}) {
    const opt = reactive({
      title:null,
      text:null,
      mode:null,
    })
    onMounted(() => {
      opt.title =  props.data.title;
      opt.text =  props.data.text;
      opt.mode = props.data.hasSecondCard || props.data.hasInsurances || false;
    })
    onUpdated(() => {
      opt.title =  props.data.title;
      opt.text =  props.data.text;
      opt.mode = props.data.hasSecondCard || props.data.insuranceToggle || props.data.hasInsurances || false;
    })
    const emitChange = () => {
      emit('optChange', opt)
    }
    return {
      opt,
      emitChange,
    };
  },
});
</script>

<style scoped>
.card-items {
  height: 50px;
  width: 90%;
}
.text-detail{
  font-size: 18px;
}

.toggle-detail{
  margin-right: 5px
}
.detail-container{
  align-items: center;
}
</style>
