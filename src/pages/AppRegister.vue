<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end" class="ion-margin" router-link="/login">
          Sign in
        </ion-buttons>
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
                <h2>Fill out to register</h2>
              </ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              <form>
                <ion-grid>
                  <ion-row>
                    <ion-input
                      class="custom ion-margin-bottom ion-margin-end"
                      type="text"
                      placeholder="Last name"
                    ></ion-input>
                    <ion-input
                      class="custom ion-margin-bottom"
                      type="text"
                      placeholder="First name"
                    ></ion-input>
                  </ion-row>
                  <ion-input
                    class="custom ion-margin-bottom"
                    type="text"
                    placeholder="Date of birth"
                  ></ion-input>
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
                  <ion-input
                    class="custom ion-margin-bottom"
                    type="password"
                    placeholder="Confirm Password"
                  ></ion-input>
                  <ion-item>
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>
                      <h3>I agree to the terms and conditions</h3>
                    </ion-label>
                  </ion-item>

                  <ion-button
                    class="custom ion-margin-bottom ion-margin-top"
                    type="submit"
                    color="tertiary"
                    expand="block"
                    >Sign up</ion-button
                  >
                </ion-grid>
              </form>
              <div class="ion-text-center">
                <ion-text class="ion-text-center" color="light-tint">
                  <h6>2022 © Bank One Inc.</h6>
                </ion-text>
              </div>
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
  IonLabel,
  IonCheckbox,
  IonItem,
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
    IonLabel,
    IonCheckbox,
    IonItem,
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
h3 {
  color: var(--ion-color-medium);
}
h6 {
  font-size: 11px;
  color: var(--ion-color-medium);
}
.auth-footer {
  width: 90vw;
}
.container {
  height: 85vh;
}

ion-checkbox {
  --size: 16px;
  --background: var(--ion-color-light);
  --background-checked: var(--ion-color-tertiary);
}
ion-item {
  --background: var(--ion-color-primary);
}
</style>
