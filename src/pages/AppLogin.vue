<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end" class="ion-margin"> Sign up </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row
          class="container ion-justify-content-center ion-align-items-center"
        >
          <ion-card class="auth-card">
            <ion-card-header class="auth-headers">
              <ion-card-title
                color="light"
                class="ion-text-center ion-margin-bottom"
              >
                <h1>Bank One</h1></ion-card-title
              >
              <ion-card-subtitle
                color="light-tint"
                class="ion-text-capitalize ion-text-center ion-margin-bottom"
              >
                <h2>Login to your account</h2>
              </ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              <form>
                <ion-input
                  class="custom ion-margin-bottom"
                  type="email"
                  placeholder="Email"
                ></ion-input>
                <ion-input
                  class="custom ion-margin-bottom"
                  type="password"
                  placeholder="Password"
                ></ion-input>
                <ion-button
                  class="custom ion-margin-bottom"
                  type="submit"
                  color="tertiary"
                  expand="block"
                  >Sign in</ion-button
                >
              </form>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <div class="ion-text-center">
                      <ion-text color="tertiary"> Forgot Password? </ion-text>
                    </div>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <div class="ion-text-center">
                      <ion-text>
                        <h6>2022 © Bank One Inc.</h6>
                      </ion-text>
                    </div>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonHeader,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonText,
  IonCol,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonButtons,
    IonHeader,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonText,
    IonCol,
  },
};
</script>

<style scoped>
.auth-card {
  background: var(--ion-color-primary);
  color: var(--ion-color-white);
  width: 90vw;
  min-height: 40vh;
}
.auth-headers {
  width: 90vw;
}
h1 {
  font-size: 40px;
}

h2 {
  font-size: 13px;
}
h6 {
  font-size: 11px;
  color: var(--ion-color-medium);
}
.container {
  height: 85vh;
}
</style>
