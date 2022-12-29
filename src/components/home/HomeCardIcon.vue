<template>
  <ion-icon
        class="home-cards-icons"
        color="medium"
        :icon="icon"
      ></ion-icon>
  
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import {card, trendingUp, documents, cloudUpload} from "ionicons/icons";
export default defineComponent({
    components: {
        IonIcon
    },
    props: ["icon"],
    setup(){
        return{
            card,
            trendingUp,
            documents,
            cloudUpload,
        }
    }

})
</script>

<style scoped>
.home-cards-icons{
    font-size: 50px;
}

</style>