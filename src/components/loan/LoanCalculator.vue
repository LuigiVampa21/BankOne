<template>
  <ion-card color="secondary" class="ion-margin-top">
    <ion-row class="ion-margin-start">
      <h3>Real Time estimation</h3>
    </ion-row>
    <ion-row class="calc-container ion-justify-content-end">
      <ion-row
        class="ion-justify-content-between ion-align-items-center calc-child"
      >
        <ion-text class="ion-margin">
          <h6>Interest rate</h6>
        </ion-text>
        <ion-text class="ion-margin" v-if="rate != 'Infinity' && rate != 'NaN'"
          >{{ rate }}%</ion-text
        >
      </ion-row>
      <ion-row
        class="ion-margin-bottom ion-justify-content-between ion-align-items-center calc-child"
      >
        <ion-text class="ion-margin">
          <h6>Monthly payment</h6>
        </ion-text>
        <ion-text class="ion-margin" v-if="rate != 'Infinity' && rate != 'NaN'"
          >{{ rate }}%</ion-text
        >
      </ion-row>
      <ion-row
        class="ion-margin-bottom ion-justify-content-between ion-align-items-center calc-child"
      >
        <ion-text class="ion-margin">
          <h6>Monthly payment</h6>
        </ion-text>
        <ion-text class="ion-margin" v-if="rate != 'Infinity' && rate != 'NaN'"
          >{{ rate }}%</ion-text
        >
      </ion-row>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonRow, IonText } from "@ionic/vue";
import interestCalculator from "../../utils/loanEstimator/interestCalculator";
import magicNumberFn from "../../utils/loanEstimator/magicNumber";
import rateCalculator from "../../utils/loanEstimator/rateCalculator";
import { ref, reactive, watch } from "vue";

export default {
  components: {
    IonRow,
    IonCard,
    IonText,
  },
  props: ["loanObj"],
  setup(props) {
    let loanObjReactive = reactive(props.loanObj);
    let rate = ref(0);
    let monthlyPayment = ref(0);
    let total = ref(0);
    const loanComputor = () => {
      console.log(loanObjReactive);
      const magicNumber = magicNumberFn.compute(loanObjReactive.amount);
      rate.value = rateCalculator.compute(loanObjReactive, magicNumber);
      console.log(rate.value);

      const monthlyPayment = interestCalculator;
    };
    watch(props.loanObj, () => loanComputor());
    return {
      rate,
      monthlyPayment,
      total,
    };
  },
};
</script>

<style scoped>
.calc-container {
  /* border: 1px solid white; */
  width: 70%;
  position: relative;
  left: 20%;
}
</style>
