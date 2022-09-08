<template>

    <base-layout>
    <div class="item" data-aos="fade-up">
        <p class="para" >Welcome to: </p>
    </div>
    
        <section>
           
            <div class="hos" data-aos="zoom-in">
                <h2>Name of hospital</h2>
            </div>

            <div class="hospital"> </div>
            <button class="c-button" @click="opps()">check available specialist</button>

            <div class="directions"> 
                <g-maps>

                </g-maps>
            </div>
            <button class="d-button">Get directions </button>

        </section>


    </base-layout>


</template>

<script>

import GMaps from './GMaps.vue';

export default{
    components:{
        GMaps
    },
    methods:{
        opps(){
            alert("opps!!! no specialist available")
        }
    }

}


</script>