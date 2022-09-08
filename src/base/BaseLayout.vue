<template>
    <ion-page>
        <ion-header>
            
            <ion-toolbar>
                <ion-title slot="start" id="title">L'hopital</ion-title>
                <ion-buttons @click="openMenu()" slot="end">
                    <ion-icon :icon="menu" slot="end" id="menu"></ion-icon>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>

</template>

<script>
import { IonHeader, IonContent, IonPage, IonToolbar, IonTitle, menuController } from '@ionic/vue';
import { menu } from "ionicons/icons";
export default {
    components: {
        IonHeader,
        IonContent,
        IonPage,
        IonToolbar,
        IonTitle


    },

    data() {
        return {
            menu,
        };
    },
    methods: {
        openMenu() {
            menuController.open("app-menu");
        },
    },
}
</script>