<template>
  <div>
    <ion-row class="options">
      <ion-text class="ion-text-center ion-text-capitalize pos-down2\5"
        >add new beneficiary</ion-text
      >
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <form class="pos-down10">
        <ion-input
          class="custom-3 ion-margin-bottom"
          type="text"
          placeholder="Full Name"
        ></ion-input>
        <ion-input
          class="custom-3 ion-margin-bottom"
          type="text"
          placeholder="Country"
        ></ion-input>
        <ion-input
          class="custom-3 ion-margin-bottom"
          type="text"
          placeholder="IBAN"
        ></ion-input>
        <ion-input
          class="custom-3 ion-margin-bottom"
          type="text"
          placeholder="BIC"
        ></ion-input>
        <ion-button
          class="custom-3 ion-margin-bottom"
          color="tertiary"
          expand="block"
          @click.prevent="newBeneficiaryAdded"
          >Confirm</ion-button
        >
      </form>
    </ion-row>
  </div>
</template>

<script>
import { IonRow, IonText, IonInput } from "@ionic/vue";
import newBeneficiary from "../../../utils/newTransferData/newBeneficiary";

export default {
  components: {
    IonRow,
    IonText,
    IonInput,
  },
  setup(props, { emit }) {
    // CREATE NEW BENEFICIARY IN DATABASE
    const newBeneficiaryAdded = () => {
      emit("accountReceiving", newBeneficiary);
    };
    return {
      newBeneficiaryAdded,
    };
  },
};
</script>

<style scoped>
.options {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 5vh;
  height: 60px;
  font-size: 16px;
}
</style>
