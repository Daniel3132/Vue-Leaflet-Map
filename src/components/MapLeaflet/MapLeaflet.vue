<template>
  <div class="map-container">
    <l-map ref="map" v-model:zoom="zoom" :center="[41, 5]" :use-global-leaflet="false">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>

      <l-marker v-for="(data, index) in coordinates" :key="index" :lat-lng="data.coordinates"
        :icon="getMarkerIcon(data.color)"></l-marker>
      <l-circle v-for="(data, index) in coordinates" :key="index" :lat-lng="data.coordinates" :radius="800 * 800"
        :color="data.color"></l-circle>
    </l-map>
  </div>
</template>

<script lang="ts">
import { countryCodes } from "@src/data/data";
import type { CountryCode } from "@src/types/CountryCode";
import { LCircle, LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "./MapLeaflet.css";
import { countryData } from "./countryData";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
  },
  data() {
    return {
      zoom: 1,
      coordinates: this.getDataArray(countryCodes),
    };
  },
  methods: {
    getDataArray(countryCodes: CountryCode[]): Array<{ coordinates: LatLngTuple; color: string }> {
      return countryCodes.flatMap((countryCode) => {
        const country = countryData[countryCode];
        if (country) {
          const { coordinates, color } = country;
          return { coordinates, color };
        }
        return [];
      });
    },
    getMarkerIcon(color: string) {
      return L.icon({
        iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
    },
  },
};
</script>
