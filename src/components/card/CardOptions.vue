<template>
  <ion-card color="secondary" class="card-items">
    <ion-row class="ion-justify-content-between detail-container">
      <ion-text class="ion-padding text-detail ion-text-capitalize" v-model="opt.text">{{ data.text }}</ion-text>
      <ion-toggle :checked="data.hasSecondCard" class="toggle-detail" @ionChange="emitChange" v-model="opt.mode"></ion-toggle>
    </ion-row>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonRow, IonToggle } from "@ionic/vue";
import { defineComponent, reactive,
//  ref, 
onMounted } from "vue";

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
      // text: ref(''),
      // mode: ref(null)
      title:null,
      text:null,
      mode:null,
    })
    onMounted(() => {
      opt.title =  props.data.title;
      opt.text =  props.data.text;
      opt.mode = props.data.hasSecondCard || false;
      emit('setValues', opt)
    // console.log(opt);
    })
    const emitChange = () => {
      // console.log(opt);
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
ion-toggle {
  --background: var(--ion-color-primary);
  /* --background-checked: var(--ion-color-tertiary); */
  --background-checked: var(--ion-color-light);

  /* --handle-background: var(--ion-color-tertiary); */
  --handle-background: var(--ion-color-light);
  --handle-background-checked: var(--ion-color-secondary);
  /* --handle-background-checked: var(--ion-color-primary); */
}
.toggle-detail{
  margin-right: 5px
}
.detail-container{
  align-items: center;
}
</style>
