<template>
  <ion-card color="secondary" class="ion-margin-top">
    <ion-row class="ion-margin-start ion-margin-bottom">
      <h3>Real Time estimation</h3>
    </ion-row>
    <ion-row class="ion-justify-content-center ion-margin">
      <ion-input
        v-model="rate"
        class="custom-2 ion-margin"
        type="number"
      ></ion-input>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonRow, IonInput } from "@ionic/vue";
import { ref, 
  reactive,
   watch } from "vue";

export default {
  components: {
    IonRow,
    IonCard,
    IonInput,
  },
  props: ["loanObj"],
  setup(props) {
    const rate = ref();
    let loanObjReactive = reactive(props.loanObj)
    const loanComputor = () => {
      console.log(loanObjReactive);
    }
    watch(props.loanObj, () => loanComputor());
    return {
      rate,
    };
  },
};
</script>

<style></style>
