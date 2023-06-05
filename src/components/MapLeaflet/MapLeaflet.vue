<template>
  <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
      name="OpenStreetMap"></l-tile-layer>

    <l-marker v-for="(coordinate, index) in coordinates" :key="index" :lat-lng="coordinate"></l-marker>
    <l-circle v-for="(coordinate, index) in coordinates" :key="index" :lat-lng="coordinate" :radius="800 * 800"
      :color="getCircleColor()"></l-circle>
  </l-map>
</template>

<script lang="ts">
import { countryCodes } from "@src/data/data";
import type { CountryCode } from "@src/types/CountryCode";
import { LCircle, LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import type L from "leaflet";
import type { LatLngTuple } from "leaflet";
import "./MapLeaflet.css";

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
      coordinates: this.getCoordinatesArray(countryCodes) as L.LatLngExpression[],
    };
  },
  methods: {
    getCountryCoordinates(countryCode: CountryCode): LatLngTuple | null {
      const countryCoordinates: { [key in CountryCode]: LatLngTuple } = {
        CO: [4.5709, -74.2973], // Colombia
        SG: [1.3521, 103.8198], // Singapur
        DE: [51.1657, 10.4515], // Germany
        US: [37.0902, -95.7129], // EEUU
      };

      if (countryCode in countryCoordinates) {
        return countryCoordinates[countryCode];
      }

      return null;
    },
    getCoordinatesArray(countryCodes: CountryCode[]): (LatLngTuple | null)[] {
      return countryCodes.map(countryCode => this.getCountryCoordinates(countryCode))
    },
    getCircleColor() {
      return 'red';
    },
  },
};
</script>
