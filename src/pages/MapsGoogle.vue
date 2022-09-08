<template>
    <h1>Your coordinates</h1>
    <p>{{coordinates.lat}}latitude, {{coordinates.lng}} longitude</p>
</template>

<script>
export default {

    data() {
        return {
            coordinates: {
                lat: 0,
                lng: 0

            }

        }
    },
    created() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
        this.coordinates= coordinates
      })
      .catch((error) => {
        alert(error);
      });
  },

}
</script>

<style>

</style>