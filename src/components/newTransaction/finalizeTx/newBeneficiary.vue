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
          class="custom-4 ion-margin-bottom"
          type="text"
          placeholder="Full Name"
          v-model="fullName"
        ></ion-input>
        <ion-input
          class="custom-4 ion-margin-bottom"
          type="text"
          placeholder="Country"
          v-model="country"
        ></ion-input>
        <ion-input
          class="custom-4 ion-margin-bottom"
          type="text"
          placeholder="IBAN"
          v-model="iban"
        ></ion-input>
        <ion-input
          class="custom-4 ion-margin-bottom"
          type="text"
          placeholder="BIC"
        ></ion-input>
        <ion-button
          class="custom-4 ion-margin-bottom"
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
import {defineComponent, ref, 
  reactive
} from "vue";
// import newBeneficiary from "../../../utils/newTransferData/newBeneficiary";

export default defineComponent({
  components: {
    IonRow,
    IonText,
    IonInput,
  },
  setup(props, { emit }) {
    const newBeneficiary = reactive({
      fullName: "",
      country: "",
      iban: ""
    });
      const fullName = ref("");
      const country = ref("");
      const iban = ref("");
    // CREATE NEW BENEFICIARY IN DATABASE
    const newBeneficiaryAdded = () => {
      newBeneficiary.fullName = fullName.value;
      newBeneficiary.country = country.value;
      newBeneficiary.iban = iban.value;
      emit("accountReceiving", newBeneficiary);
    };
    return {
      newBeneficiaryAdded,
      fullName,
      country,
      iban,
    };
  },
});
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
