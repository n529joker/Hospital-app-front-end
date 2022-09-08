<template>
  <ion-menu side="end" menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>More</ion-title>
        <ion-buttons @click="closeMenu()" slot="end">
          <ion-icon :icon="close" slot="end" size="large"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="none">
        <ion-item button @click="menuNavigation('/home')">
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button @click="menuNavigation('/about')">
          <ion-label>About us</ion-label>
        </ion-item>
        <ion-item button @click="menuNavigation('/contact')">
          <ion-label>Contact us</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
import {
  IonMenu, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonButtons, IonIcon,
  menuController
} from "@ionic/vue";
import {close} from "ionicons/icons";
export default {
  components: {
    IonMenu, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonButtons, IonIcon
  },

  data() {
        return {
            close,
        };
    },
  methods: {
    menuNavigation(url) {
      menuController.close("app-menu");
      this.$router.push(url);
    },


  closeMenu() {
    menuController.close("app-menu");
  },
}

};
</script>

<style scoped>
  ion-item{
    margin-top: 10px;
  }
  ion-item :hover{
    zoom: 5px;
 
  }

</style>