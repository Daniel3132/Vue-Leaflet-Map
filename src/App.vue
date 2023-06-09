<template>
  <div class="main-cont">
    <MapLeaflet :continentFillColor="continentsColor" :countryCodes="countryCodes" />
  </div>
</template>

<script lang="ts">
import MapLeaflet from '@src/components/MapLeaflet/MapLeaflet.vue';
import "@src/App.css"
import { countryCodes } from "./data/data";

export default {
  components: { MapLeaflet },
  data() {
    return {
      continentsColor: "gray",
      countryCodes: countryCodes
    }
  }
};
</script>
