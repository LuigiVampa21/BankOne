<template>
  <ion-card color="primary">
    <ion-card-content>
      <form>
        <ion-label>Start date</ion-label>
        <ion-input
          class="custom ion-margin-bottom ion-margin-top"
          type="date"
          placeholder="Start date"
        ></ion-input>
        <ion-label>End date</ion-label>
        <ion-input
          class="custom ion-margin-bottom ion-margin-top"
          type="date"
          placeholder="End date"
        ></ion-input>
        <ion-label>Select an account</ion-label>
        <ion-list class="account-type ion-margin-bottom ion-margin-top">
          <ion-item
            color="secondary"
            class="account-type ion-margin-bottom ion-margin-top"
          >
            <ion-select
              color="secondary"
              placeholder="---------------------------------------------------"
            >
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="checking">Checking</ion-select-option>
              <ion-select-option value="savings">Savings</ion-select-option>
              <ion-select-option value="investment"
                >Investments</ion-select-option
              >
            </ion-select>
          </ion-item>
        </ion-list>
      </form>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonInput,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
export default {
  components: {
    IonCard,
    IonCardContent,
    IonInput,
    IonLabel,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
  },
};
</script>

<style></style>
