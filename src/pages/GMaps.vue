<template>
  <div class="map" ref="mapDivRef"></div>
</template>

<script>

import { onMounted, ref } from 'vue';
export default {
  props: {
    center: { lat: { type: Number }, lng: { type: Number } },
    zoom: { type: Number },
    mapType: { type: String },
    disableUI: { type: Boolean },
    markers: {
      type: Array,
      default() {
        return [
          { lat: 38.8977859, lng: -77.0057621, title: "<strong>union station</strong>" },
          { lat: 38.8977859, lng: -77.0057621, title: "union station" }
        ]
      }

    }
  },



  setup(props) {
    //google ap object
    const map = ref(null)
    //map element in the template
    const mapDivRef = ref(null)
    const key = 'AIzaSyBZbBspKF87trC3ilcWvkK4xIl6kHtnrOE'
    //load the google script
    onMounted(() => {
      // creating the script element to load
      const googleMapScript = document.createElement("script")
      googleMapScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&v=weekly`)
      googleMapScript.setAttribute("defer", "")
      googleMapScript.setAttribute("async", "")
      document.head.appendChild(googleMapScript)

    })



    const loadMapMarkers = () => {
      if (!props.markers.length) return
      props.markers.forEach(markerInfo => {
        // add markers on the map
        const mapMarker = new google.maps.Marker({
          position: new window.google.maps.LatLng(
            markerInfo.lat,
            markerInfo.lng
          ),
          map: map.value,
          title: markerInfo.title
        })
        //info window
        mapMarker.InfoWindow = new window.google.maps.InfoWindow({
          content: markerInfo.title
        })
        mapMarker.addListener('click', () => {
          if (mapMarker.title !== null) {
            mapMarker.InfoWindow.open(map.value, mapMarker)

          }
        })

      })
    }

    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: props.mapType || "hybrid",
        zoom: props.zoom || 7,
        center: props.center || { lat: 4.091638, lng: -9.6469468},
        disableDefaultUI: props.disableUI || false
      })

      loadMapMarkers()
    }

    return { mapDivRef }
  }

  

}
</script>

<style scoped>
.map {
  width: auto;
  height: 400px;
  background-color: azure;
}
</style>