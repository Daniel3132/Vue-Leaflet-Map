<template>
  <div class="map-wrapper">
    <MapLeaflet />
  </div>
</template>

<script lang="ts">
import "./App.css"
import MapLeaflet from '@src/components/MapLeaflet/MapLeaflet.vue';

export default {
  components: { MapLeaflet },
};
</script>
