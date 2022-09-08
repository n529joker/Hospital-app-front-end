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
                <h1>Contact Us</h1>
                <p>Have any feedback or question for us?? send us a message</p>

                <input type="text" placeholder="what is our name?">
                <input type="number" placeholder="Phone number">
                <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                <button class="btn btn-success mt-5" type="submit">Send Message</button>

                <p>Or reach us via <a href="">whatsapp</a></p>
            </section>
        </ion-content>
    </ion-page>


</template>
<script>
import { IonButtons, IonBackButton, IonPage, IonHeader, IonContent, IonToolbar } from "@ionic/vue";
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
    padding: 10px;

}

input {
    margin: 10px;
    height: 50px;
    text-align: center;
}

textarea {
    text-align: center;
    justify-content: center;
}



a {
    text-decoration: none;
    font-weight: bold;
    color: black;
}
</style>