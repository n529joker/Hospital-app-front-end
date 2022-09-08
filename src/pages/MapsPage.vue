<template>
    <base-layout>

        <div class="ion-padding">
            <g-maps 
            :disableUI="false" 
            :zoom="12" mapType="roadmap" 
            :center="{ lat:4.091638, lng: -9.6469468}">
            :markers="markers" 
            </g-maps>

        </div>

        <ion-card class="card">
            <div class="enter">
                <div>
                    <label for="check" style="margin-right:12px; font-size:25px; font-weight:bolder;"> Hospitals within:
                    </label>
                    <input style="width:50px;" type="text" id="check" /> <br>
                </div>
                <div>
                    <button class="check">check</button>

                </div>
            </div>
            <ion-list class="onel" :key="hospital.id" v-for="hospital in allHospitals">
                <ion-item class="item" lines="none" router-link="/maps1"> {{ hospital.Name }}</ion-item>

            </ion-list>
        </ion-card>




    </base-layout>


</template>

<script>
import GMaps from './GMaps.vue';
import { IonList, IonItem, IonCard } from '@ionic/vue';
import {mapGetters,mapActions} from 'vuex';

export default {
    components: {
        GMaps,
        IonList,
        IonItem,
        IonCard



    },
    setup(){
        const markers =[]
        return{
               markers
            }

    },


    computed:{
    ...mapGetters('hospitals',{
      allUsers:'allHospitals'
    })
    
  },
  methods:{
    ...mapActions('hospitals',{
      fetchHospitals:'fetchHospitals'
    }),
    async showHospitals(){
      await this.fetchHospitals();
    }
  }

}

</script>