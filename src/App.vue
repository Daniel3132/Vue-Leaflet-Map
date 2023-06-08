<template>
  <div class="main-cont">
    <MapLeaflet continentFillColor="#111" />
  </div>
</template>

<script lang="ts">
import MapLeaflet from '@src/components/MapLeaflet/MapLeaflet.vue';
import "@src/App.css"

export default {
  components: { MapLeaflet },
};
</script>
