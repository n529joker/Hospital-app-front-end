<template>
    <base-layout>

        <section>

            <div class="home">
             <input class="search" type="search" placeholder="search hospital">
               
                <div class="text">
                    <h1 class=" ion-align-text-center"> welcome to <span
                            style="color:rgb(28, 123, 212); font-weight:bolder;">L'hopital app</span> we help you locate
                        Hospitals around you </h1>
                </div>
                <div>
                    <img id="image1" class="" src="../theme/assets/download.png" alt=""> 
                </div>

                
                    <ion-button style="--background:#259b91;" class="home-b" router-link="/map">see hospitals around you </ion-button>
               
            </div>




        </section>

        
    </base-layout>


</template>

<script>
    import { IonButton } from '@ionic/vue';

export default {
    components: {
        IonButton

    
      




    },

    methods: {
        myfunction() {
            console.log("locate hospitals");
        }

    }

}


</script>