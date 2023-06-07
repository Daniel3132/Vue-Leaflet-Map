MapLeaflet Component
====================

The `MapLeaflet` component is a Vue component that displays a map using the Leaflet library. It allows you to render markers and circles on the map based on the provided coordinates and colors.

Usage
-----

To use the `MapLeaflet` component, you need to import it and place it in your Vue template. Here's an example of how you can use it:

vueCopy code

`<template>   <div>     <!-- Other components or HTML elements -->      <MapLeaflet />   </div> </template>  <script> import MapLeaflet from "@/components/MapLeaflet";  export default {   components: {     MapLeaflet,   }, }; </script>`

Props
-----

The `MapLeaflet` component doesn't accept any props.

Slots
-----

The `MapLeaflet` component doesn't provide any slots.

Data
----

The `MapLeaflet` component has the following data properties:

* `zoom`: Represents the initial zoom level of the map. It is set to `1` by default.
* `coordinates`: An array of objects containing the coordinates and color information for the markers and circles on the map. It is populated using the `getDataArray` method.

Methods
-------

The `MapLeaflet` component defines the following method:

### `getDataArray(countryCodes: CountryCode[]): Array<{ coordinates: LatLngTuple; color: string }>`

This method takes an array of `countryCodes` and returns an array of objects containing the coordinates and color information for the markers and circles on the map. It uses the `countryData` module to retrieve the data for each country based on its country code.

Dependencies
------------

The `MapLeaflet` component relies on the following dependencies:

* `@vue-leaflet/vue-leaflet`: Provides the Leaflet components for Vue.
* `leaflet`: The Leaflet library itself.
* `./MapLeaflet.css`: A CSS file that contains styling for the `MapLeaflet` component.
* `@src/data/data`: A module that provides country code data.
* `@src/types/CountryCode`: A type definition for country codes.
* `./countryData`: A module that provides country data including coordinates and color information.

Please ensure that these dependencies are properly installed and configured in your project before using the `MapLeaflet` component.

Styling
-------

The `MapLeaflet` component applies styling defined in the `MapLeaflet.css` file. You can customize the styling by modifying this CSS file or overriding the styles in your own project's stylesheets.
