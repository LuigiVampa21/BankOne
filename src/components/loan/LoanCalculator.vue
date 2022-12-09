<template>
  <ion-card color="secondary" class="ion-margin-top">
    <ion-row class="ion-justify-content-center">
      <h3>Real Time estimation</h3>
    </ion-row>
    <ion-row class="results-container">
      <LoanColResults
        :rate="rate"
        :paymentInterest="monthlyPaymentInterest"
        :total="monthlyTotal"
        :monthly="true"
      />
      <LoanColResults
        :rate="rate"
        :paymentInterest="totalInterest"
        :total="total"
        :monthly="false"
      />
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonRow } from "@ionic/vue";
import LoanColResults from "./LoanColResults.vue";
import interestCalculator from "../../utils/loanEstimator/interestCalculator";
import magicNumberFn from "../../utils/loanEstimator/magicNumber";
import rateCalculator from "../../utils/loanEstimator/rateCalculator";
import { ref, reactive, watch } from "vue";

export default {
  components: {
    IonRow,
    IonCard,
    LoanColResults,
  },
  props: ["loanObj"],
  setup(props,{emit}) {
    let loanObjReactive = reactive(props.loanObj);
    let rate = ref(0);
    let totalInterest = ref(0);
    let monthlyPaymentInterest = ref(0);
    let monthlyTotal = ref(0);
    let total = ref(0);
    const loanComputor = () => {
      const magicNumber = magicNumberFn.compute(loanObjReactive.amount);
      rate.value = rateCalculator.compute(loanObjReactive, magicNumber);

      monthlyPaymentInterest.value = interestCalculator.computeMonthly(
        loanObjReactive,
        rate.value
      );

      totalInterest.value = interestCalculator.computeTotalInterest(
        loanObjReactive,
        monthlyPaymentInterest.value
      );

      monthlyTotal.value = interestCalculator.computeTotalMonthly(
        loanObjReactive,
        monthlyPaymentInterest.value
      );

      total.value = interestCalculator.computeTotal(
        loanObjReactive,
        monthlyTotal.value
      );
      emit('emitRate', rate.value)
      emit('emitMonthlyTotal', monthlyTotal.value)
      emit('emitTotal', total.value)
    };
    watch(props.loanObj, () => loanComputor());
    return {
      rate,
      monthlyPaymentInterest,
      monthlyTotal,
      loanObjReactive,
      totalInterest,
      total,
    };
  },
};
</script>

<style scoped>
</style>
