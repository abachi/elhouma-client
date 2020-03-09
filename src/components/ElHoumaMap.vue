<template>
  <div class="w-full h-screen">
    <l-map 
    :zoom="13"
    :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="report in reports" :key="report.id" :lat-lng="[report.lat, report.lng]">
            <l-popup :class="'w-64'">
                <div class="w-full flex flex-col">
                    <div class="report-picture w-full h-48">
                        <img class="w-full h-full object-cover rounded" :src="report.picture" alt="Report Picture">
                    </div>
                    <div>
                        <p>{{ report.description }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-sm py-1 px-3 rounded bg-green-600 text-sm text-white">confirm</button>
                        <button class="text-sm py-1 px-3 rounded bg-gray-300  text-gray-700">share</button>
                        <button class="text-sm py-1 px-3 rounded bg-red-200   text-red-400">delete</button>
                    </div>
                </div>
            </l-popup>
        </l-marker>
    </l-map>
  </div>
</template>

<script>
import axios from "axios";
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'ElHoumaMap',
  components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup
  },

  data(){
      return {
        reports: [],
        center: latLng(47.41322, -1.219482),
        position: latLng(47.41322, -1.219482),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
  },
  created(){
      this.fetchReports();
  },
  methods: {
      fetchReports(){
          axios.get('/reports/index').then(response => {
              this.reports = response.data.data;
          }).catch( error => {
              console.log(error);
          })
      }
  }
}
</script>
