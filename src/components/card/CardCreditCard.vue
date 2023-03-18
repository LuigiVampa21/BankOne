<template>
    <!-- Unit test has no second Card -->
    <!-- <div class="cardP"> -->
      <!-- <div class="layout"> -->
  <div :class="card.type === 'digital' ? 'cardD' : 'cardP'">
    <div class="layout" v-if="!hasSecondCard && card.type === 'physical'">
      <p>
        Press Get Physical Card To Apply
      </p>
  </div>
    <ion-row class="ion-justify-content-end ion-margin-end">
      <h2>Bank One</h2>
    </ion-row>
    <ion-row class="ion-margin-start">
      <div class="chip"></div>
    </ion-row>
    <ion-row class="ion-margin-start ion-margin-end card-numbers">
      <ion-text v-if="!showDetails"> <h3>* * * *  &nbsp;&nbsp; * * * * &nbsp;&nbsp; * * * * &nbsp;&nbsp; * * * *</h3> </ion-text>
      <ion-text v-else class="hidden-card-numbers"> {{card.formattedCardNumbers}} </ion-text>
    </ion-row>
    <ion-row>
      <ion-text class="ion-margin-start">
        <div class="expiry-container">
          <h6>EXPIRY DATE</h6>
          <span class="date" id="date" v-if="!showDetails">* * / * *</span>
          <span class="date" v-else>{{card.formattedDateNumbers}}</span>
        </div>
      </ion-text>
    </ion-row>
    <ion-row
      class="ion-justify-content-between ion-align-items-center ion-margin-start ion-margin-end"
    >
      <h6 class="card-holder-title">CARD HOLDER</h6>
      <ion-text v-if="!showDetails" class="card-holder-name ion-margin-end">
        * * * * * &nbsp;&nbsp;  * * * * *
      </ion-text>
      <ion-text v-else class="hidden-card-holder-name">
        {{card.placeholder}}
      </ion-text>
      <ion-text class="card-holder-logo"> VISA </ion-text>
    </ion-row>
  </div>
</template>

<script>
import { IonRow, IonText } from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { formatter, dateFormatter } from "../../utils/card/formatCardNumbers";

export default defineComponent({
  name: "CardCreditCard",
  components: {
    IonRow,
    IonText,
  },
  props: ['card', 'showDetails', 'hasSecondCard'],
  setup(props){
    let cardR = ref(null);
    onMounted(() => {
      cardR.value = props.card; 
      cardR.value.formattedCardNumbers = formatter(props.card.card_numbers);
      cardR.value.formattedDateNumbers = dateFormatter(props.card.expiration_date);
    })
    return{
      cardR,
    }
  }
});
</script>

<style scoped>
.cardD {
  width: 80vw;
  max-width: 370px;
  height: 25vh;
  background: linear-gradient(
    135deg,
    rgba(131, 58, 180, 1) 15%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 10px;
}
.cardP {
  width: 80vw;
  max-width: 370px;
  height: 25vh;
  background: rgb(252, 176, 69);
  border-radius: 10px;
}

.layout {
  width: 80vw;
  max-width: 370px;
  height: 25vh;
  position: absolute;
  background: rgba(11,15,18, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout p {
  font-size: 20px;
}
.chip {
  width: 50px;
  height: 30px;
  background: #959494;
  border-radius: 3px;
}

.expiry-container {
  width: 150%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.expiry-container h6,
.card-holder-title {
  color: var(--ion-color-secondary);
  font-size: 8px;
  font-weight: bold;
}

.card-holder-logo {
  font-size: 30px;
  font-weight: bold;
}

.card-numbers{
  width: 298px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.hidden-card-numbers{
  font-size: 20px;
  letter-spacing: 2px;
}

.hidden-card-holder-name{
  font-size: 14px;
  letter-spacing: 1px;
}

.date{
  letter-spacing: 2px;
}
</style>
