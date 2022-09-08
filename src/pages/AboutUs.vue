<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>

            </ion-toolbar>
            
        </ion-header>
        <ion-content>
            <section>
                <h1>About us</h1>
                <p>What you need to know</p>
                <p>
                    We are a platform that helps inhabitants in Cameroon to easily locate hospitals and check services offered
                    by these hospitals.
                    <br> <b> Email us at:</b>
                </p>
            </section>
        </ion-content>
    </ion-page>



   

</template>
<script>
import { IonButtons, IonBackButton, IonPage, IonHeader,IonContent, IonToolbar } from "@ionic/vue";
export default {
    components: {
        IonButtons,
        IonBackButton,
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar
    }

}

</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 100%;
    margin-top: 100px;

}

h1 {
    padding-right: 10px;

}

</style>>

