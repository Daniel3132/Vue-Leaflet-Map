MapLeaflet Component
====================

The MapLeaflet component is a Vue component that allows you to display a map with markers and circles using the Leaflet library. It provides a customizable map interface with support for geoJSON data, markers, and circles.

Installation
------------

To use the MapLeaflet component, you need to have Vue and Leaflet installed in your project. You can install them using npm or yarn:

`npm install vue leaflet @vue-leaflet/vue-leaflet`

or

`yarn add vue leaflet @vue-leaflet/vue-leaflet`

Usage
-----

Once you have installed the required dependencies, you can use the MapLeaflet component in your Vue application. Here's an example of how to use it:

```vue
<template>
  <div class="map-container">
    <l-map ref="map" v-model:zoom="zoom" :center="[41, 5]" :use-global-leaflet="false">
      <l-geo-json :geojson="geojsonData" :optionsStyle="continentStyle" :fillColor="continentFillColor"></l-geo-json>
      <l-marker v-for="(data, index) in coordinates" :key="index" :lat-lng="data.coordinates"
        :icon="getMarkerIcon(data.color)"></l-marker>
      <l-circle v-for="(data, index) in coordinates" :key="index" :lat-lng="data.coordinates" :radius="800 * 800"
        :color="data.color"></l-circle>
    </l-map>
  </div>
</template>


<script lang="ts">
import globalJSON from "@src/data/geoJSON/all-continents.json";
import { CountryCode } from "@src/types/CountryCode";
import { LCircle, LGeoJson, LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "./MapLeaflet.css";
import { countryData } from "./countryData";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LGeoJson,
  },
  props: {
    continentFillColor: {
      type: String,
      default: "gray"
    },
    countryCodes: {
      type: Array as () => CountryCode[]
    }
  },
  data() {
    return {
      zoom: 1,
      coordinates: this.getDataArray(this.countryCodes),
    };
  },
  computed: {
    geojsonData() {
      return globalJSON;
    },
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
    continentStyle() {
      return {
        stroke: true,
        color: "white",
        weight: 0.3,
        opacity: 1,
        fill: true,
        fillColor: this.continentFillColor,
        fillOpacity: 1
      };
    }
  },
};
</script>

```

## Props

The MapLeaflet component accepts the following props:  - `continentFillColor` (String, default: "gray"): The fill color for the continent. - `countryCodes` (Array&lt;CountryCode&gt;): An array of country codes specifying the countries to display on the map.

## Customization

You can customize the appearance of the MapLeaflet component by modifying the provided CSS file (`MapLeaflet.css`). This allows you to adjust the styling of the map container and other elements as needed.

## Dependencies  

The MapLeaflet component relies on the following dependencies:

- Vue: A progressive JavaScript framework for building user interfaces.
- Leaflet: An open-source JavaScript library for interactive maps.
- @vue-leaflet/vue-leaflet: A Vue wrapper for Leaflet, providing Vue components for creating maps.

Please ensure that these dependencies are properly installed and configured in your project.  
That's it! You can now use the MapLeaflet component to display interactive maps with markers and circles in your Vue application. Feel free to customize the component further to meet your specific requirements.
