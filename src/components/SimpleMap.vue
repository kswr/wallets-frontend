<template>
  <div>
    <div id="mapid">
    </div>
  </div>
</template>

<script>
  import L from 'leaflet'
  import axios from 'axios'

  export default {
    data() {
      return {}
    },
    methods: {
      initMap: function () {
        console.log('called initMap');
        this.map = L.map('mapid').setView([52.5, 19], 5);
        // this.map = L.map('mapid').setView([40, -100], 4);
      },
      addFirstLayer: function () {
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1Ijoia3N3ciIsImEiOiJjam5pNDR2Z24wZ2RoM2t0YXQ5bXV1eDJtIn0.hVxYTf4xgkJKMKjb65eClQ'
        }).addTo(this.map);
      }
    },
    mounted() {
      this.initMap();
      this.addFirstLayer();
    }
  }
</script>

<style scoped>
  #mapid {
    height: 100vh;
  }
</style>

