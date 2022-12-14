<template>
  <div class="card">
    <ion-row class="ion-justify-content-end ion-margin-end">
      <h2>Bank One</h2>
    </ion-row>
    <ion-row class="ion-margin-start">
      <div class="chip"></div>
    </ion-row>
    <ion-row class="ion-margin-start ion-margin-end">
      <ion-text v-if="!showDetails"> <h3>* * * *  &nbsp;&nbsp; * * * * &nbsp;&nbsp; * * * * &nbsp;&nbsp; * * * *</h3> </ion-text>
      <ion-text v-else> {{card.card_numbers}} </ion-text>
    </ion-row>
    <ion-row>
      <ion-text class="ion-margin-start">
        <div class="expiry-container">
          <h6>EXPIRY DATE</h6>
          <span class="date" v-if="!showDetails">* * / * *</span>
          <span class="date" v-else>{{card.expiration_date}}</span>
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
      <ion-text v-else class="card-holder-name ion-margin-end">
        {{card.placeholder}}
      </ion-text>
      <ion-text class="card-holder-logo"> VISA </ion-text>
    </ion-row>
  </div>
</template>

<script>
import { IonRow, IonText } from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "CardCreditCard",
  components: {
    IonRow,
    IonText,
  },
  props: ['card', 'showDetails'],
  setup(props){
    const cardR = ref(null);
    onMounted(() => {
      cardR.value = props.card; 
    })
    return{
      cardR,
    }
  }
});
</script>

<style scoped>
.card {
  width: 80vw;
  height: 25vh;
  background: linear-gradient(
    135deg,
    rgba(131, 58, 180, 1) 15%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 10px;
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
</style>
