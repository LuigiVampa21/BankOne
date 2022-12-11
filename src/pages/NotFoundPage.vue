<template>
    <base-layout :title="'page not found'" :backLink="'/home'">
        <ion-grid class="not-found-grid">
            <ion-row class="not-found-row">
                <ion-row class="ion-justify-content-center ion-margin-bottom ion-padding-bottom">
                    <ion-icon class="not-found-icon"
                    color="light" :icon="alertCircleOutline"></ion-icon>  
                </ion-row>
          <ion-text class="not-found-text" color="light">Sorry no query matches this route</ion-text>
            </ion-row>
        </ion-grid>
    </base-layout>
</template>

<script>
import {defineComponent} from "vue"
import {IonGrid, IonRow, IonIcon} from '@ionic/vue'
import {alertCircleOutline} from "ionicons/icons"
export default defineComponent({
components: {
    IonGrid,
    IonRow,
    IonIcon
},
setup(){
    return{
        alertCircleOutline
    }
}

})
</script>

<style scoped>
.not-found-grid{
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.not-found-row{
    display: flex;
    flex-direction: column;
}

.not-found-icon{
    font-size: 50px;
}

.not-found-text{
    font-size: 25px;
}
</style>