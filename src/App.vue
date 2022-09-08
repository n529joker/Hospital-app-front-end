<template>
  <ion-app>
    <MenuPage></MenuPage>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuPage from './pages/MenuPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    MenuPage
  }
});
</script>