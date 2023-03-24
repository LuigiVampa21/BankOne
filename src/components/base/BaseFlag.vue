<template>
    <ion-item color="secondary">
        <ion-avatar>
            <img class="avatar" :alt="'flag ' + currentUserR?.currency" :src="currentUserR?.currency === 'EURO' ? require('../../../public/assets/flags/flag.europe.png')
                : currentUserR?.currency === 'POUND' ? require('../../../public/assets/flags/flag.united-kingdom.png')
                    : currentUserR?.currency === 'DOLLAR' ? require('../../../public/assets/flags/flag.united-states.png')
                    : require('../../../public/assets/flags/flag.transfert.png')
                    " 
                    />
        </ion-avatar>
    </ion-item>
</template>

<script>
import { IonAvatar, IonItem } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: ["currentUserR"],
  name: "BaseFlag",
  components: {
    IonAvatar,
    IonItem
  },
});

</script>

<style scoped>
</style>